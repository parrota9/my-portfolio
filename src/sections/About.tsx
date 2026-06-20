export default function About() {
  return (
    <section
      id="about"
      className="py-[clamp(80px,10vw,150px)] px-7 border-t border-t-line"
    >
      <div className="max-w-295 mx-auto">
        <div className="font-mono text-[12px] tracking-[0.06em] text-muted mb-[clamp(32px,5vw,56px)]">
          ( 01 ) &nbsp; About
        </div>
        <div className="ab-grid grid grid-cols-[1.6fr_1fr] gap-[clamp(36px,6vw,80px)] items-start">
          <div>
            <p className="font-bold tracking-[-0.02em] leading-[1.1] text-[clamp(26px,3.6vw,46px)] mb-[clamp(28px,4vw,40px)]">
              I build backend systems that are reliable, maintainable, and
              designed to scale.
            </p>
            <p className="text-[clamp(15px,1.4vw,17px)] leading-[1.7] text-muted max-w-140">
              I'm a final-year Computer Science student based in Indonesia,
              recently wrapped up an internship where I built a multi-tenant
              IoT/ESG platform from scratch, handling everything from schema
              design and job queues to third-party integrations. I care about
              systems that are well-structured under the hood, and interfaces
              that don't get in the way.
            </p>
          </div>
          <div>
            {/* TODO: portrait */}
            {/* <div className="w-full aspect-4/5 border border-line rounded-xs bg-card flex items-center justify-center text-muted font-mono text-[12px] tracking-[0.04em]">
              portrait
            </div> */}
            <div className="mt-4.5 font-mono text-[12px] leading-[1.9] text-muted">
              <div className="flex justify-between border-b border-b-line py-1">
                <span>based</span>
                <span className="text-off">Surabaya, ID</span>
              </div>
              <div className="flex justify-between border-b border-b-line py-1">
                <span>experience</span>
                <span className="text-off">1 year</span>
              </div>
              <div className="flex justify-between border-b border-b-line py-1">
                <span>remote</span>
                <span className="text-off">open</span>
              </div>
              <div className="flex justify-between border-b border-b-line py-1">
                <span>available</span>
                <span className="text-off">Aug 2026</span>
              </div>
              <div className="flex justify-between border-b border-b-line py-1">
                <span>education</span>
                <span className="text-off">Taylor's University, CS</span>
              </div>
              <div className="flex justify-between py-1">
                <span>focus</span>
                <span className="text-off">Backend · Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
