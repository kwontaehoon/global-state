import { postsAtom } from '@/store/jotai'
import { useAtom } from 'jotai'
import React from 'react'

const refresh = () => {

  const [posts, refreshPosts] = useAtom(postsAtom)

  return (
    <div>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      {/* Clicking this button will re-fetch the posts */}
      <button type="button" onClick={() => refreshPosts()}>
        Refresh posts
      </button>
    </div>
  )
}

export default refresh