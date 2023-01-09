import React from 'react'


const Product = (props: {img: string, name: string, github: string, live: string}) => {
  return (
    <div className='projectWrapper flex flex-col justify-center align-middle text-center items-center'>
        <h2 className="projectName flex justify-center align-middle font-light text-[1.5em]">{props.name}</h2>  
            <img src={props.img} alt="productImage"  className='h-[20em]'/>
        <div className="linkWrapper flex justify-between align-middle">
            <a href={props.github} className="font-poppins">Code</a>
            <a href={props.live} className="font-poppins">Live</a>
        </div>

    </div>
  )
}

export default Product