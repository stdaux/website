import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';

export default class MyDocument extends Document {
    render() {

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="google-translate-customization" content="95a31ce28e08eaf2-a31ff49177f3ed6f-g9553d70b9ef10300-15" />
                    <meta name="google-site-verification" content="xx82D6cZ40Hvf-TT9jkhfsVi11yIeShPcK0zcc7m7ak" />
                    <link rel="icon" type="image/png" href="/favicon.ico" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <body>
                    <main id="maincontent">
                        <Main />
                    </main>
                    <NextScript />
                </body>
            </Html>
        );
    }
}
