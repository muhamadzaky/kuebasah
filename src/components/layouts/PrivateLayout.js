import { menuList } from '@utils/constant';
import { t } from '@utils/t';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Drawer from './Drawer';
import Footer from './Footer';
import Header from './Header';

const PrivateLayout = ({
  children,
  hasNavbar = true,
  title = 'Kue Basah Bu Eva',
  pathName = null
}) => {
  const router = useRouter();
  const { menu, meta } = t[router.locale];
  const path = pathName ? pathName : router.pathname;

  const [isMobile, setIsMobile] = useState();

  const metaTitle = meta ? meta.title : 'Muhamad Zaky';
  const metaDescription = meta ? meta.content : "Muhamad Zaky's Portfolio!";

  useEffect(() => {
    setIsMobile(localStorage.getItem('isMobile') === 'true' ? true : false);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/assets/logo/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/assets/logo/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        {/* 
        <meta name={metaTitle} content={metaDescription} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://apps-muhamadzaky.vercel.app/" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:creator" content="@zakysteinfeld" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:site_name" content="Muhamad Zaky" />
        <meta property="og:url" content="https://apps-muhamadzaky.vercel.app/" />

        <meta name="application-name" content="Muhamad Zaky" />
        <meta name="description" content={metaDescription} /> */}
      </Head>

      <div className="d-flex">
        <Drawer isMobile={isMobile} menu={menu} menuList={menuList} path={path} />

        <div className="w-100">
          <main>
            {hasNavbar && <Header isMobile={isMobile} />}
            {children}
          </main>

          <Footer isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default PrivateLayout;
