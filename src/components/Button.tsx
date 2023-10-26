import React, { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'warning' }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
