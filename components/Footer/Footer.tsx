// import React from 'react';
import Image from 'next/image'
import styles from './Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <p className={styles['Footer-author']}>
        Made with ❤ by <a className={styles['Footer-author--link']} href="https://github.com/lopez-tomas" target="__blank">Tomás López</a>
      </p>
      <div className={styles['Footer-links']}>
        <a href="https://github.com/lopez-tomas" target="__blank" rel="noopner nofollow" aria-label="Check out my GitHub">
          <Image src='/github.svg' alt='GitHub' width="30" height="30" />
        </a>
        <a href="https://instagram.com/tomas.dev" target="__blank" rel="noopner nofollow" aria-label="Check out my GitHub">
          <Image src='/instagram.svg' alt='Instagram' width="30" height="30" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
