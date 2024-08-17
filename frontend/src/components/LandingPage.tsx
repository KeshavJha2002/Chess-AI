import React, { useState } from 'react';
import { Dialog, DialogContent, Slider, RadioGroup, FormControlLabel, Radio, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LandingPage: React.FC = () => {
  const [openHuman, setOpenHuman] = useState(false);
  const [openAI, setOpenAI] = useState(false);
  const [level, setLevel] = useState(1500);
  const [color, setColor] = useState('random');
  const [minutes, setMinutes] = useState(10);
  const [increment, setIncrement] = useState(5);

  const handleClickOpenHuman = () => {
    setOpenHuman(true);
  };
  
  const handleClickOpenAI = () => {
    setOpenAI(true);
  };

  const handleCloseHuman = () => {
    setOpenHuman(false);
  };

  const handleCloseAI = () => {
    setOpenAI(false);
  };

  const handleLevelChange = (_event: any, newValue: number | number[]) => {
    setLevel(newValue as number);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(Number(event.target.value));
  };

  const handleIncrementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncrement(Number(event.target.value));
  };

  const getSliderColor = () => {
    if (level <= 800) return '#4caf50';          // Light Green
    if (level <= 1000) return '#66bb6a';         // Slightly darker green
    if (level <= 1200) return '#81c784';         // Green
    if (level <= 1400) return '#ffb74d';         // Light Orange
    if (level <= 1600) return '#ff9800';         // Orange
    if (level <= 1800) return '#fb8c00';         // Darker Orange
    if (level <= 2000) return '#f57c00';         // Dark Orange
    if (level <= 2200) return '#e57373';         // Light Red
    if (level <= 2400) return '#f44336';         // Red
    if (level <= 2600) return '#d32f2f';         // Dark Red
    if (level <= 2800) return '#b71c1c';         // Deep Red
    return '#b71c1c';                            // Default: Deep Red for levels beyond 2800
  };
  

  return (
    <div
      className="relative h-screen bg-cover bg-center text-white flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/herobig.png')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold">Play with style</h2>
      </div>
      <div className='flex flex-row items-center justify-center gap-[40px] mt-8'>
        <button className='bg-black text-white rounded-full border-white border-2 hover:text-black hover:border-black hover:bg-white py-3 px-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105'
          onClick={handleClickOpenHuman}>
          Play Against Human
        </button>
        <button
          className='bg-black text-white rounded-full border-white border-2 hover:text-black hover:border-black hover:bg-white py-3 px-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105'
          onClick={handleClickOpenAI}
        >
          Play Against AI
        </button>
      </div>

      {/* AI Popup overlay */}
      <Dialog open={openAI} onClose={handleCloseAI} disableBackdropClick={true} disableEscapeKeyDown={true}>
        <DialogContent className="bg-black bg-opacity-90 p-10 rounded-lg text-white text-center relative w-[400px] mx-auto">
          <IconButton
            onClick={handleCloseAI}
            style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          <div className="mb-6 p-4">
            {/* Set Level */}
            <div className="mb-6">
              <label className="block mb-4 text-lg">Set Level: <span style={{ color: getSliderColor() }}>{level} ELO</span></label>
              <Slider
                value={level}
                onChange={handleLevelChange}
                min={700}
                max={2800}
                step={100}
                marks
                style={{ color: getSliderColor() }}
              />
            </div>
            {/* Choose Color */}
            <div className="mb-6">
              <label className="block mb-4 text-lg">Choose Color:</label>
              <RadioGroup
                row
                value={color}
                onChange={handleColorChange}
                className="flex justify-center"
              >
                <FormControlLabel
                  value="white"
                  control={<Radio style={{ color: 'white' }} />}
                  label="White"
                  style={{ marginRight: '20px', color: 'white', fontSize: '1.2rem' }}
                />
                <FormControlLabel
                  value="black"
                  control={<Radio style={{ color: 'black' }} />}
                  label="Black"
                  style={{ marginRight: '20px', color: 'white', fontSize: '1.2rem' }}
                />
                <FormControlLabel
                  value="random"
                  control={<Radio style={{ color: 'grey' }} />}
                  label="Random"
                  style={{ color: 'white', fontSize: '1.2rem' }}
                />
              </RadioGroup>
            </div>
            {/* Set Timer */}
            <div className="mb-6">
              <label className="block mb-4 text-lg">Set Timer:</label>
              <div className="flex justify-center gap-4">
                <TextField
                  label="Minutes"
                  type="number"
                  variant="outlined"
                  value={minutes}
                  onChange={handleMinutesChange}
                  inputProps={{ min: 1 }}
                  className="bg-white text-black rounded-md"
                  style={{ width: '120px' }}
                />
                <TextField
                  label="Increment (sec)"
                  type="number"
                  variant="outlined"
                  value={increment}
                  onChange={handleIncrementChange}
                  inputProps={{ min: 0 }}
                  className="bg-white text-black rounded-md"
                  style={{ width: '120px' }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleCloseAI}
            className="bg-blue-600 border-white border-[1px] w-full rounded-[300px] text-white py-3 px-6 hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-lg font-bold"
          >
            Start Game
          </button>
        </DialogContent>
      </Dialog>

      {/* Human Popup overlay */}
      <Dialog open={openHuman} onClose={handleCloseHuman} disableBackdropClick={true} disableEscapeKeyDown={true}>
        <DialogContent className="bg-black bg-opacity-90 p-10 rounded-lg text-white text-center relative w-[400px] mx-auto">
          <IconButton
            onClick={handleCloseHuman}
            style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          <div className="mb-6 p-4">
            {/* Choose Color */}
            <div className="mb-6">
              <label className="block mb-4 text-lg">You Play as:</label>
              <RadioGroup
                row
                value={color}
                onChange={handleColorChange}
                className="flex justify-center"
              >
                <FormControlLabel
                  value="white"
                  control={<Radio style={{ color: 'white' }} />}
                  label="White"
                  style={{ marginRight: '20px', color: 'white', fontSize: '1.2rem' }}
                />
                <FormControlLabel
                  value="black"
                  control={<Radio style={{ color: 'black' }} />}
                  label="Black"
                  style={{ marginRight: '20px', color: 'white', fontSize: '1.2rem' }}
                />
                <FormControlLabel
                  value="random"
                  control={<Radio style={{ color: 'grey' }} />}
                  label="Random"
                  style={{ color: 'white', fontSize: '1.2rem' }}
                />
              </RadioGroup>
            </div>
            {/* Set Timer */}
            <div className="mb-6">
              <label className="block mb-4 text-lg">Set Timer:</label>
              <div className="flex justify-center gap-4">
                <TextField
                  label="Minutes"
                  type="number"
                  variant="outlined"
                  value={minutes}
                  onChange={handleMinutesChange}
                  inputProps={{ min: 1 }}
                  className="bg-white text-black rounded-md"
                  style={{ width: '120px' }}
                />
                <TextField
                  label="Increment (sec)"
                  type="number"
                  variant="outlined"
                  value={increment}
                  onChange={handleIncrementChange}
                  inputProps={{ min: 0 }}
                  className="bg-white text-black rounded-md"
                  style={{ width: '120px' }}
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleCloseHuman}
            className="bg-blue-600 border-white border-[1px] w-full rounded-[300px] text-white py-3 px-6 hover:bg-blue-700 transition duration-300 transform hover:scale-105 text-lg font-bold"
          >
            Generate Link
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;
