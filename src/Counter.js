import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dolores illo eaque quis culpa voluptates velit commodi rerum tempora unde impedit deserunt sed nulla ipsum sapiente, corrupti dicta, consequuntur, blanditiis eveniet sunt doloribus quidem ipsam molestias vero. Consectetur eum nesciunt, iste quas labore culpa vero pariatur provident aspernatur animi sequi.</p>
    </div>
  );
}
export default Counter;
