import axios from 'axios';
const url = 'https://tame-blue-cuff.cyclic.app/api/v1/events';

// pending => fulfilled  / reject

// fetch

/* thenables */

// sync fetch

const fetchData = (_url) => {
  fetch(_url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

/* fetchData(url); */

// Async fetch

const asyncFetch = async (_url) => {
  try {
    const response = await fetch(_url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

asyncFetch(url);

// axios

const axiosData = (_url) => {
  axios(_url)
    .then((data) => {
      response.data;
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

/* axiosData(url) */

// Async axios

const asyncAxios = async (_url) => {
  try {
    const data = await axios(_url);
    console.log(data);
    return data;
  } catch (error) {
    const fetchError = new Error(error);
    console.error(fetchError);
    return fetchError;
  }
};

/* asyncAxios(url) */

// new Promise

const promiseData = (_url) => {
  return new Promise((resolve, reject) => {
    fetch(_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

// async promise

const asyncPromiseData = (_url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(_url);
      const data = await response.json();
      console.log(data);
      resolve(data);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

asyncPromiseData(url)
