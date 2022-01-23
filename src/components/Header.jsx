function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>Feedback UI</h2>
        <h3>{text}</h3>
      </div>
    </header>
  );
}

export default Header;
