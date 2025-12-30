"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name: string;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Array<{
    name: string;
    type: number;
    state?: string;
    details?: string;
    application_id?: string;
    assets?: {
      large_image?: string;
      large_text?: string;
      small_image?: string;
      small_text?: string;
    };
  }>;
  listening_to_spotify: boolean;
  spotify?: {
    song: string;
    artist: string;
    album: string;
    album_art_url: string;
  };
}

interface LanyardProps {
  userId?: string;
  className?: string;
}

const statusColors = {
  online: "#00ff00",
  idle: "#ffff00",
  dnd: "#ff0000",
  offline: "#666666",
};

const statusLabels = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
};

export default function Lanyard({ userId, className = "" }: LanyardProps) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const fetchLanyard = async () => {
      try {
        const res = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const json = await res.json();
        if (json.success) {
          setData(json.data);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
    };

    fetchLanyard();

    // WebSocket for real-time updates
    const ws = new WebSocket("wss://api.lanyard.rest/socket");

    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          op: 2,
          d: { subscribe_to_id: userId },
        })
      );
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.op === 0 && message.t === "INIT_STATE") {
        setData(message.d[userId]);
      } else if (message.op === 0 && message.t === "PRESENCE_UPDATE") {
        setData(message.d);
      } else if (message.op === 1) {
        // Heartbeat
        ws.send(JSON.stringify({ op: 3 }));
      }
    };

    return () => ws.close();
  }, [userId]);

  // Demo mode if no userId
  if (!userId) {
    return (
      <div
        className={`border-3 border-black bg-white p-4 ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00ff00] to-[#00ffff] rounded-full flex items-center justify-center text-black font-bold">
              JP
            </div>
            <span
              className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white"
              style={{ backgroundColor: statusColors.online }}
            />
          </div>
          <div>
            <p className="font-bold text-sm">Jed Park</p>
            <p className="text-xs text-black/60 flex items-center gap-1">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: statusColors.online }}
              />
              {statusLabels.online}
            </p>
          </div>
        </div>
        <div className="mt-3 p-2 bg-black/5 border border-black/10 text-xs">
          <p className="text-black/50 uppercase tracking-wider text-[10px] mb-1">
            Activity
          </p>
          <p className="font-medium">Coding Portfolio</p>
          <p className="text-black/60">Building awesome stuff</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div
        className={`border-3 border-black bg-white p-4 ${className}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-black/10 rounded-full animate-pulse" />
          <div className="space-y-2">
            <div className="w-24 h-4 bg-black/10 rounded animate-pulse" />
            <div className="w-16 h-3 bg-black/10 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  const status = data.discord_status;
  const activity = data.activities[0];
  const avatarUrl = data.discord_user.avatar
    ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`
    : null;

  return (
    <div
      className={`border-3 border-black bg-white p-4 hover:shadow-[6px_6px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={data.discord_user.username}
              width={48}
              height={48}
              className="rounded-full border-2 border-black"
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-[#00ff00] to-[#00ffff] rounded-full flex items-center justify-center text-black font-bold">
              {data.discord_user.username[0].toUpperCase()}
            </div>
          )}
          <span
            className="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white"
            style={{ backgroundColor: statusColors[status] }}
          />
        </div>
        <div>
          <p className="font-bold text-sm">
            {data.discord_user.global_name || data.discord_user.username}
          </p>
          <p className="text-xs text-black/60 flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: statusColors[status] }}
            />
            {statusLabels[status]}
          </p>
        </div>
      </div>

      {data.listening_to_spotify && data.spotify && (
        <div className="mt-3 p-2 bg-[#1DB954]/10 border border-[#1DB954]/30 text-xs">
          <p className="text-[#1DB954] uppercase tracking-wider text-[10px] mb-1 flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Listening to Spotify
          </p>
          <p className="font-medium truncate">{data.spotify.song}</p>
          <p className="text-black/60 truncate">{data.spotify.artist}</p>
        </div>
      )}

      {activity && !data.listening_to_spotify && (
        <div className="mt-3 p-2 bg-black/5 border border-black/10 text-xs">
          <p className="text-black/50 uppercase tracking-wider text-[10px] mb-1">
            {activity.type === 0 ? "Playing" : "Activity"}
          </p>
          <p className="font-medium truncate">{activity.name}</p>
          {activity.details && (
            <p className="text-black/60 truncate">{activity.details}</p>
          )}
          {activity.state && (
            <p className="text-black/60 truncate">{activity.state}</p>
          )}
        </div>
      )}
    </div>
  );
}
