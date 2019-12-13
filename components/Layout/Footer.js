/** @jsx jsx */
import { jsx, css } from '@emotion/core';

function Footer() {
  return <footer css={[footerStyle]}>Copyright &copy; 2020</footer>;
}

const footerStyle = css`
  text-align: center;
`;

export default Footer;
