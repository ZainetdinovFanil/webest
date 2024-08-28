import { Module } from 'vuex';
import { TenderDetail } from './types';

const detailModule: Module<any, any> = {
  state: {
    tenderDetail: {} as TenderDetail,
  },
  getters: {
    getTenderDetail(state): TenderDetail {
      return state.tenderDetail;
    },
  },
  mutations: {
    setTenderDetail(state, value: TenderDetail): void {
      state.tenderDetail = value;
    },
  },
  actions: {
    async fetchTenderDetail({ commit }, id: number): Promise<void> {
      try {
        const response = await fetch(`https://api.test-webest.ru/element/?id=${id}`,{
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Error');
      }
      const data = await response.json();
      commit('setTenderDetail', data);
    } catch (err) {
      console.log(err);
    }
    },
  },
};

export default detailModule;
