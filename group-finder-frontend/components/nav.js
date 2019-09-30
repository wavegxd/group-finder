import React from 'react';
import Link from 'next/link';

import NavStyle from './styles/NavStyle';

const Nav = () => (
  <NavStyle>
    <nav>
      <ul>
        <li>GroupFinder</li>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/groups">
            <a>Groups List</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
      `}</style>
    </nav>
  </NavStyle>
);

export default Nav;
