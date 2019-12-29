import React from 'react';
import Link from 'next/link';
import Button from './common/Button';
import ButtonGroup from './common/Button/ButtonGroup';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => {
  return (
    <nav>
      <ButtonGroup position='center'>
        <Button>BUTTON</Button>
        <Button theme='link'>BUTTON</Button>
        <Button theme='secondary'>BUTTON</Button>
      </ButtonGroup>
      <ul>
        <li>
          <Link href='/' as='/'>
            <a>Home</a>
          </Link>
        </li>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <style jsx>{`
        :global(body) {
          margin: 0;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
