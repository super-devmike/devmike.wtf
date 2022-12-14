import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../src/container/app-container/theme';
import AppWrapper from '../src/components/app-components/app';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/apollo';
export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Head>
            <title>Super Devmike - writing softwares like a g-o-d!</title>
            <link href='/favicon.ico' rel='icon' />
            <meta
              content='minimum-scale=1, initial-scale=1, width=device-width'
              name='viewport'
            />
            <meta
              name='description'
              content='Super Devmike - a full stack web and application developer from Abuja, Nigeria.'
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppWrapper>
              <Component {...pageProps} />
            </AppWrapper>
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </React.Fragment>
  );
}
