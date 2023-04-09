// ACTIONS
const incrementAction = {
  type: "INCREMENT",
};

const incrementByTen = {
  type: "INCREMENTBYTEN",
};

const decrementAction = {
  type: "DECREMENT",
};
const decrementByTen = {
  type: "DECREMENTBYTEN",
};
const reset = {
  type: "RESET",
};

// REDUCER
let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENTBYTEN":
      return state + 10;
    case "DECREMENTBYTEN":
      return state - 10;
    case "RESET":
      return (state = initialState);
    default:
      return state;
  }
};

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById("counter-render");
const incrementButton = document.getElementById("button-increment");
const decrementButton = document.getElementById("button-decrement");
const incrementByTenButton = document.getElementById("button-increment-by-ten");
const decrementByTenButton = document.getElementById("button-decrement-by-ten");
const resetButton = document.getElementById("button-reset");

// MAIN
const render = () => {
  counterRender.innerText = store.getState();
};

render();
store.subscribe(render);

incrementButton.addEventListener("click", () =>
  store.dispatch(incrementAction)
);
decrementButton.addEventListener("click", () =>
  store.dispatch(decrementAction)
);
incrementByTenButton.addEventListener("click", () =>
  store.dispatch(incrementByTen)
);
decrementByTenButton.addEventListener("click", () =>
  store.dispatch(decrementByTen)
);
resetButton.addEventListener("click", () => store.dispatch(reset));
