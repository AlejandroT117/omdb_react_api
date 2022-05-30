import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import {AppProvider} from "./context/AppContext"
import { Movie } from "./components/Movie";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <pre>{process.env.REACT_APP_API_KEY}</pre>
        <Login/>
        <Movie/>
      </div>
    </AppProvider>
  );
}

export default App;
