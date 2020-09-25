import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProductCard from './cards/ProductCard.js';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    container: {
        // padding: theme.spacing(2),
        padding: '1rem 8rem',
        margin: '32px 0'
    },
    header: {
        margin: '0.5rem',
    },
    bold: {
        fontWeight: 'bold'
    },
    prodCards: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function Choice() {
    const classes = useStyles();
    const [data, setData] = useState({
        editor: [],
        articles: [],
        reviews: [],
    });

    useEffect(() => {
        // Update the document title using the browser API
        const apiUrl = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData({
                editor: data['editor\'s choice'],
                articles:data['latest articles']
            }));
    });

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h6" className={classes.bold}>
                    Editor's Choice
            </Typography>
                <Typography variant='subtitle1' color="textSecondary">
                    Curated with love
            </Typography>
            </div>
            <div className={classes.prodCards}>
                {data.editor.map((cardItem) => {
                    return <ProductCard
                        choice={cardItem} />
                })}
            </div>
        </div>
    );
}
