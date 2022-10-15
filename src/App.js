import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { Income } from "./Components/Income";
import { History } from "./Components/History";
import { NewTransition } from "./Components/NewTransition";
import { GlobalProvider } from "./Components/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="All">
        <Header />
        <div className="Container">
          <Balance />
          <Income />
          <History />
          <NewTransition />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
