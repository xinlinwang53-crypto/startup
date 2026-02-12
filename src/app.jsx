export default function App() {
  return (
    <div className="text-light my-theme">
      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
          <div className="navbar-brand">
            StatusTag<sup>&reg;</sup>
          </div>
          <menu className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="status.html">
                Status
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="space.html">
                Space
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Xinlin Wang</span>
          <a className="text-reset" href="https://github.com/xinlinwang53-crypto/startup.git">
            Source
          </a>
        </div>
      </footer>
    </div>
  );
}