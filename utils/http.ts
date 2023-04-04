import { hash } from 'ohash'

// 后端返回的数据类型
export interface ResOptions<T> {
  data?: T
  code?: number
  flag?: boolean
  message?: string
}

/**
 * api请求封装
 * @param { String } url 请求地址
 * @param { Object } options useFtech第二个参数
 * @param { Object } headers 自定义header头, 单独设置headers区分请求参数，也好设置类型
 */
const fetch = <T>(url: string, options?: any, headers?: any): Promise<T> => {
  // const {
  //   public: { VITE_API_HOST },
  // } = useRuntimeConfig() // 3.0正式版环境变量要从useRuntimeConfig里的public拿

  const reqUrl = 'http://120.48.80.108:9998' + url // 你的接口地址
  // console.log(reqUrl, '00000')
  // console.log(NUXT_PUBLIC_API_MOCK)
  // 不设置key，始终拿到的都是第一个请求的值，参数一样则不会进行第二次请求
  const key = hash(JSON.stringify(options) + url)

  // 可以设置默认headers例如
  const customHeaders = { token: useCookie('token').value, ...headers }

  return new Promise((resolve, reject) => {
    useAsyncData(reqUrl, { key, headers: customHeaders, ...options })
      .then(({ data, error }) => {
        if (error.value) {
          reject(error.value)
          return
        }
        const value: any = data.value
        console.log('useFetchResData: ', value)
        if (!value) {
          throw createError({
            statusCode: 500,
            statusMessage: reqUrl,
            message: value?.message,
          })
        } else {
          resolve(value)
        }
      })
      .catch((err: any) => {
        // console.log(err)
        reject(err)
      })
  })
}

export default class Http {
  get<T>(url: string, params?: any, headers?: any): Promise<T> {
    return fetch<T>(url, { method: 'get', params }, headers)
  }

  post<T>(url: string, params?: any, headers?: any): Promise<T> {
    return fetch<T>(url, { method: 'post', params }, headers)
  }

  put<T>(url: string, params?: any, headers?: any): Promise<T> {
    return fetch<T>(url, { method: 'put', params }, headers)
  }

  delete<T>(url: string, params?: any, headers?: any): Promise<T> {
    return fetch<T>(url, { method: 'delete', params }, headers)
  }
}
