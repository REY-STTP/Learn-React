import React from "react";

const Button = (props) => {
  const { children = "...", variant = "bg-black" } = props
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-green-400 min-h-screen items-center">
      <div className="flex gap-x-3">
      <Button variant="bg-red-500">WIN Filter</Button>
      <Button variant="bg-blue-600">Order Now</Button>
      <Button></Button>
      <Button>CLick</Button>
      <Button></Button>
      </div>
      
    </div>
  )
}

export default App
