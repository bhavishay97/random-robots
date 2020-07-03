import http from './httpService';

const API = process.env.REACT_APP_API;

export function getRobots() {
  return http.get(API);
}
