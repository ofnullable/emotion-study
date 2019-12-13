import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useRouter } from 'next/router';

const menus = {
  brand: {
    href: '/dashboard',
    name: 'BRANDNAME',
  },
  dashboard: {
    href: '/dashboard',
    name: 'hacker dashboard',
  },
  hacktivity: {
    href: '/hacktivity',
    name: 'hacktivity',
  },
  directory: {
    href: '/directory',
    name: 'directory',
  },
  inbox: {
    href: '/inbox',
    name: 'inbox',
  },
};

const memberMenu = {
  alarm: [],
  profile: {},
};

function HeaderMenu() {
  const [active, setActive] = useState();
  const router = useRouter();

  useEffect(() => {
    const oneDepth = router.pathname.split('/');

    if (!oneDepth[1] || oneDepth[1] === 'brand') {
      setActive('dashboard');
    } else {
      setActive(oneDepth[1]);
    }
  }, []);

  const handleMenuClick = e => {
    const id = e.target.id === 'brand' ? 'dashboard' : e.target.id;
    setActive(id);
    router.push(menus[id].href);
  };

  return (
    <header>
      <ul css={[HeaderMenuStyle]}>
        {Object.keys(menus).map(menu => (
          <li key={menu} id={menu} className={active === menu ? 'active' : ''}>
            <span id={menu} onClick={handleMenuClick}>
              {menus[menu].name}
            </span>
          </li>
        ))}
        <ul css={[HeaderIconStyle]}>
          <li>
            <span>SIGN IN</span>
          </li>
          <li>
            <span>SIGN UP</span>
          </li>
        </ul>
      </ul>
    </header>
  );
}

const HeaderMenuStyle = css`
  padding: 0;
  margin: 0 auto;
  height: 60px;
  display: flex;
  list-style: none;
  flex-direction: row;
  align-items: center;
  justify-content: baseline;
  color: #fafafa;
  background-color: #424242;

  & > li {
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    height: 100%;
    flex-direction: column;

    &:not(#brand)::after {
      content: '';
      display: block;
      width: 100%;
      transition: transform 200ms ease;
      transform: scaleX(0);
      border-bottom: 4px solid #1976d2;
    }

    &#brand {
      font-size: 20px;
      padding: 0 15px;
    }

    &:not(#brand).active,
    &:not(#brand):hover {
      &::after {
        content: '';
        transform: scaleX(1);
      }
    }

    span {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 15px;
    }
  }
`;

const HeaderIconStyle = css`
  display: flex;
  height: 100%;
  flex-direction: row;
  list-style: none;
  margin-left: auto;

  li {
    display: flex;
    height: 100%;

    span {
      cursor: pointer;
      display: flex;
      height: 100%;
      align-items: center;
      padding: 15px;
    }
  }
`;

export default HeaderMenu;
