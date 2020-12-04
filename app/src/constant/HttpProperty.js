const BASE_URL = 'http://ec2-18.219.75.164/.ap-northeast-2.compute.amazonaws.com';
const VERSION = '/v1';

export const SERVER_URL = BASE_URL + VERSION;

export const GROUP_URL = `${SERVER_URL}/group`;
export const SIGN_URL = `${SERVER_URL}/sign`;
export const USER_URL = `${SERVER_URL}/users`;
export const CHAT_URL = `${SERVER_URL}/chat`;
