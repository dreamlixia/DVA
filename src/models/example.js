
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};

// Model 对象的属性
// namespace: 当前 Model 的名称。整个应用的 State，由多个小的 Model 的 State 以 namespace 为 key 合成
// state: 该 Model 当前的状态。数据保存在这里，直接决定了视图层的输出
// reducers: Action 处理器，处理同步动作，用来算出最新的 State
// effects：Action 处理器，处理异步动作
