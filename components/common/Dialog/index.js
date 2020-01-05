/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';

function Dialog({ visible, theme, title, content, children, cancelHandler, ...rest }) {
  if (!visible) return null;

  return (
    <>
      <div css={[fullscreen, darkLayer]} onClick={cancelHandler} />
      <div css={[dialogWrapper]}>
        <div css={[dialog, themes[theme]]}>
          {title && <h3>{title}</h3>}
          {content && <p>{content}</p>}
          {children}
        </div>
      </div>
    </>
  );
}

Dialog.defaultProps = {
  theme: 'primary',
};

const fullscreen = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const darkLayer = css`
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const dialogWrapper = css`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const dialog = css`
  z-index: 15;
  position: absolute;
  top: 30%;
  border-radius: 4px;
  width: 25rem;
  max-width: 90%;
  background: ${colors.gray[0]};
  box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    padding: 20px 0;
    color: ${colors.gray[9]};
  }
`;

const themes = {
  default: css`
    h3 {
      color: ${colors.gray[9]};
    }
  `,
  primary: css`
    h3 {
      color: ${colors.primary[5]};
    }
  `,
  secondary: css`
    h3 {
      color: ${colors.secondary[5]};
    }
  `,
  error: css`
    h3 {
      color: ${colors.error[4]};
    }
  `,
};

export default Dialog;
