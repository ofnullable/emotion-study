/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import HeaderMenu from './HeaderMenu';
import Footer from './Footer';

function index({ children }) {
  return (
    <>
      <HeaderMenu />
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
