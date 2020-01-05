import React, { useState, useCallback } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Dialog from '../components/common/Dialog';
import Button from '../components/common/Button';
import ButtonGroup from '../components/common/Button/ButtonGroup';
import { useWindowEvent } from '../utils';
import Avatar from '../components/common/Avatar';
import AvatarGroup from '../components/common/Avatar/AvatarGroup';

const initial = {
  primary: false,
  secondary: false,
  error: false,
  default: false,
};

function DialogChildren({ theme, closeDialog, confirmDialog }) {
  return (
    <ButtonGroup horizontal position="right">
      <Button theme="secondary" onClick={closeDialog}>
        취소
      </Button>
      <Button theme={theme} onClick={confirmDialog}>
        확인
      </Button>
    </ButtonGroup>
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
      <ButtonGroup horizontal>
        <Button onClick={toggleDialog('primary')}>다이얼로그 열기</Button>
        <Button theme="secondary" onClick={toggleDialog('secondary')}>
          다이얼로그 열기
        </Button>

        <Button theme="error" onClick={toggleDialog('error')}>
          다이얼로그 열기
        </Button>
        <Button theme="link" onClick={toggleDialog('default')}>
          다이얼로그 열기
        </Button>
      </ButtonGroup>
      <div css={[avatarWrapper]}>
        <Avatar size="small" src="http://placeimg.com/64/64/animals?1" />
        <Avatar size="medium" src="http://placeimg.com/64/64/animals?2" />
        <Avatar size="large" src="http://placeimg.com/64/64/animals?3" />
      </div>
      <div css={[avatarWrapper]}>
        <strong>small medium large</strong>
      </div>
      <div css={[avatarWrapper]}>
        <Avatar shape="square" src="http://placeimg.com/64/64/animals?1" />
        <Avatar shape="rounded" src="http://placeimg.com/64/64/animals?2" />
        <Avatar shape="circle" src="http://placeimg.com/64/64/animals?3" />
      </div>
      <div css={[avatarWrapper]}>
        <strong>square rounded circle</strong>
      </div>
      <div css={[avatarWrapper]}>
        <AvatarGroup>
          <Avatar src="http://placeimg.com/64/64/animals?1"></Avatar>
          <Avatar src="http://placeimg.com/64/64/animals?2"></Avatar>
          <Avatar src="http://placeimg.com/64/64/animals?3"></Avatar>
          <Avatar src="http://placeimg.com/64/64/animals?4"></Avatar>
          <Avatar>+5</Avatar>
        </AvatarGroup>
      </div>
      <div css={[avatarWrapper]}>
        <strong>grouped</strong>
      </div>
    </>
  );
}

const avatarWrapper = css`
  display: flex;
  margin-top: 1rem;
  justify-content: center;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

export default directory;
