import React from 'react'
import Recoil from '@/components/recoil/page'
import Jotai from '@/components/jotai/server'
import Zustand from '@/components/zustand/page'
import RecoilRootProvider from '@/config/recoilProvider';
import JotaiProvider from '@/config/jotaiProvider'

const page = () => {
  return (
    <div className='flex h-100 gap-6 p-5'>
      <RecoilRootProvider>
        <JotaiProvider>
        {/* <React.Suspense fallback={<div>Loading</div>}> */}
        {/* <Recoil /> */}
        <Jotai />
        {/* <Zustand /> */}
        {/* </React.Suspense> */}
        </JotaiProvider>
      </RecoilRootProvider>
    </div>
  )
}

export default page