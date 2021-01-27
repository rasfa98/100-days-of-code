import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="Calculator">
        <div className="Calculator__row">
          <input className="Calculator__row__input" />
        </div>

        <div className="Calculator__row">
          <button className="Calculator__row__button Calculator__row__button--divide">
            /
          </button>
          <button className="Calculator__row__button Calculator__row__button--percent">
            %
          </button>
          <button className="Calculator__row__button Calculator__row__button--invert">
            +/-
          </button>
          <button className="Calculator__row__button Calculator__row__button--clear">
            AC
          </button>
        </div>

        <div className="Calculator__row">
          <button className="Calculator__row__button Calculator__row__button--multiply">
            x
          </button>
          <button className="Calculator__row__button Calculator__row__button--9">
            9
          </button>
          <button className="Calculator__row__button Calculator__row__button--8">
            8
          </button>
          <button className="Calculator__row__button Calculator__row__button--7">
            7
          </button>
        </div>

        <div className="Calculator__row">
          <button className="Calculator__row__button Calculator__row__button--subtract">
            -
          </button>
          <button className="Calculator__row__button Calculator__row__button--6">
            6
          </button>
          <button className="Calculator__row__button Calculator__row__button--5">
            5
          </button>
          <button className="Calculator__row__button Calculator__row__button--4">
            4
          </button>
        </div>

        <div className="Calculator__row">
          <button className="Calculator__row__button Calculator__row__button--add">
            +
          </button>
          <button className="Calculator__row__button Calculator__row__button--3">
            3
          </button>
          <button className="Calculator__row__button Calculator__row__button--2">
            2
          </button>
          <button className="Calculator__row__button Calculator__row__button--1">
            1
          </button>
        </div>

        <div className="Calculator__row">
          <button className="Calculator__row__button Calculator__row__button--equals">
            =
          </button>
          <button className="Calculator__row__button Calculator__row__button--comma">
            ,
          </button>
          <button className="Calculator__row__button Calculator__row__button--0">
            0
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
