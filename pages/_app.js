import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/core';

import Layout from '../components/Layout';
import { GlobalStyle } from '../styles/global';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';

class MyApp extends App {
  // static async getInitialProps(appContext) {
  //   const { ctx } = appContext;
  //   if (ctx.isServer) {
  //     // TODO: axios header setup
  //   }
  //   const appProps = await App.getInitialProps(appContext);
  //   return { ...appProps };
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Code|Noto+Sans+KR&display=swap&subset=korean"
            rel="stylesheet"
          />
        </Head>
        <Global styles={GlobalStyle} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
