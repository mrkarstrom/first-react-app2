function App() {
  const title = 'Welcome to my blog';
  const body = 'This is the first blog post';
  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <h2>{body}</h2>
      {Math.floor(Math.random() * 6) + 1}
    </div>
  );
}

export default App;
