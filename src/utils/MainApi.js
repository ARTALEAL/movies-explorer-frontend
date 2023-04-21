const BASE_API_URL = 'https://api.artaleal.nomoredomains.monster';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = async ({ name, email, password }) => {
  return fetch(`${BASE_API_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};

export const authorize = async ({ email, password }) => {
  return fetch(`${BASE_API_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};
