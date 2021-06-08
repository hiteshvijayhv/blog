import React, { useState, useEffect } from 'react'
import { getResponse } from '../API/apiCall'

function PostDisplay({ match }) {

    const [pos, setPos] = useState('')
    const [apiData, setApiData] = useState('')
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
        <div>
            <h1>
            {apiData.data && (
                    <div>
                          <h1>{apiData.data.blogs[pos].title}</h1>
                    </div>
                )}
            </h1>
        </div>
    )
}

export default PostDisplay
