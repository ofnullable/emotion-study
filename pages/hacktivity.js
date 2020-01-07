import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardHeader from '../components/common/Card/CardHeader';
import CardContent from '../components/common/Card/CardContent';
import CardFooter from '../components/common/Card/CardFooter';
import Link from 'next/link';

function hacktivity() {
  return (
    <div css={[cardWrapper]}>
      <Card>
        <CardHeader title="card title" subTitle="sub title" />
        <CardContent>
          <img />
          hello world!
        </CardContent>
        <CardFooter align="right">
          <Link href="/inbox">
            <a>
              <Button theme="link">show details</Button>
            </a>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader link="/" title="card title" subTitle="sub title" />
        <CardContent>Say Hi</CardContent>
      </Card>
      <Card>
        <CardHeader title="card title" subTitle="sub title" />
        <CardContent />
        <CardFooter align="right">
          <Button theme="primary">some button</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

const cardWrapper = css`
  display: flex;
  flex-wrap: wrap;
`;

export default hacktivity;
