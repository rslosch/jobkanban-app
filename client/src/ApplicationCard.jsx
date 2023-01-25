import React from 'react'


function ApplicationCard({id, jobTitle, company, color}) {
    let bgColor = `bg-[${color}]`

  return (
    <div 
        key={id} 
        style={{backgroundColor: color}}
        className={`flex flex-shrink-0 justify-between rounded-md h-24 w-72 ${bgColor} border-gray-300 border my-1 mx-2 p-3`}
    >
        <div className='flex justify-start'>
            <div className='text-sm w-16'>Logo Here</div>
            <div className='flex flex-col flex-nowrap'>
                <p className='text-md text-black'>{jobTitle}</p>
                <p className='text-gray-600 text-sm'>{company}</p>
            </div>
        </div>
    </div>
  )
}

export default ApplicationCard