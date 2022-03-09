import React, { useEffect, useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './IndividualArticle.css'
import Button from "@material-ui/core/Button";
import axios from "axios";


function IndividualArticle() {

    const [article, setArticles] = useState([]);
    const [store, setStore] = useState([{ store_name: '' }])
    const [selectedStore, setSelectedStore] = useState([''])
    const [selectedQuantity, setSelectedQuantity] = useState(0)


    const location = useLocation();
    // select store handler
    const dropdownChangeHandler = (event) => {
        setSelectedStore(event.target.value);
    };
    // select quantity

    const selectQuantity = (event) => {
        setSelectedQuantity(event.target.value)
    }


    const submitHandler = (e) => {
        e.preventDefault()
        const quantity = article.quantity
        const finalQuantity = quantity - selectedQuantity
        if (finalQuantity >= 0) {
            let searchParams = new URLSearchParams(location.search).get('id')
            axios.put(`http://localhost:4000/articles/${searchParams}`, {
                quantity: finalQuantity
            })
            setArticles(prev => ({ ...prev, quantity: finalQuantity }))
        }
    }

    useEffect(() => {
        let searchParams = new URLSearchParams(location.search).get('id')

        axios.all([
            axios.get(`http://localhost:4000/articles/${searchParams}`),
            axios.get('http://localhost:4000/stores')
        ])
            .then(responseArr => {
                setArticles(responseArr[0].data)
                setStore(responseArr[1].data)
            }).catch(
                err => {
                    console.log(err)
                })

    }, [location.search])

    return (
        <div className='card'>
            {!localStorage.getItem('isAuthenticated') ? <Navigate to="/Login" /> : ''}
            <Card sx={{ maxWidth: 300, margin: '160px', float: 'left', display: 'inline' }}>
                {<CardMedia
                    component="img"
                    height="340"
                    width='200'
                    src={article.image}
                    alt="broken"
                />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {article.article_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontSize='30px' fontWeight='bold'>
                        {article.price}$
                    </Typography>
                </CardContent>
                <CardActions>
                    quantity: {article.quantity}
                </CardActions>
                <form onSubmit={submitHandler}>
                    <select className='shops' defaultValue='selectStore' onChange={dropdownChangeHandler}>
                        {store.map((store) => (
                            <option key={store.id} className="store" value={store.store_name} > {store.store_name}</option>
                        ))}
                    </select>
                    <input className='quantity' value={selectedQuantity} onChange={selectQuantity} type="number" placeholder='choose quantity'>
                    </input>
                    <div className='button'>
                        <Button variant="contained" size="large" type='submit' >buy</Button>
                    </div>
                </form>
            </Card>
        </div >
    )
}

export default IndividualArticle
