import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';

const AvatarGroup = props => {
  const children = React.Children.toArray(props.children);
  return (
    <div css={[avatarGroupStyle]}>
      {children.map((child, index) => {
        return React.cloneElement(child, {
          style: { zIndex: children.length - index, ...child.props.style },
        });
      })}
    </div>
  );
};

const avatarGroupStyle = css`
  display: flex;
  & > div {
    border: 2px solid ${colors.gray[0]};
    &:not(:first-of-type) {
      margin-left: -20px;
    }
  }
`;

export default AvatarGroup;
