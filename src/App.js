import './App.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
         <Dictionary /> 
        </main>
        <footer className="footer">
         <small>Coded by <a href="https://github.com/MaariaCaroline/dictionary-app">Maria Gasiewska</a></small>
        </footer>
      </div>
     
    </div>
  );
}
