import React from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CardHeader from '../components/common/Card/CardHeader';
import CardContent from '../components/common/Card/CardContent';
import CardFooter from '../components/common/Card/CardFooter';
import Link from 'next/link';

function hacktivity() {
  return (
    <div>
      <Card>
        <CardHeader title='card title' subTitle='sub title' />
        <CardContent>
          <img />
          hello world!
        </CardContent>
        <CardFooter align='right'>
          <Link href='/inbox'>
            <a>
              <Button theme='link'>show details</Button>
            </a>
          </Link>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader link='/' title='card title' subTitle='sub title' />
      </Card>
      <Card>
        <CardHeader title='card title' subTitle='sub title' />
      </Card>
    </div>
  );
}

export default hacktivity;
