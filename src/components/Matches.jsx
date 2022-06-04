import { Button } from '@mui/material';
import styles from './style.module.css';
import cn from 'classnames';

function Matches({event, open}) {
  return (
    <div className={styles.eventPaperMatch}>
      <div className={styles.eventTitle}>
        {event.number}. {event.first_participant} vs {event.second_participant}
        <div className={styles.eventSubTitle}></div>
      </div>
      <div className={styles.eventBtns}>
        <Button className={cn(styles.stat, styles.eventBtn)} onClick={()=>open(event.pk)}>Результат</Button>
      </div>
    </div>
  );
}

export default Matches;
