 // 在http.js中引入axios
 import axios from 'axios'; // 引入axios
import vueRouter from 'vue-router'
const router = new vueRouter();
import { Loading,Message } from 'element-ui';

axios.defaults.baseURL = process.env.VUE_APP_BASE_API

// 设置请求超时
axios.defaults.timeout = 1000 * 60 * 60 * 60;
// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';



// 请求拦截
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        config.headers.Authorization = 'Bearer ' + (localStorage.token || '');
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
        // 否则的话抛出错误
        // console.log('response',response);
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码    
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        if (error && error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                case 401:
                    Message({
                        message: error.response.data.msg,
                        type: 'warning',
                    });
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                    case 422:
                    Message({
                        message: error.response.data.msg,
                        type: 'err',
                    });
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面                
                case 403:
                    Message({
                        message: error.response.data.msg,
                        type: 'warning',
                    });
                    // 清除token
                    localStorage.removeItem('token');
                    localStorage.removeItem('isLogin');
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.fullPath
                            }
                        });
                    }, 1000);
                    break;

                // 404请求不存在
                case 404:
                    Message({
                        message: '404地址不存在',
                        type: 'error',
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Message({
                        message: '服务器错误...',
                        type: 'error',
                    });
            }
            return Promise.reject(error.response);
        }
    })

// loadingOpt params 具体参数看element 参数
module.export =  function ajax(url, data = {}, loadingOpt, method = 'get') {

    let loadingInstance
    if (loadingOpt) {
        loadingInstance = Loading.service(
            {
                lock: loadingOpt.lock || true,
                text: loadingOpt.text || 'loadign...',
                spinner: loadingOpt.spinner || 'el-icon-loading',
                background: loadingOpt.background || 'rgba(0, 0, 0, 0.7)'
            }
        )

    }
    let promise
    // console.log(arguments);
    
    return new Promise((resovle, reject) => {
        if (method === 'get') {
            promise = axios({
                method,
                url,
                params: data
            });
        } else {
            promise = axios({
                method,
                url,
                data
            });
        }


        promise.then(res => {

            resovle(res.data);
            loadingInstance && loadingInstance.close()

        })
            .catch(error => {
                console.log('error', error);
                loadingInstance && loadingInstance.close()
                Message({
                    message: error.message || error.data.msg || error.data ,
                    type: 'error'
                });
            })


    })


}

['options', 'get', 'post', 'put', 'head', 'delete', 'trace', 'connect'].forEach((method) => {
    ajax[method] = (url, data , loadingOpt) => ajax(url, data = {}, loadingOpt, method)
});

