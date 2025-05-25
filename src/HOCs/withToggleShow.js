import React, { useState } from 'react'

export default function withToggleShow(OrginalComponent) {
    
 const NewComponent = (props)=>{
 const [isShow, setIsShow]=useState(false)


  const clickHandler = () => {
        setIsShow(prev => !prev)

    } 
    return (
        <OrginalComponent isShow={isShow}  toggleShowHandler={clickHandler} {...props}/>
    )
 }

 return NewComponent
}
