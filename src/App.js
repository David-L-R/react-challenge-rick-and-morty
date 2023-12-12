import "./App.css";

function App() {
  return (
    <div className='App'>
      <nav>
        <input />
        <button>Search</button>
      </nav>
      <section className='main'>
        <div className='card'>
          <img src={""} className='cardImage' alt='' />
          <div className='card-header'>
            <h2>Card title</h2>
          </div>
          <div className='card-body'>
            <p>Card body</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
