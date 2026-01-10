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
    <div className="bg-white min-h-screen pb-16 md:pb-24">
      <div className="system-grid w-full border-black">

        {/* Header - Senior Readable */}
        <div className="col-span-12 p-10 md:p-20 lg:p-24 border-b-4 border-black bg-[#fafafa]">
          <span className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-8 md:mb-10 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            Establish Link
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-10 md:mb-14 leading-[0.95]">
            Let&apos;s build the <span className="text-[#00cc00]">Future</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black max-w-4xl leading-[1.6]">
            스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을 환영합니다.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="col-span-12 md:col-span-6 p-10 md:p-16 lg:p-20 border-b-4 md:border-b-0 md:border-r-4 border-black">
          <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-12 md:mb-16 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
            Communications
          </h2>

          <div className="space-y-14 md:space-y-20">
            {/* Email */}
            <div>
              <p className="text-sm md:text-base font-black text-gray-400 uppercase mb-5 md:mb-6 tracking-widest">
                Secure Email
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black mb-10 md:mb-12 break-all text-[#171a20]">
                haspark912@kakao.com
              </p>
              <a
                href="mailto:haspark912@kakao.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00cc00] text-black font-black text-lg md:text-xl uppercase tracking-wider rounded-xl border-4 border-black shadow-[6px_6px_0_#000] hover:shadow-[8px_8px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#000] transition-all"
              >
                Send Email
              </a>
            </div>

            {/* GitHub */}
            <div className="pt-14 md:pt-16 border-t-4 border-dashed border-black/10">
              <p className="text-sm md:text-base font-black text-gray-400 uppercase mb-5 md:mb-6 tracking-widest">
                Public Profile
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-black mb-10 md:mb-12 text-[#171a20]">
                github.com/x-ordo
              </p>
              <a
                href="https://github.com/x-ordo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-black text-white font-black text-lg md:text-xl uppercase tracking-wider rounded-xl border-4 border-black shadow-[6px_6px_0_#00ff00] hover:bg-[#00ff00] hover:text-black hover:shadow-[8px_8px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#000] transition-all"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Focus & Status */}
        <div className="col-span-12 md:col-span-6 p-10 md:p-16 lg:p-20 flex flex-col justify-between bg-[#f0f0f0]">
          <div>
            <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-12 md:mb-16 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
              Current Status
            </h2>
            <Lanyard />
          </div>

          <div className="mt-20 md:mt-24">
            <h2 className="inline-block text-sm md:text-base font-mono font-black uppercase tracking-wider text-[#00cc00] mb-10 md:mb-12 px-4 py-2 bg-[#00ff00]/10 border-2 border-[#00cc00]/30 rounded-lg">
              Primary Focus Areas
            </h2>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="text-sm md:text-base font-black bg-white border-4 border-black px-5 md:px-6 py-3 md:py-4 shadow-[4px_4px_0_#000] hover:bg-[#00ff00] hover:shadow-[6px_6px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {item.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
