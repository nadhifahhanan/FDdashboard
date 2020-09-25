import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SquareAds from '../ads/SquareAds.js';
import ReviewCard from './cards/ReviewCard.js';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    container: {
        display: 'flex',
        padding: '0 8rem',
        justifyContent: 'space-between',

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
    },
    brands: {
        display: 'flex',
        justifyContent: 'space-around',
        margin: '2rem 0'
    },
    cardReviews: {
        display: 'flex',
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    leftContainers: {
        width: 650,
        height: 'fit-content',
    }
}));

export default function LatestReviews() {
    const classes = useStyles();
    const [data, setData] = useState({
        reviews: [],
    });

    useEffect(() => {
        // Update the document title using the browser API
        const apiUrl = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setData({
                reviews: data['latest review']
            }));
    });
    return (
        <div className={classes.container}>
            <div className={classes.leftContainers}>
                <div className={classes.header}>
                    <Typography variant="h6" className={classes.bold}>
                        LatestReviews
                    </Typography>
                    <div className={classes.secondLine}>
                        <Typography variant='subtitle1' color="textSecondary">
                            So you can make better purchase decisions
                    </Typography>
                        <Button
                            color="secondary"
                            className={classes.button}
                        >
                            See more  >
                    </Button>
                    </div>
                </div>
                <div className={classes.cardReviews}>
                    {data.reviews.map((cardItem) => {
                        return <ReviewCard
                            review={cardItem} />
                    })}
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <SquareAds />
            </div>

        </div>
    );
}
