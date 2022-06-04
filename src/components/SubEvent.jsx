import { Button } from '@mui/material';
import styles from './style.module.css';
import cn from 'classnames';

function SubEvent({event, open}) {
  return (
    <div className={styles.eventPaper}>
      <div className={styles.eventTitle}>
        {event.name}
        <div className={styles.eventSubTitle}>{event.description}</div>
      </div>
      <div className={styles.eventBtns}>
        <Button className={cn(styles.stat, styles.eventBtn)} onClick={()=>open(event.pk)}>Результаты</Button>
      </div>
    </div>
  );
}

export default SubEvent;
