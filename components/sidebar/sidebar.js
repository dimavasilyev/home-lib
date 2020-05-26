import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';

import { useActiveLink, useKeyPress, useGlobalState } from '../../hooks';
import ThemeToggle from './theme-toggle';

const Sidebar = ({ title }) => {
  const [isActive, setState] = useState(false);

  const hideSidebar = () => setState(false);

  useKeyPress('Escape', hideSidebar);

  const isLinkActive = useActiveLink();

  const items = useMemo(
    () => [
      {
        title: 'Books list',
        href: '/',
      },
      {
        title: 'Shelves',
        href: '/shelves',
      },
      {
        title: 'Shelf reviews',
        href: '/reviews',
      },
    ],
    [],
  );

  return (
    <div className="bg-primary flex flex-col w-full md:w-64 md:fixed md:h-full text-gray-700 bg-white flex-shrink-0 md:border-r-2 border-gray-200">
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <Link href="/">
          <a className="text-lg text-primary font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
            {title}
          </a>
        </Link>
        <button
          onClick={() => setState(!isActive)}
          className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
        >
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            {isActive ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            )}
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isActive ? 'block' : 'hidden'
        } flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto`}
      >
        {items.map(({ title, href }) => (
          <Link href={href} key={title}>
            <a className={`nav-item  ${isLinkActive(href) ? 'active' : ''}`}>{title}</a>
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  );
};

export default Sidebar;
