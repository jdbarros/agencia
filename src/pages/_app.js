import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'typeface-dm-sans';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Aos.init({ duration: 1500 });
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}
