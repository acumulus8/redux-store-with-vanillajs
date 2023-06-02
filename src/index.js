import "./styles.css";
import {
  countReducer,
  decrementCount,
  incrementCount
} from "./app/features/count/countSlice";
import Store from "./app/store";

const store = new Store(countReducer);

function render() {
  document.getElementById("app").innerHTML = `
  <h1>The current count is ${store.getState()}</h1>
  <div>
    <button id="increment">INCREASE</button>
    <button id="decrement">DECREASE</button>
  </div>
  `;

  const increaseButton = document.getElementById("increment");
  const decreaseButton = document.getElementById("decrement");
  increaseButton.addEventListener("click", () =>
    store.dispatch(incrementCount())
  );
  decreaseButton.addEventListener("click", () => {
    store.dispatch(decrementCount());
  });
}

render();

store.subscribe(render);
