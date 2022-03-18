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
         <small> <a href="https://github.com/MaariaCaroline/dictionary-app" target="_blank">Coded by</a></small>
        </footer>
      </div>
     
    </div>
  );
}
