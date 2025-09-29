import type { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
