import React from 'react';
import './about.css';


export function About() {
  return (
    <main className="container-fluid   main-theme">
    <span className="title"> Build a space for friends to have fun together online </span>
    <section className="API">
      <p>3rd party API placeholder (placeholder)</p>
      <ul>
        <li>Google Map API: Displace location of user</li>
        <li>Time API: Display the current time</li>
        <li>Avatar API: Display Image</li>
      </ul>
    </section>
    <aside>
      <img className="img-" alt="A nice photo" src="/library.JPG"  />
    </aside>
  </main>


  );
}