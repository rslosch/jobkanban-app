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

        setIsLoading(false)
    }, [])

    const getLists = () => {
        setIsLoading(true)
        fetch('/lists')
        .then(res => res.json())
        .then(data => {
            setLists(data)
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

    const addApplication = (form, id) => {
        fetch(`/lists/${id}/applications`, {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                company: form.company,
                job_title: form.job_title,
                description: form.description,
                list_id: form.list_id,
                bg_color: form.bg_color,
            })
        })
        .then(res => res.json())
        .then(data => {
            const newLists = lists.map(list => {
                if (list.id === data.list_id) {
                  return {
                    ...list,
                    applications: [...list.applications, data]
                  };
                }
                return list;
            })
            setLists(newLists)
        })
    }

    const deleteApplication = (listId,id) => {
            fetch(`/lists/${listId}/applications/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type' : 'application/json' }
            })
            .then(() => {
                const newLists = lists.map(list => {
                    if (list.id === listId) {
                      return {
                        ...list,
                        applications: list.applications.filter(app => app.id !== id)
                      };
                    }
                    return list;
                })
                setLists(newLists)
            })            
    }

    return (
        <GlobalContext.Provider value = {{applications, lists, setLists, addList, isLoading, setIsLoading,updateList, deleteList, addApplication, deleteApplication}} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalProvider}
