import { useRouter } from 'next/router'
import React from 'react'

function postsId() {
  const router = useRouter()
  const id = router.query.postsId
  return (
    <div className="max-w-[1200px] mx-auto pt-40">
      <div className="flex justify-center pt-[60px]">
        <div className="w-[300px] h-[200px] border text-center p-[20px] rounded-lg">
          <h1 className="mb-[50px]">Post {id}</h1>
          <p>Post {id} body</p>
        </div>
      </div>
    </div>
  );
}

export default postsId
