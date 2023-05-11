import React, { useState } from 'react'
import './styles/sliderImgs.css'

const SliderImgs = ({ product }) => {

  const [numberImg, setNumberImg] = useState(0)

  const objStyle = {
    transform: `translateX(calc(-${numberImg}/3 * 100%))`
  }

  const handlePrev = () => {
    if (numberImg - 1 < 0) {
      // setNumberImg(2)
    } else {
      setNumberImg(numberImg - 1)
    }
  }

  const handleNext = () => {
    if (numberImg + 1 > 2) {
      // setNumberImg(0)
    } else {
      setNumberImg(numberImg + 1)
    }
  }

  return (
    <div className='slider'>
      <button onClick={handlePrev} className='slider__btn'><i className='bx bx-chevron-left'></i></button>
      <div style={objStyle} className='slider__interior'>
        {
          product?.images.map(imgInfo => (
            <div className='slider__img--container'>
              <img className='slider__img' key={imgInfo.id} src={imgInfo.url} alt="" />
            </div>
          ))
        }
      </div>
      <button onClick={handleNext} className='slider__btn'><i className='bx bx-chevron-right'></i></button>
    </div>
  )
}

export default SliderImgs