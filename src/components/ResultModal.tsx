import { FC } from 'react';
import { Modal } from './Modal'


export interface ResultModalData {
  turns: number;
  solution: string;
  }


interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: string;
  }


export const ResultModal : FC<ResultModalProps> = ({
  isOpen,
  onClose,
  solution,
}) => {
  return (
    <Modal 
      hasCloseBtn={true}
      isOpen={isOpen}
      onClose={onClose}
      >
      <div className="result">

      {solution}
      </div>
      </Modal>
      )
      }

