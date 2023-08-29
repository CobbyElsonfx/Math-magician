const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <a href="./">
        M
        {' '}
        <span className="symb">=+^</span>
      </a>
    </div>
    <div className="links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/calculator">Calculator</a></li>
        <li><a href="/quote">Quote</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
