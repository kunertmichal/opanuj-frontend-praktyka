// import axios from 'axios';

// // Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   config.startTime = new Date();
//   return config;
// });

// // Add a response interceptor
// axios.interceptors.response.use(function (response) {
//   const endTime = new Date();
//   const duration = endTime - response.config.startTime;
//   console.log(`Zapytanie trwało ${duration}ms`);
//   return response;
// });

// const {
//   data: { articles },
// } = await axios.get('/api/data/articles?timeout=3000');

// document.querySelector('#data').innerHTML = articles[0].content;

const fetchProxy = new Proxy(fetch, {
  apply(target, _, argumentsList) {
    const now = new Date();
    return target(...argumentsList).then((response) => {
      const duration = new Date() - now;
      console.log(`Zapytanie trwało ${duration}ms`);
      return response;
    });
  },
});

const response = await fetchProxy('/api/data/articles?timeout=2000');
const data = await response.json();

document.querySelector('#data').innerHTML = data.articles[0].content;
