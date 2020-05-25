import {history } from 'umi';


export async function getInitialState() {
  // console.log('getInitialState',localStorage.getItem('role'))
  let data = {
    role: localStorage.getItem('role'),
  };
  return data;
}


export const layout = {
  logout: () => {
    localStorage.clear()
    history.push('login')
  }
}