import React, { useState, useEffect } from 'react'

const GlobalContext = React.createContext()

function GlobalProvider({children}){
    // const [loggedIn, setLoggedIn] = useState(false)

    const [lists, setLists] = useState([])
    const [applications, setApplications] = useState([])

    useEffect(() => {
      getLists()
    }, [])

    useEffect(() => {
        fetch('/applications')
        .then(res => res.json())
        .then(data => setApplications(data))
    },[])

    console.log("lists", lists)
    console.log("applications", applications)

    const getLists = () => {
        fetch('/lists')
        .then(res => res.json())
        .then(data => {
            setLists(data)
        })
    }

    const addList = (form) => {
        fetch('/lists', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => {
            setLists([...lists, data])
            getLists()
        })
    }

    return (
        <GlobalContext.Provider value = {{applications, lists, addList}} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, GlobalProvider}
