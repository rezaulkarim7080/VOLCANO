import React from 'react';

import requests from '../utils/requests';
import Main from '../components/Main';
import Row from '../components/Row';



const page = () => {
    return (
        <div >

            <Main />
            <Row rowID='1' title='Upcomming' fetchURL={requests.requestUpcoming} />
            <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
            <Row rowID='4' title='Horror' fetchURL={requests.requestHorror} />
            <Row rowID='5' title='TopRated' fetchURL={requests.requestTopRated} />
            <Row rowID='6' title='Tv-Airing' fetchURL={requests.requestTvairing} />

        </div>
    );
};

export default page;


