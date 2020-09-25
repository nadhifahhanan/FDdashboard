import React from 'react';
import Navbar from './navbar/Navbar.js';
import RegularAds from './ads/RegularAds.js';
import TopAds from './ads/TopAds.js';
import BottomAds from './ads/BottomAds.js';
import EditorChoice from './editorSection/Choice.js';
import CampaignBanner from './campaign/Campaign.js';
import Articles from './articles/Articles.js';
import Groups from './groupsSection/Groups.js';
import Videos from './videos/LatestVideos.js';
import Trendings from './trending/Trendings.js';
import TopBrands from './topBrands/TopBrands.js';
import LatestReview from './reviews/LatestReviews.js';
import Footer from './footer/Footer.js';

export default function Navigations() {
    return(
        <div>
            <Navbar/> 
            <TopAds/>
            <RegularAds/>
            <EditorChoice/>
            <CampaignBanner/>
            <RegularAds/>
            <Articles/>
            <LatestReview/>
            <Groups/>
            <Videos/>
            <Trendings/>
            <TopBrands/>
            <Footer/>
            <BottomAds/>
        </div>
    );
}