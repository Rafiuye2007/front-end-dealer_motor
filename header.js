import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h1>Dealer Motor XYZ</h1>
      <nav>
        {
            props.categories.map((ctgr) => (
                <link className='p-2 link-secondary' to={'/katergori/' + ctgr}>{ctgr}</link>
            ) )
        }
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/about">Tentang Kami</a></li>
          <li><a href="/contact">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;