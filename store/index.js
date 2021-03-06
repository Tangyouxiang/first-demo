// 将具体的reducer编译成统一的rootReducer,并且提供一个初始化store函数，交给 next-redux-wrapper的withRedux 使用
import {createStore,combineReducers} from 'redux'

// 导入具体的业务reducer
// import testReducer from '../reducer/testReducer.js'
import getShopcartCount from '../reducer/getShopcartCount.js'

// 将多个reducer编译成统一的rootReducer
const rootReducer = combineReducers({
    getShopcartCount  //颜色改变测试reducer，无实际意义
})

// 构建初始化Store的函数，交给 next-redux-wrapper的withRedux 使用
const initStore = () => {
    return store
}
export default initStore

// 本地持久化数据
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
const persistConfig = {
    key: 'root',
    storage
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
export const persistor = persistStore(store)