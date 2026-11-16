import StyledButton from '../StyledButton';
import styles from '@/styles/components/AddStoryButton.module.css';

const STORY_FORM_URL =
  'https://possible-surf-e96.notion.site/406e552db9f280fc8b2edf24db49f7f3?pvs=105';

export default function AddStoryButton() {
  return (
    <div className={styles.white}>
      <StyledButton
        onClick={() => window.open(STORY_FORM_URL, '_blank', 'noopener,noreferrer')}
      >
        <h3>Add Your Story ↗</h3>
      </StyledButton>
    </div>
  );
}
