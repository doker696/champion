import { Backdrop, Button, CircularProgress, Modal } from '@mui/material';
import { useState } from 'react';
import Event from '../components/Event';
import Search from '../components/Search';
import { useEvents, useMatch, useSubEvent, useMatches } from '../hooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './style.module.css';
import SubEvent from '../components/SubEvent';
import Matches from '../components/Matches';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [state, setState] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedSubEventId, setSelectedSubEventId] = useState(null);
  const [selectedMatchId, setSelectedMatchId] = useState(null);

  const navigator = useNavigate();

  const { types, events, searchValue, handleChange, isEventLoading } =
    useEvents();
  const { subEvents, subEventsIsLoading } = useSubEvent(selectedEventId);
  const { matches, matchesIsLoading, clearMatches } =
    useMatches(selectedSubEventId);
  const { match, matchIsLoading, clearMatch } = useMatch(selectedMatchId);

  const openEvent = (id) => {
    setState(2);
    setSelectedEventId(id);
  };
  const openSubEvent = (id) => {
    setState(3);
    setSelectedSubEventId(id);
  };

  const handleShowResult = (id) => {
    setModalIsOpen(true);
    setSelectedMatchId(id);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedMatchId(null);
    clearMatch();
  };

  const changeType = (type) => {
    setState(1);
    handleChange(type);
  };

  return (
    <>
      {types.length ? (
        <Search
          types={types}
          onClick={changeType}
          value={searchValue}
        />
      ) : (
        <div className={styles.spin}>
          <CircularProgress />
        </div>
      )}
      {searchValue && (
        <div>
          <div className={styles.eventTitle}>
            <div>
              {state !== 1 ? (
                <Button className={styles.iconButton} onClick={() => setState(state - 1)}>
                  <ArrowBackIcon />
                </Button>
              ) : (
                <div></div>
              )}
            </div>
            {state === 1 ?
              searchValue.name.toUpperCase() :
              events.find((el) => el.pk === selectedEventId).name}
          </div>
          <div className={styles.divider} />
          {state === 1 ? (
            !isEventLoading ? (
              events.length ? (
                <div className={styles.eventList}>
                  {events.map((event) => (
                    <Event key={event.key} event={event} open={openEvent}/>
                  ))}
                </div>
              ) : (
                <div className={styles.notFound}>
                  <div>Не найдено событий</div>
                  <div>Выберете другой вид спорта</div>
                </div>
              )
            ) : (
              <div className={styles.spin}>
                <CircularProgress />
              </div>
            )
          ) : (
            <></>
          )}

          {state === 2 ? (
            <div>
              {subEventsIsLoading ? (
                <div className={styles.spin}>
                  <CircularProgress />
                </div>
              ) : (
                <div className={styles.subEventList}>
                  {subEvents.map((el) => (
                    <SubEvent key={el.pk} event={el} open={openSubEvent} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <></>
          )}

          {state === 3 ? (
            <div>
              {matchesIsLoading ?
                (<div className={styles.spin}>
                  <CircularProgress />
                </div>) :
                (matches.length ? <div className={styles.subEventList}>
                  {matches.map((el) => (
                    <Matches key={el.pk} event={el} open={handleShowResult} />
                  ))}
                </div> : <div className={styles.notFound}>
                  <div>Не найдено событий</div>
                  <div>Выберете другой матч</div>
                </div>)
              }
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
      {modalIsOpen && match === null && <Backdrop open={true}>
        <CircularProgress />
      </Backdrop>}
      {modalIsOpen && match !== null ? (
        <Modal open={true} onClose={handleCloseModal}>
          <div className={styles.modalPaper}>
            <div className={styles.modalText1}>
              {match.first_participant} - {match.second_participant}
            </div>
            <div className={styles.modalText2}>{match.score}</div>
            <div className={styles.modalText2}>{match.date}</div>
            <div className={styles.modalText3}>{match.description}</div>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default Events;
