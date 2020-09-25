import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Bar from '../../../Static/image/cardbar.png'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 210,
        padding: '1rem 1rem',
        boxShadow: 'none',
        border: '1px solid #c9c9c9',
        borderRadius: 12,
        textAlign: 'center'

    },
    bold: {
        fontWeight: 'bold',
    },
    typography: {
        lineHeight: 1.25,
    },
    cards: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    large: {
        width: 160,
        height: 160,
    },
    img: {
        width: 150,
    },
    avatar: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardbar: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: 24
    }

}));

export default function GroupCards() {
    const classes = useStyles();

    return (
        <div className={classes.cards}>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={classes.avatar}>
                        <Avatar alt="Avatar" src="https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_hydration_seekers.png" className={classes.large} />
                    </div>
                    <CardContent className={classes.contents}>
                        <Typography variant="h6" className={classes.bold} >
                            Embrace the Curl
                        </Typography>
                        <div className={classes.cardbar}>
                            <img src={Bar} alt="menubar" className={classes.img} />
                        </div>
                        <Typography variant="body2"  component="p" style={{lineHeight: "1.25"}}>
                            May our curls pop and never stop!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={classes.avatar}>
                        <Avatar alt="Avatar" src="https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_embrace_the_curl.png" className={classes.large} />
                    </div>
                    <CardContent className={classes.contents}>
                        <Typography variant="h6" className={classes.bold} >
                            Embrace the Curl
                        </Typography>
                        <div className={classes.cardbar}>
                            <img src={Bar} alt="menubar" className={classes.img} />
                        </div>
                        <Typography variant="body2" component="p" style={{lineHeight: "1.25"}}>
                            May our curls pop and never stop!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={classes.avatar}>
                        <Avatar alt="Avatar" src="https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_combo.png" className={classes.large} />
                    </div>
                    <CardContent className={classes.contents}>
                        <Typography variant="h6" className={classes.bold} >
                            Embrace the Curl
                        </Typography>
                        <div className={classes.cardbar}>
                            <img src={Bar} alt="menubar" className={classes.img} />
                        </div>
                        <Typography variant="body2" component="p" style={{lineHeight: "1.25"}}>
                            May our curls pop and never stop!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={classes.avatar}>
                        <Avatar alt="Avatar" src="https://static.femaledaily.com/dyn/230/fdn-talk/groups/image/fdn_comm_mens_grooming.png" className={classes.large} />
                    </div>
                    <CardContent className={classes.contents}>
                        <Typography variant="h6" className={classes.bold} >
                            Embrace the Curl
                        </Typography>
                        <div className={classes.cardbar}>
                            <img src={Bar} alt="menubar" className={classes.img} />
                        </div>
                        <Typography variant="body2" component="p" style={{lineHeight: "1.25"}}>
                            May our curls pop and never stop!
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
