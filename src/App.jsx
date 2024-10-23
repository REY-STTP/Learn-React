import React from "react";
import { Component } from "react";
function App() {
  class Button extends React.Component {
    render(){
      return(
        <button className="h-10 px-6 font-semibold rounded-md bg-white text-black" type="submit">
      Order Now
      </button>
      );
    }
  }
function ButtonBlack() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
    Order Now
      </button>
  );
}
function ButtonRed() {
  return (
    <button className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white" type="submit">
    Order Now
      </button>
  );
}
  return (
    <div className="flex justify-center bg-cyan-100 min-h-screen items-center">
      <div>
      <Button></Button>
      <Button></Button>
      <ButtonBlack></ButtonBlack>
      <ButtonRed></ButtonRed>
      </div>
      
    </div>
  )
}

export default App
