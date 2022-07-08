import axios from 'axios'
const baseURL='http://175.178.232.26:8888/api'
//const baseURL='http://localhost:8888/api'
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
	config.url=baseURL+config.url
	console.log('请求数据:',config)
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
	console.log('响应数据:',response)
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
//查询
export const insData=(params)=>{
	return axios.post('/UserIns',params)
}

//查询
export const getAllUserData=(params)=>{
	return axios.post('/UserSelect',params)
}
