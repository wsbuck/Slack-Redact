import { useState, useEffect } from 'react';

interface IKey {
  key: string;
};

const useKeyPress = (targetKey: string) => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }: IKey) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  function upHandler({ key }: IKey) {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  });

  return keyPressed;
}

export default useKeyPress;
