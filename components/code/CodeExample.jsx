// src/components/CodeExample.jsx

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeExample.css';

const CodeExample = ({ codeString }) => {
  return (
    <div className='code-example'>
      <SyntaxHighlighter language="jsx" style={coy}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeExample;
