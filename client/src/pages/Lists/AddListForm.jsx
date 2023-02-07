import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/globalState'

function AddListForm({addFormFlag}) {

    const [name, setName] = useState("")

    const { addList } = useContext(GlobalContext)

    function handleSubmit(e){
        e.preventDefault()
        addList(name)
        addFormFlag(false)
    }

// e.stopPropagation() stops onClick occurring in wrapper div
  return (
    <div onClick={() => addFormFlag(false)} className="w-full h-full bg-transparent fixed flex justify-center items-center">
        <div onClick={e => e.stopPropagation()} className='w-96 h-64 border border-white bg-white shadow-lg flex flex-col p-4'>
            <div className='p-2'>
                <h1 className='text-3xl text-center'> Add a New List</h1>
            </div>
            <div className='modalForm flex flex-col flex-nowrap justify-start'>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <label className='block text-gray-700 text-sm font-bold mt-2'>Name of List</label>
                    <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4'
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <div className='flex justify-end'>
                        <input className='px-2 ring mx-4' type="submit"/>
                        <button className='px-2 ring' onClick={() => addFormFlag(false)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddListForm