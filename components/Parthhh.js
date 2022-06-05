import React from 'react'
import styledComponents from 'styled-components'

function Parthhh({backgroundImg,title,description}) {
  return (
    
    <Wrap bgImage={backgroundImg}>
        <TesTitle>
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
        </TesTitle>
        </Wrap>
  )
}

export default Parthhh
const Wrap=styledComponents.div`
width:100vw;
height:50vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`
const TesTitle=styledComponents.div`
padding-top:1vh;
text-align:center;
`

