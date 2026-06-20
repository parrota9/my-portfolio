export default function CTA() {
  return (
    <section
      id="cta"
      className="-mx-7 px-7 border-t border-t-line"
    >
      <div className="w-full bg-panel border border-line p-[clamp(28px,4vw,56px)] rounded-xs">
        {/* Desktop metadata row */}
        <div className="meta3 hidden md:flex justify-between gap-6 text-[12px] leading-[1.65]">
          <div className="max-w-65">
            Software Engineer
            <br />
            Full-Stack · Systems
            <br />
            Open to opportunities
          </div>
          <div>
            Let's build something
            <br />
            <a href="mailto:zaky.hakim@outlook.com" className="lk">
              Get in touch
            </a>
          </div>
          <div className="text-right">
            Surabaya, Indonesia
            <br />
            2026
          </div>
        </div>

        {/* Mobile metadata row */}
        <div className="md:hidden text-[12px] leading-[1.65]">
          <div>Software Engineer · Surabaya, Indonesia</div>
          <div>Open to opportunities</div>
        </div>

        <h2 className="font-bold tracking-[-0.045em] leading-[0.84] text-[clamp(54px,13.5vw,196px)] mt-4 md:mt-[clamp(34px,6vw,76px)] mb-[clamp(28px,4vw,46px)]">
          zaky hakim
        </h2>
        <div className="flex justify-between gap-6 text-[12px] pt-1">
          <a href="mailto:zaky.hakim@outlook.com" className="lk">
            Contact
          </a>
          <a href="mailto:zaky.hakim@outlook.com" className="lk">
            zaky.hakim@outlook.com
          </a>
        </div>
      </div>
    </section>
  );
}
