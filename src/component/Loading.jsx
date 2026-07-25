import React from 'react'

function Loading({loading,}) {
    if(!loading) return null
  return (
    <div className='flex justify-center my-6'>
        <div className='animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent'
        ></div>
    </div>
  )
}

export default Loading