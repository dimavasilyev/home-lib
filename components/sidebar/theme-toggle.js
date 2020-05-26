import { useMemo, useCallback } from 'react';

import { useGlobalState } from '../../hooks';

const ThemeToggle = () => {
  const {
    setGlobalState,
    globalState: { theme },
  } = useGlobalState();

  const switchTheme = useCallback(() => {
    setGlobalState({
      type: 'TOGGLE_THEME',
    });
  }, []);

  const isDayMode = useMemo(() => theme === 'theme-light', [theme]);

  return (
    <label htmlFor="checked" className="mt-3 ml-4 inline-flex items-center cursor-pointer">
      <span className="relative">
        <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
        <span
          className={`absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ${
            isDayMode ? 'ease-in-out bg-white' : 'bg-blue-600 transform translate-x-full'
          }`}
        >
          <input
            id="checked"
            type="checkbox"
            className="absolute opacity-0 w-0 h-0"
            onChange={switchTheme}
          />
        </span>
      </span>
      <span className="ml-3 text-sm text-primary">{isDayMode ? 'Day mode' : 'Night mode'}</span>
    </label>
  );
};

export default ThemeToggle;
