function Test(bgColor, textColor) {
  const testStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <div className="container" style={testStyles}>
      <h2>This is the Test-component!</h2>
    </div>
  );
}

export default Test;
