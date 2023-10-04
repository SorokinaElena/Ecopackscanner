import axios from 'axios';


// axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.baseURL = 'http://soroka.chickenkiller.com:5001';

// Include credentials (cookies) with every Axios request
// axios.defaults.withCredentials = true;

const API_URL = "/user";

const signup = (userType, companyName, country, adress, email, password) => {
  return axios
    .post(API_URL + '/signup', {
      userType,
      companyName,
      country,
      adress,
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + '/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const recowerPassword = (email) => {
  return axios
    .post(API_URL + '/sendcode', {
      email,
    })
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
  recowerPassword
};

export default authService;

// https://www.youtube.com/watch?v=T5dIjye4b-I&t=546s
// https://www.youtube.com/watch?v=S4_vB1T4jWY
// https://www.youtube.com/watch?v=jrVKh9hkHsA&t=35s
// https://www.8host.com/blog/kak-ispolzovat-axios-v-react/#:~:text=%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D1%8F%D0%B5%D0%BC%20%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%20GET.-,axios.,%D0%BD%D0%B0%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%2C%20%D0%BA%D0%BE%D0%B4%20%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F%20%D0%B2%20res.