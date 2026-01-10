import type { Metadata } from "next";
import Lanyard from "../../components/ui/Lanyard";

export const metadata: Metadata = {
  title: "Contact | Jed Park",
  description: "프로젝트 협업 및 문의를 위한 연락처 페이지입니다.",
};

const focusAreas = [
  "LLM Product Design",
  "B2B SaaS",
  "Automation",
  "RAG Pipelines",
  "Growth & Monetization",
];

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">

        {/* Header */}
        <section className="py-12 md:py-16 border-b-2 border-black bg-[#fafafa] -mx-4 md:-mx-6 px-4 md:px-6">
          <div className="flex flex-col gap-4">
            <span className="ds-badge w-fit">
              Establish Link
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#171a20] leading-tight">
                Let&apos;s build the <span className="text-[#00cc00]">Future</span>
              </h1>
              <p className="text-sm md:text-base text-[#5c5e62] font-medium max-w-2xl">
                스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을 환영합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">

            {/* Communications */}
            <div className="p-6 md:p-8 border-2 border-black rounded-xl bg-white shadow-[4px_4px_0_#00ff00]">
              <div className="flex flex-col gap-6">
                <span className="ds-badge w-fit">
                  Communications
                </span>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    Secure Email
                  </p>
                  <p className="text-lg md:text-xl font-black text-[#171a20] break-all">
                    haspark912@kakao.com
                  </p>
                  <a
                    href="mailto:haspark912@kakao.com"
                    className="ds-button ds-button-primary w-fit"
                  >
                    Send Email
                  </a>
                </div>

                {/* GitHub */}
                <div className="pt-6 border-t-2 border-dashed border-black/10 flex flex-col gap-3">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                    Public Profile
                  </p>
                  <p className="text-lg md:text-xl font-black text-[#171a20]">
                    github.com/x-ordo
                  </p>
                  <a
                    href="https://github.com/x-ordo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ds-button ds-button-secondary w-fit"
                  >
                    Visit GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Focus & Status */}
            <div className="p-6 md:p-8 border-2 border-black rounded-xl bg-[#171a20] shadow-[4px_4px_0_#000]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00ff00]/10 rounded text-xs font-mono font-bold text-[#00ff00] border border-[#00ff00]/30 w-fit">
                    Current Status
                  </span>
                  <Lanyard />
                </div>

                <div className="flex flex-col gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00ff00]/10 rounded text-xs font-mono font-bold text-[#00ff00] border border-[#00ff00]/30 w-fit">
                    Primary Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-bold bg-white/10 text-white border border-white/20 px-3 py-2 rounded hover:bg-[#00ff00] hover:text-black hover:border-[#00ff00] transition-all cursor-default"
                      >
                        {item.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
