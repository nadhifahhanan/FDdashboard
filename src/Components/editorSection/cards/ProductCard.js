import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 190,
        padding: '1.5rem 0',
        boxShadow: 'none',
        border: '1px solid #c9c9c9',
        borderRadius: 12

    },
    media: {
        height: 140,
    },
    bold: {
        fontWeight: 'bold',
    },
    typography: {
        lineHeight: 1.25,
    },
    user: {
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        marginTop: '-48px'
    },
    userProfile: {
        boxShadow: 'none',
    },
    userDetail: {
        marginTop: '-16px'
    },
    media: {
        height: '150px',
        backgroundSize: 'contain',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginTop: 8
    },
    cards: {
        position: 'relative',
        marginTop: 64
    },

}));
const StyledRating = withStyles({
    iconFilled: {
        color: '#d7244e',
    },
})(Rating);

export default function ProductCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.cards}>
            <Card className={classes.userProfile}>
                <CardActionArea className={classes.user}>
                    <Avatar alt="Avatar" src="//static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg" className={classes.large} />
                    <div className={classes.userDetail}>
                        <Typography variant="subtitle1" className={classes.bold} style={{ lineHeight: "1" }} >
                            {props.choice.editor}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" component="p">
                            {props.choice.role}
                        </Typography>
                    </div>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.choice.product.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '12px' }}>
                            <Typography variant="body2" className={classes.bold} component="p">
                                {props.choice.product.rating}
                            </Typography>
                            <StyledRating name="read-only"
                                value={props.choice.product.rating}
                                readOnly
                                style={{ fontSize: '1rem', margin: '0 8px' }}
                            />
                            <Typography variant="body2" className={classes.bold} component="p">
                                (7)
                            </Typography>
                        </div>
                        <Typography variant="subtitle1" className={classes.bold} >
                            {props.choice.product.name}
                        </Typography>
                        <Typography variant="subtitle1" className={classes.typography}>
                            {props.choice.product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Rosy Beige
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    );
}
