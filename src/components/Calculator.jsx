import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = async (buttonName) => {
    const newData = await calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <>
      <div className="calculatorWrapperFall">
        <div>
          <h2>Lets do some Maths</h2>
        </div>
        <div className="calculatorWrapper">
          <div className="displayScreen">
            <div>
              <span
                id="display"
                className="
            calculatorValueOnScreen"
              >
                {calculatorData
                  .next || calculatorData.total
               || calculatorData.operation || 0 }
              </span>
            </div>
          </div>
          <div className="buttonsContainer">
            <button type="button" onClick={() => handleClick('AC')}>AC</button>
            <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
            <button type="button" onClick={() => handleClick('%')}>%</button>
            <button type="button" onClick={() => handleClick('÷')}>÷</button>
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
            <button type="button" id="zeroButton" onClick={() => handleClick('0')}>0</button>
            <button type="button" onClick={() => handleClick('.')}>.</button>
            <button type="button" onClick={() => handleClick('=')}>=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
