import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

function posts() {
  const arr = [
    { 
      id: 1,
      title: 'Post 1',
      body: 'Post 1 body'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Post 2 body'
    }
  ]
  return (
    <div className='max-w-[1200px] mx-auto pt-40'>
      <Head>
        <title>Posts page</title>
      </Head>
       
      <div className='flex justify-center gap-[50px] pt-[50px]'>
        {
          arr.map(item => {
            return (
              <Link key={item.id} href={`/posts/${item.id}`}>
                <div className='w-[300px] h-[200px] border text-center p-[20px] rounded-lg max-sm:w-[120px] duration-200 '>
                  <h1 className='mb-[50px]'>{item.title}</h1>
                  <p>{item.body}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default posts