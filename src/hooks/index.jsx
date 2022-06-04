import { useState, useEffect } from 'react';
import { getEvents, getEventsMock, getTypes, getTypesMock, getSubEvents, getMatch, getMatches } from '../api';

export const useEvents = () => {
  const [types, setTypes] = useState([]);
  const [events, setEvents] = useState([]);
  const [isEventLoading, setEventLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

  const handleChange = (type) => {
    setSearchValue(type);
    setEvents([]);
  };

  useEffect(() => {
    const t = localStorage.getItem('types');
    const sv = localStorage.getItem('searchValue');
    if (t) {
      setTypes(JSON.parse(t));
      setSearchValue(JSON.parse(sv));
      return;
    }

    getTypes().then(({ data }) => {
      setTypes(data);
      localStorage.setItem('types', JSON.stringify(data));
    }).catch((er) => {

    });
  }, []);

  useEffect(() => {
    if (searchValue) {
      setEventLoading(true);

      localStorage.setItem('searchValue', JSON.stringify(searchValue));

      getEvents(searchValue.pk).then(({ data }) => {
        setEvents(data);
      }).finally(() => {
        setEventLoading(false);
      });
    }
  }, [searchValue]);

  return { types, events, searchValue, handleChange, isEventLoading };
};

export const useSubEvent = (id) => {
  const [subEvents, setSubEvents] = useState([]);
  const [subEventsIsLoading, setSubEventsIsLoading] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    setSubEventsIsLoading(true);
    getSubEvents(id).then(({data}) => {
      setSubEvents(data);
    }).finally( () => {
      setSubEventsIsLoading(false);
    });
  }, [id]);

  return {subEvents, subEventsIsLoading};
};

export const useMatches = (id) => {
  const [matches, setMatches] = useState([]);
  const [matchesIsLoading, setMatchesIsLoading] = useState(false);

  const clearMatches = () => setMatches([]);

  useEffect(() => {
    if (!id) {
      return;
    }

    setMatchesIsLoading(true);
    getMatches(id).then(({data}) => {
      setMatches(data);
    }).finally( () => {
      setMatchesIsLoading(false);
    });
  }, [id]);

  return {matches, matchesIsLoading, clearMatches};
};

export const useMatch = (id) => {
  const [match, setMatch] = useState(null);
  const [matchIsLoading, setMatchIsLoading] = useState(false);

  const clearMatch = () => setMatch(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    setMatchIsLoading(true);
    getMatch(id).then(({data}) => {
      setMatch(data);
    }).finally( () => {
      setMatchIsLoading(false);
    });
  }, [id]);

  return {match, matchIsLoading, clearMatch};
};
