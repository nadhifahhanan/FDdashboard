import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../../Static/navbar.css';
import FDLogo from '../../Static/image/FD-Logo-Pink.png';
import AppStore from '../../Static/image/appstore.png';
import Playstore from '../../Static/image/google-play.png';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    appbar: {
        minHeight: '48px',
        maxHeight: '52px',
        borderTop: '1px solid #DFE3E8',
        overflow: 'hidden',
    },
    optionList: {
        listStyle: 'none',
        padding: 0,
        fontWeight: 'bold'
    },
    itemLink: {
        textDecoration: 'none',
        color: '#000',
    },

    logo: {
        height: '30px',
        overflow: 'hidden',
    },
    downloadapp: {
        display: 'inline-flex',
        alignItems: 'center'

    },
    footer: {
        display: 'flex',
        padding: '0 7rem',
        margin: '16px 0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTop: '1px solid #DFE3E8',

    },
    leftContainer: {
        width: 600,
    },
    options: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    socmedList: {
        listStyle: 'none',
        display: 'flex',
        flexFlow: 'row',
        padding: '1.5rem 0',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
      },
}));


export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.footer} elevation={0}>
                <div className={classes.leftContainer}>
                    <div className={classes.options}>
                        <div>
                            <ul className={classes.optionList}>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>About Us</li></a>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>Feedback</li></a>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>Contact</li></a>
                            </ul>
                        </div>
                        <div >
                            <ul className={classes.optionList}>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>Terms &amp; Conditions</li></a>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>Privacy Policy</li></a>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>Help</li></a>
                            </ul>
                        </div >
                        <div>
                            <ul className={classes.optionList}>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>Awards</li></a>
                                <a href='' style={{ textDecoration: 'none', color: '#000', }}><li style={{ margin: '12px 0' }}>Newsletter</li></a>
                            </ul>
                        </div>
                    </div>
                    <div style={{ margin: '16px 0' }}>
                        <img src={FDLogo} className={classes.logo} />
                        <Typography variant='body2'>
                            Copyright © 2015 - 2020 Female Daily Network ∙ All the rights reserve
                        </Typography>

                    </div>
                </div>
                <div>
                    <div>
                        <Typography style={{ fontWeight: 'bold', margin: '12px 0 8px 0' }}>
                            Download our mobile apps
                        </Typography>
                        <div className={classes.downloadapp}>
                            <a href="https://itunes.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id&amp;mt=8">
                                <img src={AppStore}
                                    height='35' />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.fdbr.android&amp;hl=en_GB">
                                <img src={Playstore}
                                    height='50' />
                            </a>
                        </div>
                    </div>
                    <ul className={classes.socmedList}>
                        <li>
                            <a href="https://www.facebook.com/FemaleDailyNetwork/">
                                <Avatar src="https://www.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" className={classes.small}  />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/femaledaily">
                                <Avatar src="https://tourbanyuwangi.com/wp-content/uploads/2018/05/twitter-round-logo-png-transparent-background-7.png" className={classes.small}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/femaledailynetwork/">
                                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png" className={classes.small} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/FemaleDailyNetwork">
                                <Avatar src="https://www.pngitem.com/pimgs/m/11-114643_youtube-icon-icon-youtube-logo-png-transparent-png.png" className={classes.small} />
                            </a>
                        </li>
                    </ul>
                </div>


            </AppBar>

        </div>
    );
}
