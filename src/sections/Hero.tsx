export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100dvh-58px)] flex flex-col"
    >
      <div className="split3 animate-fade-up flex-1 grid grid-cols-[1.45fr_1fr] gap-[clamp(32px,5vw,64px)] items-center px-7 py-[clamp(44px,5vw,72px)]">
        <div>
          <div className="font-mono text-[12px] tracking-[0.04em] text-muted mb-[clamp(20px,3vw,32px)]">
            // software engineer — est. 2025
          </div>
          <h1 className="font-bold tracking-[-0.05em] leading-[0.8] text-[clamp(60px,12vw,184px)] m-0">
            zaky
            <br />
            hakim
          </h1>
        </div>
        <div className="border border-line rounded-[2px] bg-card font-mono text-[13px] leading-[1.5]">
          <div className="flex justify-between items-center px-[18px] py-[14px] border-b border-b-line text-muted text-[11px] tracking-[0.05em]">
            <span>~/zaky — profile</span>
            <span className="flex gap-1.5">
              <span className="w-[9px] h-[9px] rounded-full bg-[#3a3a3a]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[#3a3a3a]" />
              <span className="w-[9px] h-[9px] rounded-full bg-[#3a3a3a]" />
            </span>
          </div>
          <div className="px-[18px] pt-1.5 pb-3.5">
            <div className="flex justify-between gap-4 py-[9px] border-b border-b-line">
              <span className="text-muted">role</span>
              <span>Software Engineer</span>
            </div>
            <div className="flex justify-between gap-4 py-[9px] border-b border-b-line">
              <span className="text-muted">location</span>
              <span>Surabaya, ID</span>
            </div>
            <div className="flex justify-between gap-4 py-[9px] border-b border-b-line">
              <span className="text-muted">experience</span>
              <span>1 year</span>
            </div>
            <div className="flex justify-between gap-4 py-[9px] border-b border-b-line">
              <span className="text-muted">focus</span>
              <span>Backend Development</span>
            </div>
            <div className="flex justify-between gap-4 py-[9px] border-b border-b-line">
              <span className="text-muted">status</span>
              <span className="flex items-center gap-[7px]">
                <span className="w-[7px] h-[7px] rounded-full bg-green shadow-[0_0_8px_#9fe870]" />
                available
              </span>
            </div>
            <div className="flex justify-between gap-4 py-[9px]">
              <span className="text-muted">email</span>
              <a href="mailto:zaky.hakim@outlook.com" className="lk font-mono">
                zaky.hakim@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
