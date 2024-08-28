import { Module } from 'vuex';
import { List } from './types';

const listModule: Module<any, any> = {
  state: {
    list: {
      data: [],
      page_count: 0,
      page_number: 0,
      page_size: 0,
      total: 0,
    } as List,
    currentPage: 1 as number,
  },
  getters: {
    getList(state): List {
      return state.list;
    },
    getCurrentPage(state): number {
      return state.currentPage;
    },
  },
  mutations: {
    setList(state, value: List): void {
      state.list = value;
    },
    setCurrentPage(state, page: number): void {
      state.currentPage = page;
    },
  },
  actions: {
    async listAction({ commit }, { page }): Promise<void> {
      try {
        const response = await fetch(`https://api.test-webest.ru/list/?page=${page}`,{
          
        method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        commit('setList', data);
        commit('setCurrentPage', page);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default listModule;
