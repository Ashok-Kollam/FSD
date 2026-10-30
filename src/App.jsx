import './App.css';

function App() {
  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;