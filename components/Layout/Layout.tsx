import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import styles from './Layout.module.sass';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      { children }
      <Footer />

      {/* CSS in JS
      <style jsx>{`
        .Layout {
          background-color: #f5f5f5;
        }
      `}
      </style>
      */}
    </div>
  )
}

export default Layout;
