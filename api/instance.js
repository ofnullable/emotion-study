import axios from 'axios';
import { isProd } from '../utils';

const SERVER_BASE_URL = isProd ? '' : 'http://localhost:8000';

export default axios.create({ baseURL: SERVER_BASE_URL, withCredentials: true });
