import '@styles/base.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HelperProvider } from '@contexts/Helper';
import { enquireScreen } from 'enquire-js';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

const App = ({ Component, pageProps }) => {
  // const { mobileLayout } = helperContext();
  const router = useRouter();

  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    enquireScreen((b) => {
      setIsMobile(!!b);
      // mobileLayout(!!b);
      localStorage.setItem('isMobile', !!b);
    });

    if (!localStorage.getItem('heavyrotation')) router.push('/auth');
  }, []);

  return (
    <HelperProvider>
      <Component {...pageProps} isMobile={isMobile} />
    </HelperProvider>
  );
};

export default App;
