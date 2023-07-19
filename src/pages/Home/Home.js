import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';

const highest = 8;
const lowest = 1;

export const Home = () => {
  const [count, setCount] = useState(1);
  const [leaving, setLeaving] = useState("");
  const [going, setGoing] = useState("");

  const increaseCount = () => {
    if (count < highest) setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > lowest) setCount(count - 1);
  };
   
  const handleLeaving = (event) => {
    setLeaving(event.target.value);
  }

  const handleGoing = (event) => {
    setGoing(event.target.value);
  }

  const handleSearch = () => {
    console.log(count, leaving, going);
  }

  return (
    <div className="w-full pt-1.5 pl-14 flex items-center flex-1">
      <div className="h-[35rem] bg-white drop-shadow-md w-96 rounded-2xl pt-7 flex flex-col items-center">
        <p className="m-4 font-bold text-lg">Where would you like to go?</p>
        <input type="text" value ={leaving} placeholder="Leaving from..." className="bg-gray-100 w-80 h-11 rounded-lg pl-4 border-2" onChange={handleLeaving} />
        <input type="text" value ={going} placeholder="Going to..." className="bg-gray-100 w-80 h-11 rounded-lg pl-4 mt-6 border-2" onChange={handleGoing}/>
        <div className="mt-6">
          <div className="text-black w-72 h-11 bg-gray-100 rounded-lg border-2" >
            {count === 1 ? 'Passenger' : 'Passengers'}
            <button className="m-2 text-white bg-gray-400 rounded-full w-6 h-6" onClick={decreaseCount}>
              -
            </button>
            {count}
            <button className="m-2 text-white bg-gray-400 rounded-full w-6 h-6" onClick={increaseCount}>
              +
            </button>
          </div>
        </div>
        <DatePicker 
          className="mt-6"
          label="Select date"
          sx={{
            margin: 4,
          }}/>
        <button className="mt-6 bg-black text-white w-72 h-11 rounded-md"
        onClick={handleSearch}
        >Search</button>
      </div>
    </div>
  );
};
