import React from 'react'
import Product from './Product'

const ProductList = () => {
  return (
    <div className="productWrapper h-[100%]">
        <h1 className='font-poppins text-[3em]'>My Projects</h1>
        <div className='grid grid-cols-3 grid-rows-2 gap-10'>
        <Product 
      img="https://imagizer.imageshack.com/img923/6121/pdHoAY.png"
      name='Cv Project'
      github='https://github.com/JLaat/cv-project'
      live='https://jlaat.github.io/cv-project/' />
      <Product 
      img="https://imagizer.imageshack.com/img923/8146/k6Qybf.png"
      name='Weather App'
      github='https://github.com/JLaat/cv-project'
      live='https://jlaat.github.io/cv-project/' />
      <Product 
      img="https://imagizer.imageshack.com/img924/4756/dYqN6T.png"
      name='Calculator'
      github='https://github.com/JLaat/cv-project'
      live='https://jlaat.github.io/cv-project/' />
      <Product 
      img="https://imagizer.imageshack.com/img922/7820/5iHeav.png"
      name='Admin Dashboard'
      github='https://github.com/JLaat/cv-project'
      live='https://jlaat.github.io/cv-project/' />
      <Product 
      img="https://imagizer.imageshack.com/img922/2875/AgekOR.png"
      name='Landing Page'
      github='https://github.com/JLaat/cv-project'
      live='https://jlaat.github.io/cv-project/' />
      <Product 
      img="https://imagizer.imageshack.com/img923/6121/pdHoAY.png"
      name='Cv Project'
      github='https://github.com/JLaat/cv-project'
      live='https://jlaat.github.io/cv-project/' />
    </div>
    </div>
  )
}

export default ProductList