// import React from 'react'
// import Navbar from './Components/Navbar'

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Props from './Components/Props'

// const App = () => {
//   return (
//     <>
//     <Props name='Idris' job='web developer' worth='millioniare'/>
//     <Props  name='Omoh' job='web developer' worth='millioniare'/>
//     <Props name='Xtiana' job='web developer' worth='millioniare'/>
//     <Props name='Teeboyy' job='web developer' worth='millioniare'/>
//     <Props name='David' job='web developer' worth='millioniare'/>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import New from './Components/New'


// const App = (props) => {
//   return (
//     <>
//           <New name='idris' earn={9000}/>
//           <New name='david' earn={8000}/>
//           <New name='teeboi' earn={7000}/>
//           <New name='victor' earn={6000}/>
//     </>

    
    
//   )
// }

// export default App

import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'







const App = (props) => {

  const image1 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/92/643077/1.jpg?0796"
  const image2 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/44/9797052/1.jpg?1463"
  const image3 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/71/1897052/1.jpg?0761"
  const image4 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/05/951058/1.jpg?9250"
  const image5 = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/05/951058/1.jpg?9250"
  return (
    <>
     <Navbar />

<div className='d-flex flex-wrap gap-5'>

  <Card image={image1} name='Hisense UHD TV' description='Durable home television your kids cannot break' price='$800'/>
  <Card image={image2} name='Hikers HD TV' description='Afrodable Home television for your economy' price='$650'/>
  <Card image={image3} name='Hikers USBHD TV' description='Good and affordable with great sight view' price='$410'/>
  <Card image={image4} name='Hikers HD TV' description='For your eyes only' price='$380'/>
  <Card image={image5} name='Hikers HD TV' description='Tv too good to be true cos of price' price='$200'/>
</div>

<Footer/>
    </>

   
  )
}

export default App
