import React, { useState, useEffect } from 'react'
import { getResponse } from '../API/apiCall'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'
import './Blog.css'
import PostDisplay from './PostDisplay'

function Blog() {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [apidata, setapidata] = useState('')
    const [noOfPosts, setNoOfPosts] = useState(0)
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const data = await getResponse()
        setNoOfPosts(data.data.blogs.length)
        setapidata(data)
    }

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {apidata.data && (
                    <div className='container'>
                          {apidata.data.blogs.slice(indexOfFirstPost, indexOfLastPost).map((xtitle, index)=>{
                            return(
                            <div className='blog-items' key={index}>
                                <div className='date'>{xtitle.date}</div>

                                <Link to={`/blogs/${index}/${xtitle.title}`}>
                                    <div className='title-div'>{xtitle.title}</div>
                                </Link>
                                
                                <div className='description-div'>{xtitle.post_description}</div>
                            </div>
                            )
                        })
                    }
                    </div>
                )}
                 
            </div>
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={noOfPosts}
            paginate={paginate} />

        </div>
    )
}

export default Blog
