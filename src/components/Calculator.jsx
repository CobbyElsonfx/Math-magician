import React, { useState } from 'react';
// import Screen from './Screen';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = async (buttonName) => {
    // setCalculatorData()
    const newData = await calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <>
      <div className="calculatorWrapper">
        <div className="displayScreen">
          <div>
            <span className="calculatorValueOnScreen">{calculatorData.next || calculatorData.total || 0}</span>
          </div>
        </div>
        <div className="buttonsContainer">
          <button type="button" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" onClick={() => handleClick('+')}>+/-</button>
          <button type="button" onClick={() => handleClick('%')}>%</button>
          <button type="button" onClick={() => handleClick('÷')}>&divide;</button>
        </div>
        <div className="buttonsContainer">
          <button type="button" onClick={() => handleClick('7')}>7</button>
          <button type="button" onClick={() => handleClick('8')}>8</button>
          <button type="button" onClick={() => handleClick('9')}>9</button>
          <button type="button" onClick={() => handleClick('x')}>&times;</button>
        </div>
        <div className="buttonsContainer">
          <button type="button" onClick={() => handleClick('4')}>4</button>
          <button type="button" onClick={() => handleClick('5')}>5</button>
          <button type="button" onClick={() => handleClick('6')}>6</button>
          <button type="button" onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="buttonsContainer">
          <button type="button" onClick={() => handleClick('1')}>1</button>
          <button type="button" onClick={() => handleClick('2')}>2</button>
          <button type="button" onClick={() => handleClick('3')}>3</button>
          <button type="button" onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="buttonsContainer">
          <button type="button" id="zeroButton" onClick={() => handleClick('AC')}>0</button>
          <button type="button" onClick={() => handleClick('.')}>.</button>
          <button type="button" onClick={() => handleClick('=')}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
