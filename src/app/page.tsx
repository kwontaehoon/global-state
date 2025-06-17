import React from 'react'
import Recoil from '@/components/recoil/page'
import Jotai from '@/components/jotai/page'
import Zustand from '@/components/zustand/page'
import RecoilRootProvider from '@/config/recoilProvider';

const page = () => {
  return (
    <div className='flex h-100 gap-6 p-5'>
      <RecoilRootProvider>
        {/* <React.Suspense fallback={<div>Loading</div>}> */}
        <Recoil />
        {/* <Jotai /> */}
        {/* <Zustand /> */}
        {/* </React.Suspense> */}
      </RecoilRootProvider>
    </div>
  )
}

export default page