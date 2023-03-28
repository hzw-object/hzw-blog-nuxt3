import { defineStore } from 'pinia'

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
}

export const useCounter = defineStore('counter', {
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
