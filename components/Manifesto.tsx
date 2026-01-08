"use client";

import React from "react";

export default function Manifesto() {
  return (
    <section className="py-20 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40 border-b border-black/10 pb-1">
            System Philosophy
          </span>
          <h2 className="text-2xl md:text-4xl font-black mt-3 mb-4 tracking-tight">
            The Sovereign Hacker's Code
          </h2>
          <blockquote className="text-lg md:text-xl font-medium text-black/70 italic border-l-2 border-[#00cc00] pl-4 py-1 max-w-3xl">
            "A Sovereign Hacker is one who understands the whole system—code, capital, and power—to maintain total agency."
          </blockquote>
          <p className="mt-3 text-xs text-black/40 font-mono">
            * In business terms: We don't just build software; we architect sovereignty and profit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Axioms List */}
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest border-b border-black/20 pb-2">
              The Path to Sovereignty
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start group">
                <span className="font-mono text-[#00cc00] font-bold text-sm mt-0.5 group-hover:translate-x-1 transition-transform">01</span>
                <div>
                  <h4 className="font-bold text-base mb-1">Sovereignty First (The Goal)</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    The ultimate objective is Agency. Freedom from the fragile financial order and corporate dependency.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start group">
                <span className="font-mono text-[#00cc00] font-bold text-sm mt-0.5 group-hover:translate-x-1 transition-transform">02</span>
                <div>
                  <h4 className="font-bold text-base mb-1">Monopoly (The Shield)</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    <i>Peter Thiel:</i> "Competition is for losers." We build monopolies in neglected niches to secure our freedom.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start group">
                <span className="font-mono text-[#00cc00] font-bold text-sm mt-0.5 group-hover:translate-x-1 transition-transform">03</span>
                <div>
                  <h4 className="font-bold text-base mb-1">Pragmatism (The Sword)</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    <i>Chinese Efficiency:</i> "Ugly UI, Beautiful Margins." If it generates cash flow, aesthetics are secondary.
                  </p>
                </div>
              </li>
              <li className="flex gap-3 items-start group">
                <span className="font-mono text-[#00cc00] font-bold text-sm mt-0.5 group-hover:translate-x-1 transition-transform">04</span>
                <div>
                  <h4 className="font-bold text-base mb-1">Structural Exploitation</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    We exploit information asymmetry and systemic inefficiencies in "dirty" markets that others ignore.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Market Thesis Table */}
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest border-b border-black/20 pb-2">
              Target Sectors
            </h3>
            <div className="overflow-hidden border border-black/10 rounded-md">
              <table className="w-full text-xs md:text-sm text-left">
                <thead className="bg-black/5 text-[10px] uppercase font-bold text-black/50">
                  <tr>
                    <th className="px-3 py-2">Zone</th>
                    <th className="px-3 py-2">The Opportunity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-3 py-2 font-semibold">Financial Services</td>
                    <td className="px-3 py-2 text-black/60">Simplifying Complexity (Arbitrage)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-3 py-2 font-semibold">Regulatory Tech</td>
                    <td className="px-3 py-2 text-black/60">Automating Compliance (Efficiency)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-3 py-2 font-semibold">Digital Marketing</td>
                    <td className="px-3 py-2 text-black/60">Measuring the Unmeasurable (Truth)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-3 py-2 font-semibold">Legacy Industries</td>
                    <td className="px-3 py-2 text-black/60">Digital Transformation (0 to 1)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-3 py-2 font-semibold">Platform Economy</td>
                    <td className="px-3 py-2 text-black/60">Building Direct Access (Freedom)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-black/40 font-mono mt-2">
              * Identifying chaos and turning it into structured revenue streams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}