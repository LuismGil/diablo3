/* eslint-disable import/prefer-default-export */
import { post } from 'axios';

const clientId = 'f8d447dbce624e9599a3934925b8cf7d';
const clientSecret = 'etW1aU8N8F66Q93foNk2KJUk6VY4uIMv';

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
