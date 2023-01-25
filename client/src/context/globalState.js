import React, { useState, useEffect } from 'react'

const GlobalContext = React.createContext()

function GlobalProvider({children}){
    // const [loggedIn, setLoggedIn] = useState(false)

    const [lists, setLists] = useState([])
    const [applications, setApplications] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
    
        setIsLoading(true)

        getLists()

        fetch('/applications')
        .then(res => res.json())
        .then(data => {
            setApplications(data)
            setIsLoading(false)
        })
    }, [])

    // console.log("lists", lists)
    // console.log("applications", applications)

    const getLists = () => {
        setIsLoading(true)
        fetch('/lists')
        .then(res => res.json())
        .then(data => {
            setLists(data)
            setIsLoading(false)
        })
        
    }

    const addList = (form) => {
        setIsLoading(true)
        fetch('/lists', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                name: form
            })
        })
        .then(res => res.json())
        .then(data => {
            setLists([...lists, data])
            getLists()
            setIsLoading(false)
        })
        
    }

    const updateList = (form, id) => {
        fetch(`/lists/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                name: form
            })
        })
        .then(res => res.json())
        .then(data => {
            const updatedLists = lists.map(list => list.id === data.id? data : list)
            setLists(updatedLists) 
        })
    }
    const deleteList = (id) => {
        fetch(`/lists/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' },
        })
        .then(() => {
            const updatedLists = lists.filter(list => list.id !== id)
            setLists(updatedLists)
        })
    }

    return (
        <GlobalContext.Provider value = {{applications, lists, addList, isLoading, updateList, deleteList}} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalProvider}
