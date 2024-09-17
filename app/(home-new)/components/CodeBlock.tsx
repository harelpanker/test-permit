import { FC } from 'react';

import '@/styles/hljs.css';
import '../styles/overflow.css';

type CodeBlockProps = {
  children?: React.ReactNode;
  className?: string;
  overflowXNone?: boolean;
};
const CodeBlock: FC<CodeBlockProps> = ({
  children,
  className,
  overflowXNone,
}) => {
  return (
    <div className='hide_scrollbar overflow-y-auto'>
      <pre className={`hide_scrollbar !m-0 !bg-[#2A211F] !p-0 !font-mono`}>
        <code
          className={`${className ? className : ''} !text-sm ${
            overflowXNone ? 'is_overflow_none' : 'hide_scrollbar'
          }`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
