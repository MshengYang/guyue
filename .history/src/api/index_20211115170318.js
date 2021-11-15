import axios from 'axios';
const env = 'http://www.baidu.com';


const instance = axios.create({
    baseURL: env,
    timeout: 1000,
  });

  // 添加请求拦截器
  instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(localStorage.getItem('ACCESS_TOKEN')){
        /**添加你的token */
        config.headers.auth = localStorage.getItem('ACCESS_TOKEN')
    }
     
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
