import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: '50px',
        width: '970px',
        backgroundColor: '#DADADA',
        border: '1px solid #7d7d7d',
        borderRadius: '0',
        display: 'table-cell',
        verticalAlign: 'middle',
        
    },
    adsContainer: {
        padding: '0.75rem',
        display: 'flex',
        justifyContent: 'center',
    },
    cardContent: {
        lineHeight: '250px',
        display: 'flex',
        justifyContent: 'center',
       
    },
    typograph: {
        lineHeight: '18px',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#7d7d7d',
    },
});

export default function TopAds() {
    const classes = useStyles();

    return (
        <div className={classes.adsContainer}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.typograph}>
                        Top Frame 970x50
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );
}