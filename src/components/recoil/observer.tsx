'use client'

import { useRecoilTransactionObserver_UNSTABLE } from 'recoil'

export default function RecoilObserver() {

  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    console.log('🔄 상태 변경 감지됨:')
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      const loadable = snapshot.getLoadable(node)
      console.log(`🧪 atom: ${node.key}, value:`, loadable.contents)
    }
  })

  return null
}
