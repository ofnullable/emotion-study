/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import AppBar from '../common/AppBar/AppBar';
import Footer from './Footer';

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

function index({ children }) {
  return (
    <>
      <AppBar menus={menus} />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </>
  );
}

const mainStyle = css`
  display: block;
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 15px;
`;

export default index;
