import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rochaleiloes.com.br/api/v1/',
});

export const s3ImagePath =
  'https://rocha-storage.s3.sa-east-1.amazonaws.com/rochaleiloes';

export default api;
