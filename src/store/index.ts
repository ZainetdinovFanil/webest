import { createStore } from 'vuex';
import listModule from './modules/list/index';
import detailModule from './modules/detail/index';

export default createStore({
  modules: {
    list: listModule,
    detail: detailModule,
  },
});
