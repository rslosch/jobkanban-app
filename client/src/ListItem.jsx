import React, { useState, useRef, useContext } from 'react'
import { GlobalContext } from './context/globalState'
import ApplicationCard from './ApplicationCard'
import EditListForm from './EditListForm'
import ApplicationForm from './ApplicationForm'
import { WishlistIcon, AppliedIcon, InterviewIcon, EllipsesHorizontalIcon, OfferIcon, RejectedIcon, AddIcon } from './icons'

function ListItem({ list, handleClick, active }) {

    const [appFlag, setAppFlag] = useState(false)
    const [name, setName] = useState(list.name)

    const { updateList, deleteList } = useContext(GlobalContext)

    const inputNameRef = useRef(null)

    function handleNameClick(e){
        inputNameRef.current.focus()
        handleClick(null)
    }

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        updateList(name, list.id)
    }

    function handleListDelete(){
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
                <div className='text-grey-5'>
                    {chooseDisplayIcon(list.name)}
                </div>
                <div className="flex flex-col flex-nowrap">
                    <div className={`rounded-lg text-lg text-center w-52`}> 
                        <form onSubmit={handleSubmit}>
                            <input  
                                ref={inputNameRef}
                                type="text" 
                                value={name.toUpperCase()}
                                onChange={e => handleNameChange(e)}
                                onBlur={handleSubmit}
                                className="text-grey-5 text-center bg-grey-1 rounded-lg"
                            />
                            <input className='hidden' type="submit" />
                        </form>
                    </div>
                    <div className='text-grey-3 text-sm text-center font-thin'>{`${list.applications.length} ${list.applications.length === 1 ? 'JOB': 'JOBS' }`}</div>
                    { active && 
                    <EditListForm 
                        handleNameClick={handleNameClick}
                        handleDelete={handleListDelete}
                    /> 
                    }
                </div>
                <div className=''>
                    <button className="text-grey-5" onClick={() => handleClick(list.id)}>
                        <EllipsesHorizontalIcon />
                    </button>
                </div>
            </div>
            <button onClick={() => setAppFlag(true)} className='flex justify-center items-center bg-white w-64 h-10 rounded-sm ring-1 text-grey-3 ring-grey-2 hover:ring-primary-2 hover:text-primary-2 hover:shadow-xl'> 
                <AddIcon />
            </button>
            { appFlag && <ApplicationForm id={list.id} name={list.name} setAppFlag={setAppFlag} />}
            <div className="flex flex-col items-center justify-start mt-2 p-2 h-full w-full overflow-scroll">
                {apps}
            </div>
        </>
    )
  
  
}

export default ListItem