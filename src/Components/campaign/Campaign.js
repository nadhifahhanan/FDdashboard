import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Banner from '../../Static/image/campaignBanner.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    bannerContainer: {
        height: 400,
        backgroundSize: 'cover',
        marginTop: 48,
        marginBottom: 48,
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid #db284e'

    },

    media: {
        height: '150px',
        backgroundSize: 'contain'
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
    },
    promote: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 600,
        height: 400,
        alignItems: 'center',
        padding: '0 32px'
    },
    root: {
        padding: '1.5rem',
        boxShadow: 'none',
        width: 140,
        borderRadius: 12,
        border: '1px solid #c9c9c9',
        height: 300,
    },
    show: {
        width: 600,
        height: 400,
        position: 'relative',
    }

}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#d7244e',
    },
})(Rating);

export default function Campaign() {
    const classes = useStyles();

    return (
        <div className={classes.bannerContainer} style={{ backgroundImage: `url(${Banner})` }}>
            <div className={classes.show}>
                <Button href='' variant="contained" color="secondary" style={{position:'absolute' , bottom:'0', right:'0', margin: '24px 0'}}>
                    See My Matches
                </Button>

            </div>
            <div className={classes.promote}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='https://cf.shopee.co.id/file/b2d9fb5a480d01766424be65fa5452fc_tn'
                            title="Juice Beauty"
                        />
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <Typography variant="body2" className={classes.bold} component="p">
                                    4.1
                            </Typography>
                                <StyledRating name="read-only"
                                    value={4}
                                    readOnly
                                    style={{ fontSize: '1rem' }}
                                />
                                <Typography variant="body2" className={classes.bold} component="p">
                                    (7)
                            </Typography>
                            </div>

                            <Typography variant="subtitle1" className={classes.bold} >
                                Juice Beauty
                        </Typography>
                            <Typography variant="subtitle1" className={classes.typography}>
                                Pure Pressed Blush
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Neutral Rose
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-1536875/becca_becca-shimmering-skin-perfector-pressed-highlighter-mini-vanilla-quarts_full05.jpg'
                            title="Becca"
                        />
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <Typography variant="body2" className={classes.bold} component="p">
                                    4.1
                            </Typography>
                                <StyledRating name="read-only"
                                    value={4}
                                    readOnly
                                    style={{ fontSize: '1rem' }}
                                />
                                <Typography variant="body2" className={classes.bold} component="p">
                                    (7)
                            </Typography>
                            </div>

                            <Typography variant="subtitle1" className={classes.bold} >
                                Becca
                        </Typography>
                            <Typography variant="subtitle1" className={classes.typography}>
                                Shimering Highlighter
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Opal
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='https://static-id.lximg.com/images/pictures/26916/closeup_314a8825e0033cbff2b07e56b886fb29cf5db1c0_1549967093_zoom_1_Product_194426_20Dior_20Face_20_20Body_20Foundation_203_20Cool_20Rosy_3488c75ada4ade81b861cd7c4848befc7fe529ef_1529484720.png'
                            title="Dior"
                        />
                        <CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <Typography variant="body2" className={classes.bold} component="p">
                                    4.1
                            </Typography>
                                <StyledRating name="read-only"
                                    value={4}
                                    readOnly
                                    style={{ fontSize: '1rem' }}
                                />
                                <Typography variant="body2" className={classes.bold} component="p">
                                    (7)
                            </Typography>
                            </div>

                            <Typography variant="subtitle1" className={classes.bold} >
                                Dior
                        </Typography>
                            <Typography variant="subtitle1" className={classes.typography}>
                                Dior Backstage Foundation
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                WO 3
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>

    );
}