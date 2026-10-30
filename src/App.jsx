
import './App.css';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>MyApp</h2>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Welcome Section */}
      <h1>Welcome to My React App</h1>

      {/* Contact Form */}
      <div className="form-container" id="contact">
        <h2>Contact Form</h2>

        <form>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
