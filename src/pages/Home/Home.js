import { DatePicker } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import map from "../../Images/map.jpg"

const highest = 8;
const lowest = 1;

const cities = ['Gurgaon', 'Noida', 'Delhi', 'Ahemdabad', 'Jaipur', 'Surat', 'Chennai', 'Banglore'];

export const Home = () => {
  const [count, setCount] = useState(1);
  const [leaving, setLeaving] = useState("");
  const [going, setGoing] = useState("");
  const [results, setResults] = useState([]);
  const [showLeaving, setShowLeaving] = useState(false);
  const [showGoing, setShowGoing] = useState(false);


  useEffect(() => {
    if (leaving === "") {
      setShowLeaving(false)
    } 
  }, [leaving])

  useEffect(() => {
    if(going === "") {
      setShowGoing(false)
    } 
  }, [going])


  const increaseCount = () => {
    if (count < highest) setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > lowest) setCount(count - 1);
  };
   
  const handleLeaving = (event) => {
    setLeaving(event.target.value);
    setShowLeaving(true)
      const arr = cities.filter(el => el.toLowerCase().includes(event.target.value.toLowerCase()))
      setResults(arr);
  }

  const handleGoing = (event) => {
    setGoing(event.target.value);
    setShowGoing(true)
    const arr2 = cities.filter(el => el.toLowerCase().includes(event.target.value.toLowerCase()))
    setResults(arr2);
  }

  const handleSearch = () => {
    console.log(count, leaving, going);
  }

  const handleResultSelectGoing = (val) => {
    setGoing(val)
    setShowGoing(false)
  }

  const handleResultSelectLeaving = (val) => {
    setLeaving(val)
    setShowLeaving(false)
  }

  return (
    <div style={{'--image-url': `url(${map})`}} className="w-full pt-1.5 pl-14 flex items-center flex-1 bg-[image:var(--image-url)] bg-contain">
      <div className="h-[35rem] bg-white drop-shadow-md w-96 rounded-2xl pt-7 flex flex-col items-center">
        <p className="m-4 font-bold text-lg">Where would you like to go?</p>
        <div className='relative'>
          <input type="text" value={leaving} placeholder="Leaving from..." className="bg-gray-100 w-80 h-11 rounded-lg pl-4 border-2" onChange={handleLeaving} />
          {showLeaving ? <div className='absolute w-full h-max bg-black text-white border-1 flex flex-col'>
            {results.map(r => <button onClick={() => handleResultSelectLeaving(r)}>{r}</button>)}
          </div> : null}
        </div>
        <div className='relative'>
        <input type="text" value ={going} placeholder="Going to..." className="bg-gray-100 w-80 h-11 rounded-lg pl-4 mt-6 border-2" onChange={handleGoing}/>
        {showGoing ? <div className='absolute w-full h-max bg-black text-white border-1 flex flex-col'>
            {results.map(r => <button onClick={() => handleResultSelectGoing(r)}>{r}</button>)}
          </div> : null}
        </div>
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
