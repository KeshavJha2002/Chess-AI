import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/herobig.png')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold">Play with style</h2>
      </div>
      <div className='flex flex-row items-center justify-center gap-[40px] mt-8'>
        <button className='bg-black text-white rounded-full border-white border-2 hover:text-black hover:border-black hover:bg-white py-3 px-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105'>
          Play Against Human
        </button>
        <button className='bg-black text-white rounded-full border-white border-2 hover:text-black hover:border-black hover:bg-white py-3 px-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105'>
          Play Against AI
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
