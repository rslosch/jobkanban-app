import React, {useState, useContext} from 'react'
import { GlobalContext } from './context/globalState'

function ApplicationForm({id, name, setAppFlag}) {

    const { addApplication } = useContext(GlobalContext)

    const [form, setForm] = useState({
        company: "",
        job_title: "",
        description: "",
        bg_color:"#4055A8",
        list_id: id
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addApplication(form, id)
        setAppFlag(false)
    }

  return (
    <div onClick={() => setAppFlag(false)}className='w-full h-full bg-primary-5 bg-opacity-80 bg-blend-overlay absolute inset-0 flex justify-center items-center'>
        <div onClick={e => e.stopPropagation()} className='w-96 py-4 border rounded-lg border-white bg-white shadow-lg flex flex-col items-center'>
            <div className='flex justify-center'>
                <h1 className='text-grey-5 tracking-wider mb-2'> ADD JOB TO <strong className='text-primary-4'>{name.toUpperCase()}</strong> {name.endsWith("list") ? null : "LIST"} </h1>
            </div>
           
            <div className='flex flex-col justify-center items-center w-full border-y border-primary-1 '>
                <form onSubmit={handleSubmit} className="flex flex-col w-3/4 mt-2">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="company">
                        Company
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="job_title">
                        Job Title
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        id="job_title"
                        name="job_title"
                        value={form.job_title}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="description">
                        Description
                        </label>
                        <textarea
                        className="shadow appearance-none border rounded h-48 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        />
                    </div>
                    <div className='flex items-end justify-end mb-2'>
                        <input className='hover:bg-primary-3 hover:text-grey-1 rounded-lg py px-4 focus:outline-none focus:shadow-outline' type="submit" value="SUBMIT"/>
                        <button className='hover:text-primary-3 rounded-lg py px-4' onClick={() => setAppFlag(false)}>CLOSE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ApplicationForm