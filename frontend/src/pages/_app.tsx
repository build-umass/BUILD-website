import type { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.pathname === '/admin';

  return (
    <SessionProvider session={session}>
      {isAdminPage ? (
        <Component {...pageProps} />
      ) : (
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </SessionProvider>
  );
}
