/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../style/colors';

const Avatar = ({ size, src, alt, shape, style, children }) => {
  return (
    <div css={[avatarStyle, sizes[size], shapes[shape]]} style={{ ...style }}>
      {src ? <img src={src} alt={alt} /> : children}
    </div>
  );
};

Avatar.defaultProps = {
  size: 'medium',
  shape: 'circle',
};

const avatarStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  border-radius: 50%;
  color: ${colors.gray[0]};
  background: ${colors.gray[3]};

  & img {
    z-index: inherit;
    width: 100%;
    height: 100%;
  }
`;

const sizes = {
  small: css`
    width: 1.8rem;
    height: 1.8rem;
  `,
  medium: css`
    width: 2.8rem;
    height: 2.8rem;
  `,
  large: css`
    width: 4rem;
    height: 4rem;
  `,
};

const shapes = {
  square: css``,
  rounded: css`
    & img {
      border-radius: 4px;
    }
  `,
  circle: css`
    & img {
      border-radius: 50%;
    }
  `,
};

export default Avatar;
