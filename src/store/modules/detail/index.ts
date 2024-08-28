import { Module } from 'vuex';
import axios from '../../axios';
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
        const response = await axios.get(`element/`, {
          params: {
            id: id,
          },
        });
        commit('setTenderDetail', response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default detailModule;
