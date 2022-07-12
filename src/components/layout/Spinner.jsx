import React from 'react'
import SpinnerAnim from './assets/spinner.gif'


function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img src={SpinnerAnim} width={180} className='text-center mx-auto' alt='loading'/>
      
    </div>
  )
}

export default Spinner
