
import { defineStore } from 'pinia';
import axios from "axios";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    async login(username, password) {
      let user = {
        emailOrPhoneNumber: username,
        password: password
      }
      try {
        const response = await axios.post('user/login', user);
        this.token = response.data;
        axios.defaults.headers.common['Authorization'] = `${this.token}`;
        localStorage.setItem('token', this.token);
        await this.verifyToken(); // Verify the token and load user details
        localStorage.setItem('user', JSON.stringify(this.user));
      } catch (error) {
        console.error('Failed to login:', error);
      }
    },
    async verifyToken() {
      try {
        const response = await axios.get('user/verify');
        this.user = response.data;
      } catch (error) {
        console.error('Token verification failed:', error);
        this.logout(); // Clear invalid token
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      axios.defaults.headers.common['Authorization'] = '';
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    loadStoredToken() {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      if (token && user) {
        this.token = token;
        this.user = JSON.parse(user);
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        this.verifyToken(); // Verify the token on app load
      }
    }
  },
});
