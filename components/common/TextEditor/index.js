import React, { useState, useEffect } from 'react';

function TextEditor() {
  const [Tui, setTui] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('@toast-ui/react-editor').then(tui => {
        setTui(tui);
      });
    }
  }, []);

  return <>{Tui && <Tui.Editor />}</>;
}

export default TextEditor;
