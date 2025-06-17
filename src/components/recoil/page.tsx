'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { recoilAsyncFamilyQuery, recoilAsyncFamilyState, recoilAsyncQuery, recoilAsyncState, recoilSelector, recoilState } from '@/store/recoil'
import { useRecoilState, useRecoilValue, useSetRecoilState, useRecoilValueLoadable, useRecoilCallback, useRecoilRefresher_UNSTABLE } from 'recoil'
import ErrorMessage from './errorMessage'

const Page = () => {

  // atom
  const [state, setState] = useRecoilState(recoilState)
  
  // selector
  const selectorValue = useRecoilValue(recoilSelector)

  // asyncQuery
  const asyncQueryValue = useRecoilValueLoadable(recoilAsyncQuery)

  // pre-fetch
  const changeUser = useRecoilCallback(({snapshot, set}) => async () => {
    const loadable = await snapshot.getLoadable(recoilAsyncQuery);
    if (loadable.state === 'hasValue') {
      set(recoilAsyncState, loadable.contents);
    }
  });

  // refresh
  const asyncQueryrefresh = useRecoilRefresher_UNSTABLE(recoilAsyncQuery);

  // atomFamily
  const [asyncFamilyState, setAsyncFamilyState] = useRecoilState(recoilAsyncFamilyState(null))

  // asyncFamilyQuery
  const asyncFamilyQueryValue = useRecoilValueLoadable(recoilAsyncFamilyQuery(asyncFamilyState))
  
  // refresh selector family
  const setRequestID = useSetRecoilState(recoilAsyncFamilyState(asyncFamilyState));
  const refreshAsyncFamilyQuery = () => setRequestID((prev) => prev + 1);

  return (
    <div className='flex-1 border p-2'>
      <h2>recoil</h2>
      <div>recoilState: {state}</div>
      <div onClick={()=>setState('321')}>버튼</div>
      <div>recoilString: {selectorValue}</div>
      <div onClick={()=>asyncQueryrefresh()}>버튼</div>
      {asyncFamilyQueryValue.state !== 'hasValue' ? <div>Loading</div> : <p>값: {asyncFamilyQueryValue.contents}</p>}
      <div onClick={()=>refreshAsyncFamilyQuery()}>리프레시 버튼</div>
      <ErrorMessage error="error입니다" />
    </div>
  )
}

export default Page