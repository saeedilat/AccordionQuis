import React, { useState } from 'react'
import Question from './components/Question'
import data from './data'
export default function App() {
 const [infos,setInfos]=useState(data)


  return (
    <div style={{ backgroundColor: '#2a002d', width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        width: '65%',
        // height: '70%',
        backgroundColor: '#fff',
        display: 'flex',
        paddingTop: '20px'

      }}>
        <div className='header' style={{
          width: '30%',
          marginLeft: '25px'
        }}><h2>
            Question And Answers About Login
          </h2>
        </div>
        <div style={{ width: '70%', display: 'flex', flexDirection: 'column', marginRight: '15px', alignItems: 'center', justifyContent: 'space-evenly' }}>
{infos.map(ques=>(
<Question key={ques.id} {...ques} />
))}
          
        </div>

      </div>
    </div>
  )
}

