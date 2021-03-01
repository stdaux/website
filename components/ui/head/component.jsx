import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link'

class AppHead extends PureComponent {
    static propTypes = {
      title: PropTypes.string,
      description: PropTypes.string,
      keywords: PropTypes.string,
      noIndex: PropTypes.bool,
      children: PropTypes.node,
    };
  
    static defaultProps = {
      title:
        'Fermat Components | Standard Auxiliary',
      description:
        'Fermat - Make Sense of Data',
      keywords:
        'Fermat, StdAux',
    };
  
    render() {
      const { title, description, keywords, noIndex, children } = this.props;
  
      return (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content="stdaux" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@fermat" />
          <meta name="twitter:description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          {noIndex && <meta name="robots" content="noindex,follow" />}
          
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5"
          />
          
          <link rel="icon" href="/favicon.ico" />
          {children}
        </Head>
      );
    }
}
  
export default AppHead;
  

