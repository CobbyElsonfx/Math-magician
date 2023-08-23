import React from 'react';

const Calculator = () => (
  <>
    <div className="calculatorWrapper">
      <div className="displayScreen">
        <div>
          <span>0</span>
        </div>
      </div>
      <div className="buttonsContainer">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button">&divide;</button>
      </div>
      <div className="buttonsContainer">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">&times;</button>
      </div>
      <div className="buttonsContainer">
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">-</button>
      </div>
      <div className="buttonsContainer">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">+</button>
      </div>
      <div className="buttonsContainer">
        <button type="button" id="zeroButton">0</button>
        <button type="button">.</button>
        <button type="button">=</button>
      </div>
    </div>
  </>
);

export default Calculator;
