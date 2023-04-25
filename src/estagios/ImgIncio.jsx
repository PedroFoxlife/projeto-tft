import React from 'react'
import { useContext } from 'react'
import { CorpoContext } from '../context/corpo'

const ImgIncio = ({ img }) => {
  const [corpoState, dispatch] = useContext(CorpoContext);
  return (
    <div>
      <img src={img} ></img>
    </div>
  )
}

export default ImgIncio