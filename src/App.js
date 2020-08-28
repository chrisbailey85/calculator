import React, { useState } from 'react';
import Button from './components/button';
import Input from './components/Input';
import './App.css';

function App() {
  const [num, newInput] = useState("0");
  let input = function (event) {
    const regex = /[+*/\-%]{1}/g
    let userInput = document.querySelector(".cal-input").textContent;
    if (!userInput.match(regex)){
      if (num === "0") {
        newInput(event.target.textContent)
      } else {
        newInput(num + event.target.textContent)
      }
    } else if (userInput.match(regex)) {
      if (!event.target.textContent.match(regex)) {
        newInput(num + event.target.textContent)
      }
    }

  }
  function sum() {
    let userInput = document.querySelector(".cal-input").textContent;
    let sum = userInput.split(" ")
    let num1 = Number(sum[0]);
    let num2 = Number(sum[2]);
    let operator = sum[1];
    switch (operator) {
      case "+":
        newInput(num1 + num2)
        console.log(num1 + num2)
        break;
      case "/":
        newInput(num1 / num2)
        console.log(num1 / num2)
        break;
      case "*":
        newInput(num1 * num2)
        console.log(num1 * num2)
        break;
      case "-":
        newInput(num1 - num2)
        console.log(num1 - num2)
        break;
      case "%":
        newInput((num1 / 100) * num2)
        console.log((num1 / 100) * num2)
        break;
      default:
        newInput("error")
    }
  }
  function clear() {
    newInput("0")
  }
  
  return (
    <div className="calculator-container">
      <div className="input-container">
        <Input value={num} />
      </div>
      <div>
        <Button onClick={input} class="button" button="1" />
        <Button onClick={input} class="button" button="2" />
        <Button onClick={input} class="button" button="3" />
        <Button onClick={input} class="button" button=" / " />
      </div>
      <div
      ><Button onClick={input} class="button" button="4" />
        <Button onClick={input} class="button" button="5" />
        <Button onClick={input} class="button" button="6" />
        <Button onClick={input} class="button" button=" - " />
      </div>
      <div>
        <Button onClick={input} class="button" button="7" />
        <Button onClick={input} class="button" button="8" />
        <Button onClick={input} class="button" button="9" />
        <Button onClick={input} class="button" button=" * " />
      </div>
      <div>
        <Button onClick={input} class="button" button="." />
        <Button onClick={input} class="button" button="0" />
        <Button onClick={input} class="button" button=" % " />
        <Button onClick={input} class="button" button=" + " />
      </div>
      <div>
        <Button onClick={clear} class="clear-button button" button="C" />
        <Button onClick={sum} class="equals-button button" button="=" />

      </div>
    </div>
  )

}

export default App;
