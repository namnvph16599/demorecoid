import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

const countNextState = selector({
  key: "counterNextState",
  get: ({ get }) => {
    return get(countState) + 1;
  },
});

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

const CounterInfo = () => {
  const count = useRecoilValue(countNextState);
  return <p>the next number is {count}</p>;
};

export default function App() {
  return (
    <RecoilRoot>
      <h1>Recoil counter</h1>
      <Counter />
      <CounterInfo />
    </RecoilRoot>
  );
}
