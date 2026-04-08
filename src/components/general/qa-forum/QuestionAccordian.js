import { useState } from 'react';
import styles from '@/styles/components/QuestionAccordian.module.css';

function QuestionAccordion({ questionText, children, openAccordion }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldOpen = openAccordion !== undefined ? openAccordion : isOpen;
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer}>
      <div
        className={styles.questionBar}
        onClick={toggleAccordion}
        onKeyDown={toggleAccordion}
        role="button"
        tabIndex={0}
      >
        <div className={`${styles.expandIcon} ${shouldOpen ? styles.open : ''}`} />
        <div className={styles.questionText}>{questionText}</div>
      </div>
      <div className={styles.accordionContent}>{shouldOpen && children}</div>
    </div>
  );
}

export default QuestionAccordion;
