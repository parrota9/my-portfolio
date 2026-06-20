export default function Navbar() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px',
      padding: '16px 28px',
      background: 'rgba(27,27,27,0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line)',
    }}>
      <a href="#top" className="navlk" style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '-0.02em' }}>
        zaky hakim
      </a>
      <nav className="navlinks" style={{ display: 'flex', gap: '28px', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.04em', color: 'var(--muted)' }}>
        <a href="#about" className="navlk">01&nbsp; About</a>
        <a href="#experience" className="navlk">02&nbsp; Experience</a>
        <a href="#projects" className="navlk">03&nbsp; Projects</a>
        <a href="#cta" className="navlk">04&nbsp; Contact</a>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.04em', color: 'var(--off)' }}>
        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 10px var(--green)' }} />
        Available for work
      </div>
    </header>
  );
}
