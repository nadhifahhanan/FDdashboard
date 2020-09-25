import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 160,
        padding: '1.5rem 0',
        boxShadow: 'none',
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
        display: 'flex',
        justifyContent: 'space-between',
    },

}));
const StyledRating = withStyles({
    iconFilled: {
        color: '#d7244e',
    },
})(Rating);

export default function TrendingProducts(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(4);

    return (
        <div className={classes.cards}>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image='https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-2.jpg?v=1595552721'
                        title="SKINEUTICALS"
                    />
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <Typography variant="body2" className={classes.bold} component="p">
                                4.1
                            </Typography>
                            <StyledRating name="read-only"
                                value={value}
                                readOnly
                                style={{ fontSize: '1rem' }}
                            />
                            <Typography variant="body2" className={classes.bold} component="p">
                                (7)
                            </Typography>
                        </div>
                        <Typography variant="subtitle1" className={classes.bold} >
                            SKINEUTICALS
                        </Typography>
                        <Typography variant="subtitle1" className={classes.typography} >
                            C E Ferulic
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image='https://images-na.ssl-images-amazon.com/images/I/71A3XmXu3PL._SL1500_.jpg'
                        title="Juice Beauty"
                    />
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <Typography variant="body2" className={classes.bold} component="p">
                                4.1
                            </Typography>
                            <StyledRating name="read-only"
                                value={value}
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
                            Pytho-Pigments Flawless Serum
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Rosy Beige
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
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
                                value={value}
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
                                value={value}
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
                                value={value}
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
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image='https://www.sephora.com/productimages/sku/s1925965-main-zoom.jpg?imwidth=300'
                        title="Fenty"
                    />
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <Typography variant="body2" className={classes.bold} component="p">
                                4.1
                            </Typography>
                            <StyledRating name="read-only"
                                value={value}
                                readOnly
                                style={{ fontSize: '1rem' }}
                            />
                            <Typography variant="body2" className={classes.bold} component="p">
                                (7)
                            </Typography>
                        </div>

                        <Typography variant="subtitle1" className={classes.bold} >
                            Fenty Beauty
                        </Typography>
                        <Typography variant="subtitle1" className={classes.typography}>
                            Gloss Bomb
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Fussy
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


        </div>

    );
}
