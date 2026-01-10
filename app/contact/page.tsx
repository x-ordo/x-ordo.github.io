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
    <div className="bg-white min-h-screen pb-16">
      <div className="system-grid w-full border-black">

        {/* Header */}
        <div className="col-span-12 p-6 md:p-10 border-b-2 border-black bg-[#fafafa]">
          <span className="badge-section">
            Establish Link
          </span>
          <h1 className="heading-section text-[#171a20] keep-all">
            Let&apos;s build the <span className="text-[#00cc00]">Future</span>
          </h1>
          <p className="text-sm md:text-base font-bold text-black max-w-3xl keep-all">
            스타트업 빌딩, AI 제품, 엔터프라이즈 자동화까지 다양한 협업을 환영합니다.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="col-span-12 md:col-span-6 p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
          <h2 className="badge-section !mb-6">
            Communications
          </h2>

          <div className="space-y-8">
            {/* Email */}
            <div>
              <p className="text-xs font-black text-gray-400 uppercase mb-3 tracking-widest">
                Secure Email
              </p>
              <p className="text-base md:text-lg font-black mb-4 break-all text-[#171a20]">
                haspark912@kakao.com
              </p>
              <a
                href="mailto:haspark912@kakao.com"
                className="btn-senior btn-senior-primary"
              >
                Send Email
              </a>
            </div>

            {/* GitHub */}
            <div className="pt-6 border-t-2 border-dashed border-black/10">
              <p className="text-xs font-black text-gray-400 uppercase mb-3 tracking-widest">
                Public Profile
              </p>
              <p className="text-base md:text-lg font-black mb-4 text-[#171a20]">
                github.com/x-ordo
              </p>
              <a
                href="https://github.com/x-ordo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-senior btn-senior-secondary"
              >
                Visit GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Focus & Status */}
        <div className="col-span-12 md:col-span-6 p-6 md:p-8 flex flex-col justify-between bg-[#f0f0f0]">
          <div>
            <h2 className="badge-section !mb-6">
              Current Status
            </h2>
            <Lanyard />
          </div>

          <div className="mt-10">
            <h2 className="badge-section !mb-4">
              Primary Focus Areas
            </h2>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="text-xs font-black bg-white border-2 border-black px-3 py-2 shadow-[2px_2px_0_#000] hover:bg-[#00ff00] hover:shadow-[3px_3px_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-default"
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
