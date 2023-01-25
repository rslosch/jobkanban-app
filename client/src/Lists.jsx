import React, { useContext, useState } from 'react'
import { GlobalContext } from './context/globalState'
import AddListForm from './AddListForm'
import ListItem from './ListItem'
import { AddIcon } from './icons'
import { RotatingLines } from 'react-loader-spinner'



function Lists() {

    const [addFormFlag, setAddFormFlag] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)
    const { lists, isLoading } = useContext(GlobalContext)

    const styles = {divClass:'flex flex-col items-center min-h-screen w-full md:w-1/2 mb-8 border-x border-white'}

    function handleChildClick(id){
        console.log("handleClick id", id)
        console.log("activeIndex before", activeIndex)
    
        if(activeIndex === id){
            setActiveIndex(null)
            
        }
        else if(activeIndex !== id){
            setActiveIndex(id)
        }
    }

    const addList =
        <div className={`${styles.divClass} ${addFormFlag ? "blur-md" : ""}`}>
            <div className="flex flex-shrink-0 flex-grow-0 p-6"> 
                <div className='text-lg text-center rounded-lg p-4 hover:bg-slate-300'> 
                    <button onClick={() => setAddFormFlag(true)} className="flex justify-center gap-4 w-64 h-8 shadow-l"> 
                        <AddIcon />
                        <h1> Add List </h1>
                    </button>
                </div>
            </div>
        </div>

    if(isLoading) {
        return(
            <div className='grid place-items-center h-screen'>
                < RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>
          )
    }
    else {
        const listsList = lists.map(list => {
            return (
                <div key={list.id} className={`${styles.divClass} ${addFormFlag ? "blur-md" : ""}`}>
                    <ListItem
                        list={list}
                        handleClick={handleChildClick}
                        active={list.id===activeIndex}
                    />
                </div>
            )
        })

        return (
            <>
                {listsList}
                {addList}
                { addFormFlag && <AddListForm addFormFlag={setAddFormFlag} />}
            </>
        )
    }
}

export default Lists