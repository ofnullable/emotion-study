import React, { useState, useCallback } from 'react';
import Link from 'next/link';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { MdEdit } from 'react-icons/md';
import { FaDocker } from 'react-icons/fa';
import { AiOutlineUpCircle } from 'react-icons/ai';

import Avatar from '../components/common/Avatar';
import AvatarGroup from '../components/common/Avatar/AvatarGroup';
import Button from '../components/common/Button';
import ButtonGroup from '../components/common/Button/ButtonGroup';
import Card from '../components/common/Card';
import CardHeader from '../components/common/Card/CardHeader';
import CardContent from '../components/common/Card/CardContent';
import CardFooter from '../components/common/Card/CardFooter';
import Dialog from '../components/common/Dialog';
import { useWindowEvent } from '../utils';
import media from '../styles/media';

const initial = {
  primary: false,
  secondary: false,
  error: false,
  default: false,
};

function DialogChildren({ theme, closeDialog, confirmDialog }) {
  return (
    <>
      <ButtonGroup horizontal position="right">
        <Button theme="secondary" onClick={closeDialog}>
          취소
        </Button>
        <Button theme={theme} onClick={confirmDialog}>
          확인
        </Button>
      </ButtonGroup>
    </>
  );
}

function directory() {
  const [dialogs, setDialogs] = useState(initial);

  const keydownHandler = e => {
    if (e.keyCode === 27 && Object.values(dialogs).some(v => v)) {
      // close All
      setDialogs(initial);
    }
  };

  useWindowEvent('keydown', keydownHandler, [dialogs]);

  const toggleDialog = useCallback(
    theme => () => {
      setDialogs(prev => ({
        ...prev,
        [theme]: !prev[theme],
      }));
    },
    [dialogs]
  );

  const confirmDialog = useCallback(
    theme => () => {
      alert(`${theme} dialog confirmed!`);
      setDialogs(prev => ({
        ...prev,
        [theme]: false,
      }));
    },
    [dialogs]
  );

  return (
    <>
      <Dialog
        visible={dialogs.primary}
        title="테스트 다이얼로그"
        content="dialog content"
        cancelHandler={toggleDialog('primary')}
      >
        <DialogChildren
          closeDialog={toggleDialog('primary')}
          confirmDialog={confirmDialog('primary')}
        />
      </Dialog>
      <Dialog
        visible={dialogs.secondary}
        theme="secondary"
        title="테스트 다이얼로그"
        content="dialog content"
        cancelHandler={toggleDialog('secondary')}
      >
        <DialogChildren
          closeDialog={toggleDialog('secondary')}
          confirmDialog={confirmDialog('secondary')}
        />
      </Dialog>
      <Dialog
        visible={dialogs.error}
        theme="error"
        title="테스트 다이얼로그"
        content="dialog content"
        cancelHandler={toggleDialog('error')}
      >
        <DialogChildren
          theme="error"
          closeDialog={toggleDialog('error')}
          confirmDialog={confirmDialog('error')}
        />
      </Dialog>
      <Dialog
        visible={dialogs.default}
        theme="default"
        title="테스트 다이얼로그"
        content="dialog content"
        cancelHandler={toggleDialog('default')}
      >
        <DialogChildren
          theme="primary"
          closeDialog={toggleDialog('default')}
          confirmDialog={confirmDialog('default')}
        />
      </Dialog>

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

      <ButtonGroup>
        <Button iconOnly>
          <MdEdit />
        </Button>
        <Button theme="error" iconOnly>
          <MdEdit />
        </Button>
        <Button theme="link" iconOnly>
          <MdEdit />
        </Button>
        <Button theme="secondary" iconOnly>
          <MdEdit />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>BUTTON</Button>
        <Button theme="error">BUTTON</Button>
        <Button theme="link">BUTTON</Button>
        <Button theme="secondary">BUTTON</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>
          <FaDocker style={{ marginRight: '4px' }} />
          BUTTON
        </Button>
        <Button theme="error">
          <FaDocker style={{ marginRight: '4px' }} />
          BUTTON
        </Button>
        <Button theme="link">
          <FaDocker style={{ marginRight: '4px' }} />
          BUTTON
        </Button>
        <Button theme="secondary">
          <FaDocker style={{ marginRight: '4px' }} />
          BUTTON
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>
          BUTTON
          <AiOutlineUpCircle style={{ marginLeft: '4px' }} />
        </Button>
        <Button theme="error">
          BUTTON
          <AiOutlineUpCircle style={{ marginLeft: '4px' }} />
        </Button>
        <Button theme="link">
          BUTTON
          <AiOutlineUpCircle style={{ marginLeft: '4px' }} />
        </Button>
        <Button theme="secondary">
          BUTTON
          <AiOutlineUpCircle style={{ marginLeft: '4px' }} />
        </Button>
      </ButtonGroup>

      <ButtonGroup horizontal>
        <Button onClick={toggleDialog('primary')}>다이얼로그 열기</Button>
        <Button theme="error" onClick={toggleDialog('error')}>
          다이얼로그 열기
        </Button>
        <Button theme="link" onClick={toggleDialog('default')}>
          다이얼로그 열기
        </Button>
        <Button theme="secondary" onClick={toggleDialog('secondary')}>
          다이얼로그 열기
        </Button>
      </ButtonGroup>

      <div css={[avatarGroupWrapper]}>
        <div css={[avatarWrapper]}>
          <div style={{ display: 'inherit' }}>
            <Avatar size="small" src="http://placeimg.com/64/64/animals?1" />
            <Avatar size="medium" src="http://placeimg.com/64/64/animals?2" />
            <Avatar size="large" src="http://placeimg.com/64/64/animals?3" />
          </div>
          <strong>small medium large</strong>
        </div>
        <div css={[avatarWrapper]}>
          <div style={{ display: 'inherit' }}>
            <Avatar shape="square" src="http://placeimg.com/64/64/animals?1" />
            <Avatar shape="rounded" src="http://placeimg.com/64/64/animals?2" />
            <Avatar shape="circle" src="http://placeimg.com/64/64/animals?3" />
          </div>
          <strong>square rounded circle</strong>
        </div>
        <div css={[avatarWrapper]}>
          <div style={{ display: 'inherit' }}>
            <AvatarGroup>
              <Avatar src="http://placeimg.com/64/64/animals?1"></Avatar>
              <Avatar src="http://placeimg.com/64/64/animals?2"></Avatar>
              <Avatar src="http://placeimg.com/64/64/animals?3"></Avatar>
              <Avatar src="http://placeimg.com/64/64/animals?4"></Avatar>
              <Avatar>+5</Avatar>
            </AvatarGroup>
          </div>
          <strong>grouped</strong>
        </div>
      </div>
    </>
  );
}

const cardWrapper = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

const avatarGroupWrapper = css`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  ${media.up('md')} {
    flex-direction: row;
  }
  ${media.down('md')} {
    flex-direction: column;
  }
`;

const avatarWrapper = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${media.down('md')} {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export default directory;
