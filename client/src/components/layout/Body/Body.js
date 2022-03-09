import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './getArticles/GetArticles';
import { Navigate } from "react-router-dom"


const Body = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/articles')
            .then(res => {
                console.log(res)
                setArticles(res.data)
            })
            .catch(
                err => {
                    console.log(err)
                })
    }, [])

    return (
        <div>
            {!localStorage.getItem('isAuthenticated') ? <Navigate to="/Login" /> : ''}
            {articles.map(article => (
                <MediaCard
                    key={article.id}
                    article={article}
                />
            ))}
        </div >
    )
}

export default Body



