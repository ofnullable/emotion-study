import React, { useState, useEffect } from 'react';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';

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
