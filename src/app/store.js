class Store {
  constructor(reducer = () => {}) {
    this.reducer = reducer;
    this.state = reducer(undefined, { type: "initial" });
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    const newState = this.reducer(this.state, action);
    this.state = newState;
    console.log(this.listeners);
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener = () => {}) {
    this.listeners.push(listener);
    return () => {
      this.listeners.filter((l) => l !== listener);
    };
  }
}

export default Store;
