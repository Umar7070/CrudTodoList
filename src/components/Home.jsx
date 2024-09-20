import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [inputValue, setInputValue] = useState();
  console.log(inputValue);
  const [inputData, setInputData] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState();

  const handleClick = () => {
    if (!inputData) {
      alert("please fill the data");
    } else {
      const newItem = { id: new Date().getTime().toString(), name: inputValue };
      setInputData([...inputData, newItem]);
      console.log(newItem);
      setInputValue("");
    }
  };

  // deleteHandle  __________

  const deleteHandle = (ele) => {
    console.log("umarrrrr", ele);
    const deletevalue = inputData.filter((index) => {
      return ele.id !== index.id;
    });
    setInputData(deletevalue);
  };

  const clearAll = () => {
    setInputData([]);
  };

  // editHandle  --------

  const editHandle = (ele) => {
    setToggle(false);
    setInputValue(ele.name);
    setEdit(ele.id);
  };

  // updateHandle  --------

  const updateHandle = () => {
    const updateValue = inputData.map((curEle, index) => {
      return curEle.id === edit ? { ...curEle, name: inputValue } : curEle;
    });
    setToggle(true);
    setInputValue("");
    setInputData(updateValue);
  };

  return (
    <div>
      <div className="text-center my-10 text-3xl capitalize font-bold">
        <h2>Todo list</h2>
      </div>
      <div className="flex justify-center gap-3">
        <input
          type="text"
          placeholder="enter your todo.."
          className="block outline-none  w-[300px] rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {toggle ? (
          <button
            className="bg-green-500 w-[100px] rounded-lg capitalize flex justify-center items-center text-white"
            onClick={handleClick}
          >
            Add Todo
          </button>
        ) : (
          <button
            className="bg-cyan-600 w-[100px] rounded-lg capitalize flex justify-center items-center text-white"
            onClick={updateHandle}
          >
            edit Todo
          </button>
        )}
      </div>
      {inputData.map((curEle, ind) => {
        return (
          <>
            <div className="flex w-[400px] mx-auto  items-center bg-slate-600 my-10 justify-between p-2 rounded-lg">
              <div className="mx-3 capitalize">{curEle.name}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => deleteHandle(curEle)}
                  className="bg-red-500 capitalize px-5 p-1 rounded-lg"
                >
                  delete
                </button>
                <button
                  onClick={() => editHandle(curEle)}
                  className="bg-green-500 capitalize px-5 p-1 rounded-lg"
                >
                  edit
                </button>
              </div>
            </div>
          </>
        );
      })}
      {inputData.length >= 1 && (
        <button
          onClick={clearAll}
          className="w-[400px] bg-red-500 mx-auto flex p-2 rounded-lg justify-center items-center uppercase"
        >
          clear
        </button>
      )}
    </div>
  );
};

export default Home;
