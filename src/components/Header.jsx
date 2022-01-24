function Header({ text }) {
  const headerStyles = {};

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Feedback UI</h2>
        <h3>{text}</h3>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI2',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: 'blue',
};

export default Header;
