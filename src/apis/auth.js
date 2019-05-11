import req from './http.js'

// 在这里定义了一个登陆的接口，把登陆的接口暴露出去给组件使用
export const LOGIN = params => req('post', '/api/users/login', params);

// 定义注册接口
export const REG = params => req('post', '/api/users/reg', params);
