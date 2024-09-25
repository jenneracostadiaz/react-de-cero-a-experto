import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";

function App() {
  return (
    <>
    <Counter initialValue={5} />
    <CounterBy  />
    </>
  );
}

export default App;
