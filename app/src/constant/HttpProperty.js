// const BASE_URL = 'http://ec2-18-219-75-164.us-east-2.compute.amazonaws.com';
const BASE_URL = 'http://10.0.2.2:10753'; // for local emulator and local server;
const VERSION = '/v1';

export const SERVER_URL = BASE_URL + VERSION;

export const GROUP_URL = `${SERVER_URL}/group`;
export const SIGN_URL = `${SERVER_URL}/sign`;
export const USER_URL = `${SERVER_URL}/users`;
export const CHAT_URL = `${SERVER_URL}/chat`;
