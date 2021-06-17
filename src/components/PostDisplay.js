import React, { useState, useEffect } from 'react'
import { getResponse } from '../API/apiCall'
import ReactMarkdown from 'react-markdown';
import './PostDisplay.css'
function PostDisplay({ match }) {

    const [pos, setPos] = useState('')
    const [apiData, setApiData] = useState('')
    
    const [blog, setBlog] = useState('')
    useEffect(() => {
        console.log(match.params.postdisplay)
        setPos(match.params.postdisplay)
        fetchItems()
        
    }, [])
    const fetchItems = async() => {
        const data = await getResponse()
        setApiData(data)
        console.log(data)
    }

    return (
        <div className='main-body'>
            <h1>
            {apiData.data && (
                    <div>
                    
                          <h1>{apiData.data.blogs[pos].title}</h1>
                          <p><ReactMarkdown children={apiData.data.blogs[pos].post} /></p>
                    </div>
                )}
            </h1>
        </div>
    )
}

export default PostDisplay
