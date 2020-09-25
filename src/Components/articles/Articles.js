import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArticleCard from './cards/ArticleCard.js';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    container: {
        padding: '2rem 8rem',
    },
    header: {
        margin: '0.5rem',
    },
    bold: {
        fontWeight: 'bold'
    },
    prodCards: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    secondLine: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

export default function Articles() {
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
                articles: data['latest articles']
            }));
    });

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h6" className={classes.bold}>
                    Latest Articles
                </Typography>
                <div className={classes.secondLine}>
                    <Typography variant='subtitle1' color="textSecondary">
                        So you can make better purchase dicision
                    </Typography>
                    <Button
                        color="secondary"
                        className={classes.button}
                    >
                        See more  >
                    </Button>
                </div>
            </div>
            <div className={classes.prodCards}>
                {data.articles.map((cardItem) => {
                    return <ArticleCard
                        articles={cardItem} />
                })}
            </div>
        </div>
    );
}
