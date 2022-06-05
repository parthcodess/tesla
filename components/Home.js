import React from 'react'
import styledComponents from 'styled-components'
import Parth from './Parth'
import Parthhh from './Parthhh'

function Home() {
  return (
      <HiIamContainer>

      <Parth
      title="model X"
      description="test"
      backgroundImg="model-x.jpg"  
      />

      <Parth
      title="model Y"
      description="test"
      backgroundImg="model-y.jpg"  
      />
      <Parthhh
      title="model S" 
      description="test" 
      backgroundImg="model-s.jpg"   
       />  

      </HiIamContainer>

  )
}

export default Home
const HiIamContainer=styledComponents.div``