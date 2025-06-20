import React from 'react'
import { effectsState, historyList } from '@/store/recoil'
import { useRecoilState } from 'recoil'

const effect = () => {

  // effect atom
  const [state, setState] = useRecoilState(effectsState)

  console.log("historyList: ", historyList)
  
  return (
    <div>
      <div>effect</div>
      <div>{state}</div>
      <div>history: {historyList[0]}</div>
      <button className='border p-1' onClick={()=>setState('11')}>버튼</button>
    </div>
  )
}

export default effect