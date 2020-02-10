import React from 'react';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon2x.png" />
                <meta name="description" content="UniFarm" />
                <link rel="apple-touch-icon" href="/favicon2x.png" />
                <title>{"토트넘"}</title>
            </Helmet>
            <div>dd</div>
        </>
    );
};

export default Home;