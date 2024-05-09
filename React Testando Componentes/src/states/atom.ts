import { atom } from "recoil";

export const userListState = atom<string[]>({
   key: 'userListState',
   default: []
})

export const errorState = atom<string>({
   key: 'errorState',
   default: ''
})