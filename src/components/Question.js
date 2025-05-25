import React, { useState } from 'react'
// import data from './data'
import data from './../data'
import withToggleShow from '../HOCs/withToggleShow'

 function Question({ id, title, info,isShow,toggleShowHandler }) {
 
    return (
        <div style={{ width: '100%' }} onClick={toggleShowHandler}>


            <div style={{
                boxShadow: '1px 1px 20px black',
                paddingLeft: '7px', marginBottom: '15px',
                cursor: 'pointer',
            }}>
                <div style={{
                    height: '50px',
                    display: 'flex',

                    alignItems: 'center',
                    justifyContent: 'space-between',

                }}>
                    <h6>
                        {title}

                    </h6>
                    <div style={{ marginRight: '15PX', fontSize: '25px', color: '#f163fd' }}>
                        {isShow ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-patch-minus-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-patch-plus-fill" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
                        </svg>}

                    </div>
                </div>
                <div style={{ opacity: 0.8 }}>
                    {isShow ? info : null}
                </div>
            </div>


        </div>
    )
}
export default withToggleShow(Question)