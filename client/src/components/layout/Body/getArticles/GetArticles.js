import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


export default function MediaCard({ article }) {
    return (
        <div className='main'>
            <Link to={`/Article?id=${article.id}`}>
                <Card sx={{ maxWidth: 250, margin: '90px', float: 'left', display: 'inline' }}>
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
                        <Typography variant="body2" color="text.secondary">
                            {article.price}$
                        </Typography>
                    </CardContent>
                    <CardActions>
                        quantity: {article.quantity}
                    </CardActions>
                </Card>
            </Link>
        </div >
    );
}

