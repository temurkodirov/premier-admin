import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import routes from "@/router/routes.js";



axios.defaults.baseURL = 'http://89.23.115.132:4040/api/';

axios.interceptors.request.use(
  config => {
      const token = localStorage.getItem('token');
      if (token) {
          config.headers.Authorization = `${token}`;
      }
      return config;
  },
  error => {
      return Promise.reject(error);
  }
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
