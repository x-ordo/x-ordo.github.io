"use client";

import React from "react";

export default function Manifesto() {
  return (
    <section className="py-20 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/20 border-b border-black/5 pb-1">
            System Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 tracking-tighter">
            The Sovereign Hacker's Code
          </h2>
          <blockquote className="text-xl md:text-2xl font-bold text-black/60 italic border-l-4 border-[#00ff00] pl-6 py-2">
            "A Sovereign Hacker is one who understands the whole system—code, capital, and power—to maintain total agency."
          </blockquote>
          <p className="mt-4 text-sm text-black/40 font-mono">
            * In business terms: We don't just build software; we architect sovereignty and profit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Axioms List */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-black pb-2">
              Core Directives
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <span className="font-mono text-[#00ff00] font-bold text-lg mt-1 group-hover:translate-x-1 transition-transform">01</span>
                <div>
                  <h4 className="font-bold text-lg">Monopolies over Competition</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    <i>The Zero to One Strategy:</i> We don't compete in crowded markets. We find the "boring" problems no one solves and own them.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="font-mono text-[#00ff00] font-bold text-lg mt-1 group-hover:translate-x-1 transition-transform">02</span>
                <div>
                  <h4 className="font-bold text-lg">Pragmatism (Function {">"} Form)</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    <i>The Efficiency Rule:</i> "Ugly UI, Beautiful Margins." A system that prints value is always beautiful, regardless of its CSS.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="font-mono text-[#00ff00] font-bold text-lg mt-1 group-hover:translate-x-1 transition-transform">03</span>
                <div>
                  <h4 className="font-bold text-lg">The "Fixer" Mindset</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    I don't just write code. I identify structural inefficiencies in your business and replace them with automated order.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <span className="font-mono text-[#00ff00] font-bold text-lg mt-1 group-hover:translate-x-1 transition-transform">04</span>
                <div>
                  <h4 className="font-bold text-lg">Sovereign Reliability</h4>
                  <p className="text-black/60 text-sm leading-relaxed">
                    Sovereignty means autonomy. I build systems that are robust, self-sustaining, and don't need constant micromanagement.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Market Thesis Table */}
          <div className="space-y-8">
            <h3 className="text-xl font-black uppercase tracking-widest border-b-2 border-black pb-2">
              Target Sectors
            </h3>
            <div className="overflow-hidden border border-black/10 rounded-lg">
              <table className="w-full text-sm text-left">
                <thead className="bg-black/5 text-xs uppercase font-black">
                  <tr>
                    <th className="px-4 py-3">Zone</th>
                    <th className="px-4 py-3">The Opportunity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5">
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold">Financial Services</td>
                    <td className="px-4 py-3 text-black/60">Simplifying Complexity (Arbitrage)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold">Regulatory Tech</td>
                    <td className="px-4 py-3 text-black/60">Automating Compliance (Efficiency)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold">Digital Marketing</td>
                    <td className="px-4 py-3 text-black/60">Measuring the Unmeasurable (Truth)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold">Legacy Industries</td>
                    <td className="px-4 py-3 text-black/60">Digital Transformation (0 to 1)</td>
                  </tr>
                  <tr className="bg-white hover:bg-black/[0.02] transition-colors">
                    <td className="px-4 py-3 font-bold">Platform Economy</td>
                    <td className="px-4 py-3 text-black/60">Building Direct Access (Freedom)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-black/40 font-mono mt-4">
              * Identifying chaos and turning it into structured revenue streams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}