import './App.css';
import calculator from '/calculador.png';

function App() {
  return (
    <>
      <section className=" flex justify-center items-center bg-blue-200 w-full h-screen">
        <div className=" bg-white flex ">
          <div className=" flex justify-around items-center w-2/4">
            <div>
              <h1>Mortgage calculator</h1>
              <p className=" underline">clear all</p>
            </div>
            <div></div>
          </div>
          <div className=" w-2/4 flex flex-col items-center justify-center">
            <img className=" w-14" src={calculator} alt="" />
            <div className=" flex-col">
              <h1>Result show here</h1>
              <p>
                Complete the form and click "calculated repayment" to see you
                what your monthly repayment would be
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
