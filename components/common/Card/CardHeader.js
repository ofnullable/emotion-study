import Link from 'next/link';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colors } from '../../../styles/colors';

const CardHeader = ({ link, title, subTitle }) => {
  if (!title && !subTitle) {
    return null;
  }

  return (
    <div css={[cardHeaderStyle]}>
      {link ? (
        <Link href={link}>
          <a>
            <div>
              <p>{title}</p>
              {subTitle && <span>{subTitle}</span>}
            </div>
          </a>
        </Link>
      ) : (
        <div>
          <p>{title}</p>
          {subTitle && <span>{subTitle}</span>}
        </div>
      )}
    </div>
  );
};

const cardHeaderStyle = css`
  & p {
    margin: 0;
    font-size: 1rem;
    font-weight: bolder;
  }
  & > a {
    color: ${colors.primary[5]};
    text-decoration: none;
  }
  & span {
    /* margin: 4px 0; */
    padding: 4px 0;
    display: inline-block;
    color: ${colors.gray[5]};
    font-size: 0.875rem;
  }
`;

export default CardHeader;
