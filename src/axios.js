import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://jsonplaceholder.typicode.com',
	headers: {'Authorization': 'AUTH TOKEN FROM INSTANCE'}
  });

export default instance;