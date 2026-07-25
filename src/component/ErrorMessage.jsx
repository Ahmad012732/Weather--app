import React from 'react'

function ErrorMessage({error}) {
    if(!error) return null
    return (
        <div>
        <p>{error}</p>
      </div>
  )
}

export default ErrorMessage