import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GroupCards from './cards/GroupCards.js';
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

export default function Groups() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h6" className={classes.bold}>
                    Popular Groups
                </Typography>
                <div className={classes.secondLine}>
                    <Typography variant='subtitle1' color="textSecondary">
                        Where the beauty TALK are
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
               <GroupCards/>
            </div>
        </div>
    );
}
