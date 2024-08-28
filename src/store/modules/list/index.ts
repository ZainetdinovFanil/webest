import { Module } from 'vuex';
import axios from '../../axios';
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
  },
  getters: {
    getList(state): List {
      return state.list;
    },
  },
  mutations: {
    setList(state, value: List): void {
      state.list = value;
    },
  },
  actions: {
    async listAction({ commit }, data: number): Promise<void> {
      try {
        const response = await axios.get('list/', {
          params: {
            page: data,
          },
        });
        commit('setList', response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default listModule;
