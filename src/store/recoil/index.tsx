import axios from "axios";
import { atom, atomFamily, selector, selectorFamily } from "recoil"

export const recoilState = atom({
    key: 'RecoilStateKey',
    default: '123',
});

export const recoilSelector = selector({
  key: 'RecoilSelectorKey',
  get: ({get}) => {
    const value = get(recoilState)
    const unit = '입니다.';

    return `${value}${unit}`;
  }
});

export const recoilAsyncState = atom({
  key: 'RecoilAsyncState',
  default: 1
})

export const recoilAsyncQuery = selector({
  key: 'RecoilAsyncQueryKey',
  get: async ({get}) => {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/api/test2?page=1',
    })
    return response.data
  }
})

export const recoilAsyncFamilyState = atomFamily({
  key: 'recoilAsyncFamilyState',
  default: 1
})

export const recoilAsyncFamilyQuery = selectorFamily({
  key: 'RecoilAsyncFamilyQuery',
  get: (params) => async ({get}) => {
    get(recoilAsyncFamilyState(params));
    try {
      const response = await axios.get(`http://localhost:8080/api/test2?page=${params}`);
      return response.data;
    } catch (error) {
      throw new Error('서버 내부 오류');
    }
  }
})

// historyList
export const historyList:any[] = []

// atomEffects func
const atomEffectFunc = () => ({ setSelf, onSet, trigger }: any) => {

  onSet(async (newValue: any, oldValue: any) => {
    historyList.push(oldValue)
  })

  // trigger가 'get'일 때 비동기 초기화 실행
  if (trigger === 'get') {
    // 내부에 async 함수 선언 후 실행
    (async () => {
      try {
        const data = await axios.get(`http://localhost:8080/api/test2?page=0`)
        setSelf(data?.data)
      } catch (error) {
        console.error("초기화 데이터 요청 실패: ", error)
      }
    })()
  }
}


// history atom
export const historyAtom = atom<number[]>({
  key: 'historyAtom',
  default: [],
})

// atomEffects
export const effectsState = atom({
  key: 'effectsState',
  default: 'effectsState',
  effects: [atomEffectFunc()]
})