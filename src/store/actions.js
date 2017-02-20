/**
 * Created by zcdll on 17-2-20 上午11:35.
 */
import * as types from './mutation-types'

export default {
  subscribeMp({commit}, mp){
    commit(types.SUBSCRIBE_MP, mp)
  },
  unsubscribeMp({commit}, weixinhao){
    commit(types.UNSUBSCRIBE_MP, weixinhao)
  },
  addSearchResultList({commit}, mp){
    commit(types.ADD_SEARCHRESULT_LIST, mp)
  },
  unsubSearchResult({commit}, weixinhao){
    commit(types.UNSUBSCRIBE_SEARCHRESULT, weixinhao)
  },
  clearSearchResult({commit}, info){
    commit(types.CLEAR_SEARCHRESULT, info)
  }
}
