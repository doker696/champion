import { Button } from '@mui/material';
import styles from './style.module.css';
import cn from 'classnames';

function Event({event, open}) {
  return (
    <div className={styles.eventPaper}>
      <div className={styles.eventTitle}>
        {event.name} ({event.country},{event.city})
        <div className={styles.eventSubTitle}>{event.description}</div>
      </div>
      <div className={styles.eventInfo}>
        <div>Даты: {event.date_begin} - {event.date_finish}</div>
        <div>Статус: {event.status}</div>
      </div>
      <div className={styles.eventBtns}>
        <Button className={cn(styles.watch, styles.eventBtn)} onClick={() => open(event.pk)} >Посмотреть</Button>
      </div>
    </div>
  );
}

export default Event;
