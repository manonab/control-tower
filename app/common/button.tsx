import React from 'react';
import { useCreateEvaluation } from '~/hooks/api/use-evaluations';

interface ButtonProps {
  title: string;
  isClickable?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ title, isClickable = true }: ButtonProps) => {
  const { handleCreateEvaluation } = useCreateEvaluation();

  const handleButtonClick = () => {
    handleCreateEvaluation();
  };

  return (
    <button
      disabled={isClickable}
      onClick={handleButtonClick}
      className={`${isClickable ? 'bg-lightGray text-disabled cursor-not-allowed' : 'bg-royalBlue text-lightGray cursor-pointer'} rounded-md w-[200px] p-1 mx-auto`}
    >
      {title}
    </button>
  );
};
