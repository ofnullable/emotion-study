import React, { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

function HeaderMenu({ menus }) {
  const [active, setActive] = useState();
  const router = useRouter();

  const menuNames = Object.keys(menus);

  useEffect(() => {
    const oneDepth = router.pathname.split('/');

    if ((!active && !oneDepth[1]) || oneDepth[1] === menuNames[0]) {
      setActive(null);
    } else {
      setActive(oneDepth[1]);
    }
  }, []);

  const handleMenuClick = e => {
    const id = e.target.id === menuNames[0] ? null : e.target.id;
    setActive(id);
  };

  return (
    <header css={[headerWrapperStyle]}>
      <ul>
        {Object.keys(menus).map(menu => (
          <li
            css={[itemStyle]}
            key={menu}
            id={menu}
            className={active === menu ? 'active' : ''}
            onClick={handleMenuClick}
          >
            <Link href={menus[menu].href}>
              <a id={menu}>{menus[menu].name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

const headerWrapperStyle = css`
  max-width: 100%;
  ul {
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
  }
`;

const itemStyle = css`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  height: 100%;
  flex-direction: column;

  &::after {
    content: '';
    transition: transform 200ms ease;
    transform: scaleX(0);
    border-bottom: 3px solid;
  }

  &:not(#brand)::after {
    border-color: #1976d2;
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

  &:not(#brand).active {
    background: #686868;
  }

  a {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 15px;
    text-decoration: none;
    color: inherit;
  }
`;

export default HeaderMenu;
