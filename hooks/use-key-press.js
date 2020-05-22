import { useEffect } from 'react';

function useKeyPress(targetKey, handler) {
  function downHandler({ key }) {
    if (key === targetKey) {
      handler();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);
}

export default useKeyPress;
