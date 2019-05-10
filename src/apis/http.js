import axios from 'axios'
import apiConfig from './api.config'

var instance = axios.create({
    baseURL: apiConfig.baseUrl,
    timeout: 6000
})

// 请求拦截器
instance.interceptors.request.use(function( config ) {
    // 每次发送请求之前，将token放到请求头中
    if(localStorage.getItem('token')) {
        config.headers.authorrization = localStorage.getItem('token')
    }
    return config;
}, function(error) {
    return Promise.reject(error);
})

// 响应拦截器
instance.interceptors.response.use(function( res ) {
    if(res.status == '200') {
        if(res.data.token) {
            localStorage.setItem('token', res.data.token)
        } else {
            // 错误处理 根据不同的状态码处理
        }
    }
    return res.data;
}, function(error) {
    return Promise.reject(error);
})

/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
export default function(method, url, data = null) {
    method = method.toLowerCase();
    if(method == 'post') {
        return instance.post(url, data)
    } else if(method == 'get') {
        return instance.get(url, { params: data })
    } else if(method == 'delete') {
        return instance.delete(url, { params: data })
    } else if(method == 'put') {
        return instance.put(url, data)
    } else {
        console.error('未知的method' + method)
        return false
    }
}
