import { atom } from 'recoil'
// allow for global state instead of useState()
export const modalState = atom({
  key: 'modalState',
  default: false,
})

export const postIdState = atom({
  key: 'postIdState',
  default: '',
})
