import axios from 'axios';

const STRAPI_TOKEN =
  'ee73003d82a405961e843e87c73f220ffb9a8a53d49a59ed5a4b28d46ed18d02b3df845ab7652d2a52397abc554306373362622b37aedc8bc5022217de646735b99fa53a36b2e376aca6a14a37de274925298ec30c1b3a19a70a89f68ae8f5c04d8c3ad0a92c8ae5706d7048e3e5b82ef0208c8cbdf4a1c8038128d6fe7af270';

export const apiClient = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: `Bearer ${STRAPI_TOKEN}`,
  },
});
