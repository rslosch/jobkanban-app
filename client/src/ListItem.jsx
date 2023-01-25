import React, { useState, useRef, useContext } from 'react'
import { GlobalContext } from './context/globalState'
import ApplicationCard from './ApplicationCard'
import EditListForm from './EditListForm'
import { WishlistIcon, AppliedIcon, InterviewIcon, EllipsesHorizontalIcon, OfferIcon, RejectedIcon } from './icons'

function ListItem({ list, handleClick, active }) {

    const [name, setName] = useState(list.name)

    const { updateList, deleteList } = useContext(GlobalContext)

    const inputNameRef = useRef(null)

    function handleNameClick(e){
        inputNameRef.current.focus()
        handleClick(null)
    }

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        updateList(name, list.id)
    }

    function handleDelete(){
        deleteList(list.id)
    }

    const chooseDisplayIcon = (name) => {
        switch (name.toLowerCase()){
            case 'wishlist':
                return <WishlistIcon />
            case 'applied':
                return <AppliedIcon />
            case 'interview':
                return <InterviewIcon />
            case 'offer':
                return <OfferIcon />
            case 'rejected':
                return <RejectedIcon />
            default:
                return null;
        }
    }

    const apps = (list.applications.map(app => {
        return(
            <ApplicationCard key={app.id} id={app.id} company={app.company} jobTitle={app.job_title} color={app.bg_color}/>
        )
    }))

    return (
        <>
            <div className="flex flex-shrink-0 flex-grow-0 p-6 relative"> 
                <div className=''>
                    {chooseDisplayIcon(list.name)}
                </div>
                <div className="flex flex-col flex-nowrap">
                    <div className='rounded-lg text-lg text-center w-52'> 
                        <form onSubmit={handleSubmit}>
                            <input  
                                ref={inputNameRef}
                                type="text" 
                                value={name}
                                onChange={e => handleChange(e)}
                                onBlur={handleSubmit}
                                className="text-center bg-slate-50  hover:bg-slate-300"
                            />
                            <input className='hidden' type="submit" />
                        </form>
                    </div>
                    <div className='text-sm text-center'>{`${list.applications.length} ${list.applications.length === 1 ? 'JOB': 'JOBS' }`}</div>
                { active && 
                    <EditListForm 
                        handleNameClick={handleNameClick}
                        handleDelete={handleDelete}
                    /> 
                }
                </div>
                <div className=''>
                    <button onClick={() => handleClick(list.id)}>
                        <EllipsesHorizontalIcon />
                    </button>
                </div>
    
            </div>
            <button className='bg-white w-64 h-8 rounded-sm shadow-lg ring ring-slate-300'> Add Application</button>
    
            <div className="flex flex-col items-center justify-start mt-2 p-2 h-full w-full overflow-scroll">
                {apps}
            </div>
        </>
    )
  
  
}

export default ListItem