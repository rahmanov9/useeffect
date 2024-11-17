import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {   

   const[data,setData] = useState([])
   const [loading, setloading] = useState(true)

useEffect(()  => {
   fetch('https://jsonplaceholder.typicode.com/posts')
       .then((response)  => response.json())
       .then((data) => {
          setData(data)
          setloading(false)
       })
},[])

console.log(data);


  return (
    <>
    
    <section className="hero">
      <div className="container">
         <div className="hero__wrapper">

            {loading ? (
               <h2 className='load'>загрузка данных....</h2>
            ) : (
               <>
               
                          {data.map(post => (
                             <div key={post.id} className="hero__card">
                              <h2>{post.title}</h2>
                              <p>{post.body}</p>
                            </div>
                          ))}
               
               </>
            )}

            
         </div>
      </div>
    </section>
    </>
  )
}

export default Hero