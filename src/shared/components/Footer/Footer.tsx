import React from 'react';
import styles from './Footer.module.css';
import SimpleVerticalNav from 'src/shared/components/SimpleVerticalNav/SimpleVerticalNav';
import Link from 'next/link';
import { Facebook, Twitter, Youtube, Instagram } from 'react-bootstrap-icons';

type FooterProps = {
  
};

const Footer = (props: FooterProps) => {
  return (
    <div className={styles.container}>
      <div className='container'>
        <div className={styles.instantionContainer}>
          <div className={styles.instantionLeft}>
            <img className={styles.imageJSC} src='/images/jakarta-smart-city.png' />
          </div>
          <div className={styles.instantionRight}>
            <img className={styles.imageDKI} src='/images/pemprov-dki.png' />
            <img className={styles.imageColaboration} src='/images/jkt-colaboration.png' />
          </div>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuItem}>
            <h3 className={styles.menuTitle}>{`Perusahaan`}</h3>
            <SimpleVerticalNav
              menus={[
                { label: 'Profile', link: '/' },
                { label: 'Blog', link: '/' },
                { label: 'Product', link: '/' },
                { label: 'Kegiatan', link: '/' },
                { label: 'Persona', link: '/' },
              ]}
            />
          </div>
          <div className={styles.menuItem}>
            <h3 className={styles.menuTitle}>{`Hubungi Kami`}</h3>
            <SimpleVerticalNav
              menus={[
                { label: 'FAQ', link: '/' },
                { label: 'Kontak', link: '/' },
              ]}
            />
          </div>
          <div className={styles.menuItem}>
            <h3 className={styles.menuTitle}>{`Kolaborasi`}</h3>
            <SimpleVerticalNav
              menus={[
                { label: '+Jakarta', link: '/' },
                { label: 'Kolaborator', link: '/' },
              ]}
            />
          </div>
          <div className={styles.menuSosmed}>
            <h3 className={styles.menuTitle}>{`Temukan kami di sosial media`}</h3>
            <div className={styles.iconSet}>
              <Link href='/'><a><Instagram /></a></Link>
              <Link href='/'><a><Youtube /></a></Link>
              <Link href='/'><a><Facebook /></a></Link>
              <Link href='/'><a><Twitter /></a></Link>
            </div>
            <h3 className={styles.menuTitle}>{`Temukan kami di sosial media`}</h3>
            <div className={styles.storeWrapper}>
              <Link href='/'>
                <a>
                  <img src={'/images/google-play.png'} className={styles.image} />
                </a>
              </Link>
              <Link href='/'>
                <a>
                  <img src={'/images/app-store.png'} className={styles.image} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
