import './App.css';
import calculator from '/calculador.png';

import Calculator from '/calculador.png';
function App() {
  return (
    <>
      <section className=" bg-blue-200 flex justify-center items-center w-full h-screen">
        <div className=" shadow-xl bg-white flex w-[65%] h-[80%] rounded-2xl">
          <div className=" w-2/4 h-full ">
            <div className=" flex my-[32px] mx-[20px] justify-between">
              <h1 className=" font-bold">Mortgage calculator</h1>
              <p className=" cursor-pointer text-sm underline">Clear all</p>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="">Mortgage calculator</label>
              <div></div>
            </div>
          </div>
          <div className=" w-2/4 bg-gray-800 flex flex-col justify-center items-center px-[2%] py-[16%] h-full rounded-2xl ">
            <img className=" w-[20%]" src={Calculator} alt="" />
            <h2 className=" text-white font-bold m-3">Result show here</h2>
            <p className=" text-center text-gray-400 text-[12px]">
              Complete de form and click "calculate repayment " to see what your
              monthly repayment would be
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
