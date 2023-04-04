import { defineStore } from 'pinia'
import { IData } from '~/types/webConfig'
export interface ICounterState {
  searchFlag: boolean
  loginFlag: boolean
  registerFlag: boolean
  forgetFlag: boolean
  emailFlag: boolean
  drawer: boolean
  loginUrl: string
  userId: string
  avatar: string
  nickname: string
  intro: string
  webSite: string
  loginType: string
  email: string
  webConfig?: IData | undefined

  // blogInfo: {}
}

export const useUser = defineStore('counter', {
  state: (): ICounterState => ({
    searchFlag: false,
    loginFlag: false,
    registerFlag: false,
    forgetFlag: false,
    emailFlag: false,
    drawer: false,
    loginUrl: '',
    userId: '',
    avatar: '',
    nickname: '',
    intro: '',
    webSite: '',
    loginType: '',
    email: '',
    webConfig: undefined,
  }),
  actions: {
    setStateValue(partial: Partial<ICounterState>) {
      this.$patch(partial)
    },
    resetStateValue() {
      this.$reset()
    },
  },
})
