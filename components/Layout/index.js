/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { IconContext } from 'react-icons/lib';

import AppBar from '../common/AppBar/AppBar';
import Footer from './Footer';

const menus = {
  brand: {
    href: '/',
    name: 'HOME',
  },
  directory: {
    href: '/components',
    name: 'components',
  },
  inbox: {
    href: '/forms',
    name: 'forms',
  },
};

function index({ children }) {
  return (
    <>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <AppBar menus={menus} />
        <main css={mainStyle}>{children}</main>
        <Footer />
      </IconContext.Provider>
    </>
  );
}

const mainStyle = css`
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 16px;
`;

export default index;
