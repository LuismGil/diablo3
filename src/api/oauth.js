/* eslint-disable import/prefer-default-export */
import { post } from 'axios';

const clientId = CLIENTID;
const clientSecret = CLIENTSECRET;

const region = 'eu';
const API_URL = `https://${region}.battle.net/oauth/token`;

function getToken() {
  const body = new FormData();

  body.append('grant_type', 'client_credentials');
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: { username: clientId, password: clientSecret },
  };
  return post(API_URL, body, config);
}

export {
  getToken,
};
