import React, { useState, useCallback } from 'react';
import Dialog from '../components/common/Dialog';
import Button from '../components/common/Button/Button';
import ButtonGroup from '../components/common/Button/ButtonGroup';
import { useWindowEvent } from '../util/utils';

function DialogChildren({ theme, closeDialog, confirmDialog }) {
  return (
    <ButtonGroup horizontal position='right'>
      <Button theme='secondary' onClick={closeDialog}>
        취소
      </Button>
      <Button theme={theme} onClick={confirmDialog}>
        확인
      </Button>
    </ButtonGroup>
  );
}

function directory() {
  const [primaryDialog, setPrimaryDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);

  const keydownHandler = e => {
    if (primaryDialog && e.keyCode === 27) {
      setPrimaryDialog(false);
    }
  };

  useWindowEvent('keydown', keydownHandler, [primaryDialog, errorDialog]);

  const closePrimaryDialog = useCallback(e => {
    e.stopPropagation();
    setPrimaryDialog(false);
  }, []);

  const closeErrorDialog = useCallback(e => {
    e.stopPropagation();
    setErrorDialog(false);
  }, []);

  const confirmPrimaryDialog = e => {
    alert('confirmed!');
    setPrimaryDialog(false);
  };
  const confirmErrorDialog = e => {
    alert('confirmed!');
    setErrorDialog(false);
  };

  return (
    <>
      <Dialog
        visible={primaryDialog}
        title='테스트 다이얼로그'
        content='dialog content'
        cancelHandler={closePrimaryDialog}
      >
        <DialogChildren closeDialog={closePrimaryDialog} confirmDialog={confirmPrimaryDialog} />
      </Dialog>

      <Dialog
        visible={errorDialog}
        theme='error'
        title='테스트 다이얼로그'
        content='dialog content'
        cancelHandler={closeErrorDialog}
      >
        <DialogChildren
          theme='error'
          closeDialog={closeErrorDialog}
          confirmDialog={confirmErrorDialog}
        />
      </Dialog>

      <ButtonGroup horizontal>
        <Button onClick={() => setPrimaryDialog(true)}>다이얼로그 열기</Button>

        <Button theme='error' onClick={() => setErrorDialog(true)}>
          다이얼로그 열기
        </Button>
      </ButtonGroup>
    </>
  );
}

export default directory;
