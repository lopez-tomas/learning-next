import React from 'react';
import Navbar from '@components/Navbar/Navbar';
import styles from './Layout.module.sass';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='Layout'>
      <Navbar />
      {children}
      <footer className={`${styles['Layout-footer']} ${styles['Layout-color']}`}>
        This is the footer
      </footer>

      {/* CSS in JS */}
      <style jsx>{`
        .Layout {
          background-color: #f5f5f5;
        }
      `}
      </style>
    </div>
  )
}

export default Layout;
