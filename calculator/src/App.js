import { useState } from 'react';
import { evaluate } from 'mathjs';

import './App.scss';

function App() {
  const [expression, setExpression] = useState('');
  const [output, setOutput] = useState('');

  const buttonHandler = (value) => {
    const lastInput = expression.charAt(expression.length - 1);

    if (['*', '+', '-', '/'].includes(value) && value === lastInput) {
      return;
    }

    if (!['equals', 'clear'].includes(value)) {
      setExpression(expression + value);

      if (!['*', '+', '-', '/'].includes(value)) {
        if (value === lastInput) {
          setOutput(output + value);
        } else {
          setOutput(value);
        }
      }
    }

    if (['*', '-', '+', '/'].includes(lastInput)) {
      setOutput(value);
    }

    if (value === 'equals') {
      const evaluatedExpression = evaluate(expression).toString();

      setExpression(evaluatedExpression);
      setOutput(evaluatedExpression);
    }

    if (value === 'clear') {
      setExpression('');
      setOutput('');
    }
  };

  return (
    <div className="App">
      <div className="Calculator">
        <div className="Calculator__row">
          <input
            placeholder="0"
            readOnly
            className="Calculator__row__input"
            value={output}
          />
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--multiply"
            onClick={() => buttonHandler('*')}
          >
            x
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--9"
            onClick={() => buttonHandler('9')}
          >
            9
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--8"
            onClick={() => buttonHandler('8')}
          >
            8
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--7"
            onClick={() => buttonHandler('7')}
          >
            7
          </button>
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--subtract"
            onClick={() => buttonHandler('-')}
          >
            -
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--6"
            onClick={() => buttonHandler('6')}
          >
            6
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--5"
            onClick={() => buttonHandler('5')}
          >
            5
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--4"
            onClick={() => buttonHandler('4')}
          >
            4
          </button>
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--add"
            onClick={() => buttonHandler('+')}
          >
            +
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--3"
            onClick={() => buttonHandler('3')}
          >
            3
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--2"
            onClick={() => buttonHandler('2')}
          >
            2
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--1"
            onClick={() => buttonHandler('1')}
          >
            1
          </button>
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--divide"
            onClick={() => buttonHandler('/')}
          >
            /
          </button>

          <button
            className="Calculator__row__button Calculator__row__button--equals"
            onClick={() => buttonHandler('equals')}
          >
            =
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--0"
            onClick={() => buttonHandler('0')}
          >
            0
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--clear"
            onClick={() => buttonHandler('clear')}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
