import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleError = () => {
    'Invalid Ceredentials!';
  };

  const handleContinue = () => {
    if (email === 'poojaghanghas@gmail.com' && password === 'pooja') {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'http://localhost:3000/';
    } else {
      console.log('false');
    }
  };

  return (
    <div className="z-50 h-full w-full flex justify-center flex-col mt-2">
      <div className="text-black w-20 h-14">{handleError}</div>
      <div className="flex flex-col">
        <p className="font-bold text-xl my-4">What's your phone number or email?</p>
        <div className="my-1">
          <input
            type="email"
            placeholder="Enter phone number or email"
            className="w-[26rem] h-12 rounded-md pl-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-1">
          <input
            type="password"
            placeholder="password"
            className="w-[26rem] h-12 rounded-md pl-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-8">
          <button className="text-white bg-black p-2 rounded-md w-[14rem]" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
