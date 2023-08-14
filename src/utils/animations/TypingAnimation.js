import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);

      return () => {
        clearTimeout(typingTimeout);
      };
    } else {
      // Animation finished, toggle cursor visibility
      const cursorInterval = setInterval(() => {
        setShowCursor(prevState => !prevState);
      }, 500); // Adjust blinking speed as needed (milliseconds)

      return () => {
        clearInterval(cursorInterval);
      };
    }
  }, [currentIndex, text]);

  return (
    <div>
      {displayText}
      {showCursor && <span>|</span>}
    </div>
  );
};

export default TypingAnimation;
