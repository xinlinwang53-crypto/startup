import React from 'react';
import './about.css';


export function About(props) {
  const [imageUrl, setImageUrl] = React.useState("");
 
    React.useEffect(() => {
    setImageUrl(`library.JPG`);
    
  }, []);
  return (
    <main className="container-fluid   main-theme">
    <span className="title"> Build a space for friends to have fun together online </span>
    <section className="API">
      <p className='tag'>What We Offer</p>
      <ul>
        <li>Experience the pulse of your social circle. Whether they are grinding in the library or grabbing a coffee, know that you’re never truly alone. Connect instantly without saying a word.</li>
        <li>Join "Spaces" to see a live-feed of who's active and ready to hang out.</li>
        <li>Your status is your story. From deep-focus coding to spontaneous adventures, customize your presence and capture the essence of every moment.</li>
      </ul>
    </section>
    <aside>
      <img className="img-" alt="A nice photo" src={imageUrl}  />
    </aside>
  </main>


  );
}