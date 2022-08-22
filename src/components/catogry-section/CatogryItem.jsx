import React from 'react'

const CatogryItem = (props) => {
  return (
    <button className='p-2 border rounded-full d-500'>{props.name}</button>
  )
}

export default CatogryItem