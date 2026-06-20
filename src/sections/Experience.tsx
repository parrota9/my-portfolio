const roles = [
  {
    period: "2025 — 2026",
    title: "Software Engineer Intern",
    desc: "Built a multi-tenant IoT/ESG monitoring platform from scratch, serving 30+ subsidiaries across a holding group.",
    company: "SquareCloud (Malaysia) Sdn Bhd",
    stack: "Node.js · Express.js\nSequelize ORM",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-[clamp(80px,10vw,150px)] px-7 border-t border-t-line"
    >
      <div className="max-w-295 mx-auto">
        <div className="flex justify-between items-baseline gap-6 mb-[clamp(36px,5vw,60px)]">
          <div className="font-mono text-[12px] tracking-[0.06em] text-muted">
            ( 02 ) &nbsp; Experience
          </div>
          <div className="font-mono text-[12px] text-muted">{String(roles.length).padStart(2, "0")} roles</div>
        </div>

        {roles.map(({ period, title, desc, company, stack }, i) => (
          <div
            key={i}
            className={`exrow border-t border-t-line py-[clamp(22px,3vw,30px)] ${i === roles.length - 1 ? "border-b border-b-line" : ""}`}
          >
            <div className="exrow-grid grid grid-cols-[140px_1fr_1.1fr_130px] gap-6 items-baseline">
              <div className="font-mono text-[13px] text-muted">{period}</div>
              <div>
                <div className="font-bold text-[clamp(20px,2.2vw,28px)] tracking-[-0.02em]">
                  {title}
                </div>
                <div className="font-mono text-[12px] text-muted mt-1">{company}</div>
              </div>
              <div className="text-[14px] leading-[1.6] text-muted">
                {desc}
              </div>
              <div className="font-mono text-[12px] text-muted leading-[1.7] whitespace-pre-line">
                {stack}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
