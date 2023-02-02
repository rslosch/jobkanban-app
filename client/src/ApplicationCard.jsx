import React, { useState, useContext } from 'react'
import { GlobalContext } from './context/globalState'
import { TrashIcon, EllipsesHorizontalIcon } from './icons'

import logo from './imgs/blank-profile-picture.png'


function ApplicationCard({listId, id, jobTitle, company, color}) {

    const { deleteApplication } = useContext(GlobalContext)

    const [isShown, setIsShown] = useState(false)

  return (
    <div 
        key={id} 
        style={{backgroundColor: color}}
        className='flex flex-shrink-0 justify-between rounded-md h-24 w-72 border-grey-2 border my-1 mx-2 p-3'
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
    >
        <div className='flex items-stretch flex-nowrap gap-2'>
            <div className='block h-8 w-8 rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover' src={logo} alt="Company logo"/>
            </div>
            <div className='flex flex-col max-w-[80%]'>
                <p className='font-bold text-xs text-gray-200 truncate'>{jobTitle}</p>
                <p className='text-gray-100 text-xs'>{company}
                </p>
            </div>
            
        </div>
        {/* onClick needs to be arrow function or else passing just "deleteApplication(listId, id)" calls the fn on render (when isShown === true) */}
        {isShown &&
            <div className='text-white'>
                <div 
                    style={{backgroundColor: color}}
                    className='p-1 rounded-md filter brightness-125 hover:border hover:border-grey-1 hover:shadow-xl'
                    onClick= {() => deleteApplication(listId, id)}
                >
                    <TrashIcon />
                </div>
            </div>
        }
    </div>
  )
}

export default ApplicationCard