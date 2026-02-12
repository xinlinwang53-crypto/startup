import React from 'react';

export function Main() {
  return (
    <main className="container-fluid text-center main-theme">
    <div>
      <h1><span className="h1-" >Have fun with friends!</span></h1>
      <form method="get" action="status.html">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input className="form-control" type="text" placeholder="your@email.com" />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input className="form-control" type="password" placeholder="password" />
        </div>
        <button type="button" className="btn lg-theme">Login</button>
        <button type="button" className="btn">Create</button>
      </form>
    </div>


  </main>

  );
}