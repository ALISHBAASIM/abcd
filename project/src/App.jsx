import React from 'react'
import Header from './components/header section/Header'
import Group_1 from './components/content section/group 1/Group_1'
import Group_2 from './components/content section/group 2/Group_2'
import Group_3 from './components/content section/group 3/Group_3'
import Group_4 from './components/group 4/Group_4'
import Group_5 from './components/group 5/Group_5'
import Group_6 from './components/group 6/Group_6'
import Group_7 from './components/group 7/Group_7'
import Group_8 from './components/group 8/Group_8'
import Group_9 from './components/group 9/Group_9'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Group_1/>
      <div className='border-outline'>
        <div className='border-red'>
        </div>
      </div>
      <Group_2/>
      <Group_3/>
      <Group_4/>
      <Group_5/>
      <Group_6/>
      <Group_7/>
      <Group_8/>
      <div style={{marginLeft:"470px",marginTop:"-90px"}} className='border-outline'>
        <div className='border-red'>
        </div>
      </div>
      <Group_9/>
      <Footer/>
    </>

  )
}

export default App
