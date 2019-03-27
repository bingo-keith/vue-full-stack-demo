import req from './http.js'

export const LOGIN = params => req('post', '/api/users/login', params)

export const REG = params => req('post', '/api/users/reg', params)
