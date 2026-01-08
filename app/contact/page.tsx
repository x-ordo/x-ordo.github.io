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
    <div className="bg-white min-h-screen pb-12 md:pb-20">
      <div className="system-grid w-full border-black">

        {/* Header */}
        <div className="col-span-12 p-8 md:p-16 lg:p-20 border-b-2 border-black bg-[#fafafa]">
          <span className="text-label inline-block mb-8 md:mb-10 border-b-2 border-black">Establish Link</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-8 md:mb-12 leading-[0.95]">
            Let's build the <span className="text-[#00cc00]">Future</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-black max-w-3xl leading-[1.6]">
            스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을 환영합니다.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="col-span-12 md:col-span-6 p-8 md:p-16 lg:p-20 border-b-2 md:border-b-0 md:border-r-2 border-black">
          <h2 className="text-label mb-10 md:mb-14">Communications</h2>
          <div className="space-y-12 md:space-y-16">
            <div>
              <p className="text-xs md:text-sm font-black text-gray-400 uppercase mb-4 md:mb-5 tracking-widest">Secure Email</p>
              <p className="text-xl md:text-2xl lg:text-3xl font-black mb-8 md:mb-10 break-all">haspark912@kakao.com</p>
              <a href="mailto:haspark912@kakao.com" className="btn-system">
                Send Transmission
              </a>
            </div>
            <div className="pt-12 md:pt-14 border-t-2 border-dashed border-black/10">
              <p className="text-xs md:text-sm font-black text-gray-400 uppercase mb-4 md:mb-5 tracking-widest">Public Profile</p>
              <p className="text-xl md:text-2xl lg:text-3xl font-black mb-8 md:mb-10">github.com/x-ordo</p>
              <a href="https://github.com/x-ordo" target="_blank" rel="noopener noreferrer" className="btn-system bg-white">
                Visit Intelligence Base
              </a>
            </div>
          </div>
        </div>

        {/* Focus & Status */}
        <div className="col-span-12 md:col-span-6 p-8 md:p-16 lg:p-20 flex flex-col justify-between bg-[#f0f0f0]">
          <div>
            <h2 className="text-label mb-10 md:mb-14">Current Status</h2>
            <Lanyard />
          </div>

          <div className="mt-16 md:mt-20">
            <h2 className="text-label mb-8 md:mb-10">Primary Focus Areas</h2>
            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {focusAreas.map((item) => (
                <span key={item} className="text-[11px] md:text-xs font-black bg-white border-2 border-black px-3 md:px-4 py-2 md:py-2.5 shadow-[4px_4px_0_0_#000]">
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