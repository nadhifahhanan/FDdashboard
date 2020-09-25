import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '2rem 8rem',
        height: 'fit-content',
    },
    header: {
        margin: '0.5rem',
    },
    bold: {
        fontWeight: 'bold'
    },
    videoContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    secondLine: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    bigVid: {
        height: 'fit-content'
    },
    smallVid: {
        display: 'block',
        marginTop: '-13px'
    },
    vidItem: {
        height: 'fit-content',
        margin: 16
    }
}));

export default function LatestVideos() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Typography variant="h6" className={classes.bold}>
                    Latest Videos
                </Typography>

                <div className={classes.secondLine}>
                    <Typography variant='subtitle1' color="textSecondary">
                        Watch and learn, ladies
                    </Typography>
                    <Button
                        color="secondary"
                        className={classes.button}
                    >
                        See more  >
                    </Button>
                </div>
            </div>
            <div className={classes.videoContainer}>
                <div className={classes.bigVid}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=6LUdS0VFOJc"
                        className='react-player'
                        width='650px'
                        height='420px'
                    />
                </div>
                <div className={classes.smallVid}>
                    <div className={classes.vidItem}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=tl-tkTzMoOM"
                            className='react-player'
                            width='350px'
                            height='200px'
                        />
                    </div>
                    <div className={classes.vidItem}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=FvbNZd-IxK4"
                            className='react-player'
                            width='350px'
                            height='200px'
                        />
                    </div>


                </div>

            </div>

        </div>
    );
}
