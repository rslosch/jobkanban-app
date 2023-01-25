import React from 'react'
import { PencilIcon } from './icons'
import { MoveIcon } from './icons'
import { TrashIcon } from './icons'

function EditListForm({handleNameClick, handleDelete}) {


    return (
        <div className='container'>
            <div className='absolute shadow-xl rounded-lg top-20 bg-white w-56 h-34 border-sm py-2'>
                <div onClick={handleNameClick} className='flex justify-between text-gray-800 py-2 px-4 hover:bg-indigo-500 hover:text-white'>
                    <h1 > Edit List Form</h1>
                    <PencilIcon />
                </div>
                <div className='flex justify-between text-gray-800 py-2 px-4 hover:bg-indigo-500 hover:text-white'>
                    <h1> Move List </h1>
                    <MoveIcon />
                </div>
                <div onClick={handleDelete}className='flex justify-between text-gray-800 py-2 px-4 hover:bg-indigo-500 hover:text-white'>
                    <h1> Delete List </h1>
                    <TrashIcon />
                </div>
            </div>
        </div>
    )
}

export default EditListForm

