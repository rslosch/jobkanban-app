import React, { useState, useRef, useContext } from 'react'
import { GlobalContext } from '../../context/globalState'

import ApplicationCard from '../Applications/ApplicationCard'
import EditListForm from './EditListForm'
import ApplicationForm from '../Applications/ApplicationForm'

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
    DragOverlay,
    DndContext,
    closestCenter,
} from "@dnd-kit/core"
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
    horizontalListSortingStrategy
} from "@dnd-kit/sortable"

import { WishlistIcon, AppliedIcon, InterviewIcon, EllipsesHorizontalIcon, OfferIcon, RejectedIcon, AddIcon } from '../../utils/icons'

function ListItem({ list, handleClick, active, type }) {

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

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: list.id,
        data: {
           type: type
        }
        })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const apps = (list.applications.map(app => {
        return(
            <ApplicationCard key={app.id} type="item" listId={list.id} id={app.id} company={app.company} jobTitle={app.job_title} color={app.bg_color} position={app.position}/>
        )
    }))

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style} 
            className='flex flex-col items-center min-h-screen w-full mb-8 border-x border-white'
        >
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
                <SortableContext
                    items={list.applications}
                    strategy={verticalListSortingStrategy}
                >
                    {apps}
                </SortableContext>
            </div>
        </div>
    )
  
  
}

export default ListItem