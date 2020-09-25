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
        width: 274,
        padding: '1rem',
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
        flexDirection: 'column',
        position: 'absolute',
        marginTop: '-24px'
    },
    userProfile: {
        boxShadow: 'none',
    },
    userDetail: {
        textAlign: 'center'
    },
    media: {
        height: '70px',
        width: '70px',
        backgroundSize: 'contain',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: 8,
    },
    cards: {
        position: 'relative',
        margin: '0 8px',
        height: 360
    },
    productIdentity: {
        display: 'flex',
        borderBottom: '1px solid #c9c9c9',
        padding: '8px 0'
    }

}));
const StyledRating = withStyles({
    iconFilled: {
        color: '#d7244e',
    },
})(Rating);

export default function ReviewCards(props) {
    const classes = useStyles();

    return (
        <div className={classes.cards}>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={classes.productIdentity}>

                        <CardMedia
                            className={classes.media}
                            image={props.review.product.image}
                            title="Contemplative Reptile"
                        />

                        <div style={{ margin: '0 8px' }}>
                            <Typography variant="subtitle1" className={classes.bold} >
                                {props.review.product.name}
                            </Typography>
                            <Typography variant="subtitle1" className={classes.typography}>
                                {props.review.product.desc}
                            </Typography>
                        </div>
                    </div>

                    <CardContent style={{ padding: '8px 0' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <StyledRating name="read-only"
                                value={props.review.star}
                                readOnly
                                style={{ fontSize: '1rem' }}
                            />
                            <Typography variant="caption" color="textSecondary" className={classes.bold} component="p">
                                2 hours
                            </Typography>
                        </div>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.review.comment}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.userProfile}>
                <CardActionArea className={classes.user}>
                    <Avatar alt="Avatar" src="//static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg" className={classes.large} />
                    <div className={classes.userDetail}>
                        <Typography variant="subtitle1" className={classes.bold} style={{ lineHeight: "1" }} >
                            {props.review.user}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" component="p">
                            {props.review.user}
                        </Typography>
                    </div>
                </CardActionArea>
            </Card>
        </div>

    );
}
