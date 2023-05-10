import React from 'react'

function Gallery() {
 const movies = [
   {
    "title": "MacBook Air with M2 chip",
    "year": 2023,
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba-digitalmat-gallery-4-202111?wid=364&hei=333&fmt=png-alpha&.v=1665185957075"
   },
   {
    "title": "iPhone 14 Pro",
    "year": 2022,
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14pro-digitalmat-gallery-2-202209?wid=364&hei=333&fmt=png-alpha&.v=1660830896841"
   },
   {
    "title": "iPad Pro 11-inch",
    "year": 2023,
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202210?wid=364&hei=333&fmt=png-alpha&.v=1664477161220"
   },
   {
    "title": "Apple Watch Ultra",
    "year": 2023,
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra-digitalmat-gallery-3-202209_GEO_CA?wid=364&hei=333&fmt=png-alpha&.v=1661557390850"
   },

  ]

 return (
  <section>
   <div className='container flex '>
    <div className='grid'>
    {movies.map(item =>
    <div className='component'>
     <div className='cover'>
     <figure>
      <img src={item.img} alt='poster'></img>
     </figure>
    <div className='content'>
      <p><strong>{item.title}</strong></p>
      <p>{item.year}</p>
     </div>
     </div>
    </div>
    )}
    </div>
    </div>
  </section>
 )
}

export default Gallery