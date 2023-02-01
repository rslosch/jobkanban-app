import React from 'react'

import logo from './imgs/blank-profile-picture.png'


function ApplicationCard({id, jobTitle, company, color}) {


  return (
    <div 
        key={id} 
        style={{backgroundColor: color}}
        className='flex flex-shrink-0 justify-between rounded-md h-24 w-72 border-grey-2 border my-1 mx-2 p-3'
    >
        <div className='flex justify-start items-stretch gap-2'>
            <div className='block h-8 w-8 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover' src={logo} alt="Company logo"/>
            </div>
            <div className='flex flex-col'>
                <p className='text-md text-gray-200 truncate'>{jobTitle}</p>
                <p className='text-gray-100 text-xs'>{company}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ApplicationCard