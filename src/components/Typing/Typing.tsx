import { ReactNode } from 'react';

import clsx from 'clsx';

import { TypingStyled } from './styled';

export interface TypingProps {
  className?: string;
  children?: ReactNode;
}

const Typing = ({ className, children }: TypingProps) => {
  return (
    <TypingStyled className={clsx('Typing', className)}>
      {children}
    </TypingStyled>
  );
};

export default Typing;
