function App() {
  const title = 'Welcome to my blog';
  const body = 'This is the first blog post';
  const comments = [
    { id: 1, text: 'Here is comment one' },
    { id: 2, text: 'Here is comment two' },
    { id: 3, text: 'Here is comment three' },
  ];

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <h2>{body}</h2>
      {Math.floor(Math.random() * 6) + 1}

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
