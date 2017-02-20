/**
 * Created by zcdll on 17-2-20 上午11:36.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutaions from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  mpList = [], // 搜索结果列表
  subscribeList: []  // 订阅列表
};

export default new Vuex.Store({
  state,
  mutaions,
  actions
})
