import { FC } from 'react';
import { Modal } from './Modal'




interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  }


export const HelpModal : FC<HelpModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal 
      hasCloseBtn={true}
      isOpen={isOpen}
      onClose={onClose}
      >
      <div className="result">
      <section>
        <h1>طريقة اللعب :</h1>
<p>لديك ست محاولات لتخمين الكلمة الصحيحة المكونة من خمسة أحرف ، يمكنك الكتابة مباشرة باستخدام لوحة المفاتيح في جهازك أو لوحة المفاتيح الموجود على الصفحة .</p>
      </section>

      </div>
      </Modal>
      )
      }

