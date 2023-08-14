import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-red-600">Hello World {count}</h1>
      <button
        className="rounded text-2xl bg-slate-50 p-3"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
