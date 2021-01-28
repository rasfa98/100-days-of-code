import { useState } from 'react';
import { evaluate } from 'mathjs';

import './App.scss';

function App() {
  const [expression, setExpression] = useState('');

  const buttonHandler = (e, value) => {
    if (!['equals', 'percent', 'invert', 'clear'].includes(value)) {
      setExpression(expression + value);
    }

    if (value === 'equals') {
      setExpression(evaluate(expression));
    }

    if (value === 'clear') {
      setExpression('');
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
            value={expression}
          />
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--divide"
            onClick={(e) => buttonHandler(e, '/')}
          >
            /
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--percent"
            onClick={(e) => buttonHandler(e, 'percent')}
          >
            %
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--invert"
            onClick={(e) => buttonHandler(e, 'invert')}
          >
            +/-
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--clear"
            onClick={(e) => buttonHandler(e, 'clear')}
          >
            AC
          </button>
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--multiply"
            onClick={(e) => buttonHandler(e, '*')}
          >
            x
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--9"
            onClick={(e) => buttonHandler(e, '9')}
          >
            9
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--8"
            onClick={(e) => buttonHandler(e, '8')}
          >
            8
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--7"
            onClick={(e) => buttonHandler(e, '7')}
          >
            7
          </button>
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--subtract"
            onClick={(e) => buttonHandler(e, '-')}
          >
            -
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--6"
            onClick={(e) => buttonHandler(e, '6')}
          >
            6
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--5"
            onClick={(e) => buttonHandler(e, '5')}
          >
            5
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--4"
            onClick={(e) => buttonHandler(e, '4')}
          >
            4
          </button>
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--add"
            onClick={(e) => buttonHandler(e, '+')}
          >
            +
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--3"
            onClick={(e) => buttonHandler(e, '3')}
          >
            3
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--2"
            onClick={(e) => buttonHandler(e, '2')}
          >
            2
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--1"
            onClick={(e) => buttonHandler(e, '1')}
          >
            1
          </button>
        </div>

        <div className="Calculator__row">
          <button
            className="Calculator__row__button Calculator__row__button--equals"
            onClick={(e) => buttonHandler(e, 'equals')}
          >
            =
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--comma"
            onClick={(e) => buttonHandler(e, ',')}
          >
            ,
          </button>
          <button
            className="Calculator__row__button Calculator__row__button--0"
            onClick={(e) => buttonHandler(e, '0')}
          >
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
