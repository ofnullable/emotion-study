import React, { useEffect, useState, useCallback } from 'react';
import Dialog from '../components/common/Dialog';
import Button from '../components/common/Button/Button';
import ButtonGroup from '../components/common/Button/ButtonGroup';
import { useWindowEvent } from '../util/utils';

function directory() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const keydownHandler = e => {
    if (dialogVisible && e.keyCode === 27) {
      setDialogVisible(false);
    }
  };

  useWindowEvent('keydown', keydownHandler, [dialogVisible]);

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = useCallback(e => {
    e.stopPropagation();
    setDialogVisible(false);
  }, []);

  const confirmDialog = e => {
    alert('confirmed!');
    setDialogVisible(false);
  };

  return (
    <>
      <Dialog
        visible={dialogVisible}
        title='테스트 다이얼로그'
        content='dialog content'
        cancelHandler={closeDialog}
      >
        <ButtonGroup horizontal position='right'>
          <Button theme='secondary' onClick={closeDialog}>
            취소
          </Button>
          <Button onClick={confirmDialog}>확인</Button>
        </ButtonGroup>
      </Dialog>

      <Button onClick={openDialog}>다이얼로그 열기</Button>
    </>
  );
}

export default directory;
