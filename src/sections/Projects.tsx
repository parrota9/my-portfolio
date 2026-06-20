const projects: {
  name: string;
  desc: string;
  stack: string;
  href: string | null;
}[] = [
  {
    name: "GreenBOS",
    desc: "Multi-tenant IoT/ESG platform built from scratch for a holding company to monitor energy, emissions, and compliance across 30+ subsidiaries in real time.",
    stack: "Node.js · Express.js · Sequelize ORM · PostgreSQL",
    href: null,
  },
  // {
  //   name: "Ledger",
  //   desc: "Event-sourced payments ledger with immutable audit trail and double-entry accounting.",
  //   stack: "TypeScript · Postgres",
  //   href: "https://github.com/parrota9",
  // },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-[clamp(80px,10vw,150px)] px-7 border-t border-t-line"
    >
      <div className="max-w-295 mx-auto">
        <div className="flex justify-between items-baseline gap-6 mb-[clamp(36px,5vw,60px)]">
          <div className="font-mono text-[12px] tracking-[0.06em] text-muted">
            ( 03 ) &nbsp; Selected Work
          </div>
          <a
            href="https://github.com/parrota9"
            target="_blank"
            rel="noopener noreferrer"
            className="navlk font-mono text-[12px] text-muted"
          >
            GitHub ↗
          </a>
        </div>

        {projects.map(({ name, desc, stack, href }, i) => {
          const rowClass = `block border-t border-t-line py-[clamp(24px,3.2vw,36px)] ${i === projects.length - 1 ? "border-b border-b-line" : ""}`;
          const inner = (
            <div className="flex justify-between items-start gap-6">
              <div className="flex gap-[clamp(16px,3vw,40px)] items-baseline min-w-0">
                <span className="font-mono text-[13px] text-muted shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-[clamp(24px,3vw,38px)] tracking-[-0.02em]">
                    {name}
                  </div>
                  {!href && (
                    <div className="md:hidden font-mono text-[11px] text-muted mt-1">
                      Private repo
                    </div>
                  )}
                  <div className="text-[14px] leading-[1.6] text-muted max-w-130 mt-2">
                    {desc}
                  </div>
                  <div className="md:hidden font-mono text-[12px] text-muted mt-2">
                    {stack}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4.5 shrink-0">
                <span className="hidden md:inline font-mono text-[12px] text-muted whitespace-nowrap">
                  {stack}
                </span>
                {href ? (
                  <span className="parr text-[18px] opacity-0 transform-[translate(-6px,6px)] [transition:opacity_.3s_ease,transform_.3s_ease]">
                    ↗
                  </span>
                ) : (
                  <span className="hidden md:inline font-mono text-[11px] text-muted">
                    Private repo
                  </span>
                )}
              </div>
            </div>
          );

          return href ? (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`prow navlk ${rowClass}`}
            >
              {inner}
            </a>
          ) : (
            <div key={name} className={rowClass}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}
