import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: 16,
        boxShadow: 'none',

    },
    media: {
        height: 160,
        borderRadius: 8

    },
    authorProfile: {
        display: 'flex',
        margin: '1rem 0',
        color: '#7d7d7d'
    },
    bold: {
        fontWeight: 'bold'
    },
    cardContent: {
        padding: '1rem 0'
    }
});

export default function ArticleCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.articles.image}
                    title="Contemplative Reptile"
                />
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" className={classes.bold} style={{ lineHeight: "1.25" }}>
                        {props.articles.title}
                    </Typography>
                    <div className={classes.authorProfile} >
                        <Typography gutterBottom variant="body2" className={classes.bold} >
                            {props.articles.author}
                        </Typography>
                        <Typography gutterBottom variant="body2" style={{margin: "0 4px"}} >
                            |
                        </Typography>
                        <Typography gutterBottom variant="body2" >
                            {props.articles.published_at}
                        </Typography>
                    </div>

                </div>
            </CardActionArea>
        </Card>
    );
}
