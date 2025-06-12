import React from 'react';
import { motion } from 'framer-motion';

function Wordinputrow({ guess = '', colors = [], isActive = false, onChange, onEnter }) {
  const inputRef = React.useRef(null);

  React.useEffect(() => {
  if (isActive && inputRef.current) {
    inputRef.current.focus({ preventScroll: true }); // 💥 Prevent scroll jump
  }
}, [isActive]);


  const handleChange = (e) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
    if (val.length <= 5) {
      onChange(val);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && guess.length === 5) {
      onEnter();
    }
  };

  return (
    <div onClick={() => inputRef.current?.focus()} className="flex gap-2 justify-center mb-2">
      {isActive && (
        <input
          ref={inputRef}
          value={guess}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          maxLength={5}
          className="opacity-0 absolute pointer-events-none"
        />
      )}

      {[...Array(5)].map((_, i) => {
        let bg = 'bg-white text-black';
        if (colors[i] === 'green') bg = 'bg-green-500 text-white';
        else if (colors[i] === 'orange') bg = 'bg-yellow-500 text-white';
        else if (colors[i] === 'black') bg = 'bg-gray-800 text-white';

        return (
          <motion.div
            key={i}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: i * 0.05 }}
            className={`w-14 h-14 border-2 border-gray-400 rounded-md flex items-center justify-center text-2xl font-bold 
              transition-colors duration-1100 ease-out ${bg}`}
          >
            {guess[i] || ''}
          </motion.div>
        );
      })}
    </div>
  );
}

export default Wordinputrow;
