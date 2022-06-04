import axios from 'axios';
import data from './mock.json';
const api = 'http://44d7-93-124-63-218.ngrok.io';


export const getTypes = async () => {
  return axios.get(`${api}/types`);
};

export const getEvents = async (id) => {
  return axios.get(`${api}/events/${id}`);
};

export const getSubEvents = async (id) => {
  return axios.get(`${api}/subevents/${id}`);
};

export const getSport = async (id) => {
  return axios.get(`${api}/sport/${id}`);
};

export const getMatches = async (id) => {
  return axios.get(`${api}/matches/${id}`);
};

export const getMatch = async (id) => {
  return axios.get(`${api}/match/${id}`);
};

export const getSportInfo = async (id) => {
  return axios.get(`${api}/sport/${id}`);
};
// /////
export const getTypesMock = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: data.types});
    }, 300);
  });
};

export const getEventsMock = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: data.events});
    }, 300);
  });
};

export const getSubEventsMock = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: data.subevent});
    }, 300);
  });
};

export const getSportMock = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: data.sport});
    }, 300);
  });
};

export const getMatchMock = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({data: data.match});
    }, 300);
  });
};
