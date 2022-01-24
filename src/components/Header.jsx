function Header({ text }) {
  return (
    <header>
      <div className="container" style={{ color: 'purple' }}>
        <h2>Feedback UI</h2>
        <h3>{text}</h3>
      </div>
    </header>
  );
}

export default Header;
