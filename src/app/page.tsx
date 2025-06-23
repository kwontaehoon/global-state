import React from 'react'
import Recoil from '@/components/recoil/page'
import Jotai from '@/components/jotai/server'
import Zustand from '@/components/zustand/server'
import RecoilRootProvider from '@/config/recoilProvider';
import JotaiProvider from '@/config/jotaiProvider'
import RecoilObserver from '@/components/recoil/observer'

const page = () => {

  return (
    <div className='flex h-100 gap-6 p-5'>
      <RecoilRootProvider>
        <RecoilObserver />
        <JotaiProvider>
        {/* <React.Suspense fallback={<div>Loading</div>}> */}
        {/* <Recoil /> */}
        {/* <Jotai /> */}
        <Zustand />
        {/* </React.Suspense> */}
        </JotaiProvider>
      </RecoilRootProvider>
    </div>
  )
}

export default page