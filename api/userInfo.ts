import Http from '../utils/http'

export const getUserInfo = <T>(params?: any) => {
  const Https = new Http()
  return Https.get<T>('/', params)
}
