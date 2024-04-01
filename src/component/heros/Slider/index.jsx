import React, { useState, useEffect } from 'react'

export default function Slider({ images }) {
  const [currentSlide, setCurrentSlide] = useState(1) // Change this line
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false)
      }, 500)
      return () => clearTimeout(timeout)
    }
  }, [isAnimating])

  const handlePrevClick = () => {
    setIsAnimating(true)
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
  }

  const handleNextClick = () => {
    setIsAnimating(true)
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1))
  }

  return (
    <div className="carousel w-full overflow-hidden sm:flex sm:justify-between sm:items-center">
      {images.map((image, index) => (
        <div
          key={index}
          id={`slide${index + 1}`}
          className={`carousel-item relative w-full flex justify-center items-center ${
            currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ transition: 'opacity 50ms' }}
        >
          <img src={image} className="w-[30%] h-auto mt-10" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle" onClick={handlePrevClick}>
              ❮
            </a>
            <a href={`#slide${index === images.length - 1 ? 1 : index + 2}`} className="btn btn-circle" onClick={handleNextClick}>
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}