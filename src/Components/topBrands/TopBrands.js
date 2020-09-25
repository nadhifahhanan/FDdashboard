import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Nivea from '../../Static/image/nivea.png';
import Ordinary from '../../Static/image/ordinary.png';
import TBS from '../../Static/image/bodyshop.png';
import SKII from '../../Static/image/sk2.png';
import Maybelline from '../../Static/image/maybelline.png';
import Innisfree from '../../Static/image/innisfree.png';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    container: {
        padding: '0 8rem',
        marginBottom: 64,
        marginTop: 24
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
    }
}));

export default function TopBrands() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h6" className={classes.bold}>
                    Top Brands
                </Typography>
                <div className={classes.secondLine}>
                    <Typography variant='subtitle1' color="textSecondary">
                        We all know and love
                    </Typography>
                    <Button
                        color="secondary"
                        className={classes.button}
                    >
                        See more  >
                    </Button>
                </div>
            </div>
            <div className={classes.brands}>
                <img
                    src={Nivea}
                    height='40px' />
                <img
                    src={Ordinary}
                    height='40px' />
                <img
                    src={TBS}
                    height='40px' />
                <img
                    src={SKII}
                    height='40px' />
                <img
                    src={Maybelline}
                    height='40px' />
                <img
                    src={Innisfree}
                    height='40px' />
            </div>
            <div className={classes.header}>
                <Typography variant="h6" className={classes.bold}>
                    Female Daily - Find everything you want to know about beuty on Female Daily
                </Typography>
                <Typography variant='subtitle1'  style={{lineHeight: '1.25', marginTop:'4px'}}>
                    Product Reviews, Tips and Tricks, Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything!
                    We are here to be your friendly solution to all things beauty, inside and out!
                </Typography>

            </div>
        </div>
    );
}
