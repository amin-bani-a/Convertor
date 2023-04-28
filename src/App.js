import { useEffect } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

function App() {
  const BASE_URL = "https://api.exchangerate.host/latest";
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
