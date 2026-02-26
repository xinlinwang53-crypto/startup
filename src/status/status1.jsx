import React from 'react';
import './status.css';

export function Status() {
  return (
   <main className="main-theme grid-sepe">
    <section className="left">
      <div>
        <img className="avatar" alt="A nice photo" src="/avatar.JPG" />
      </div>
      <div className="tag">

        <button className="tag-item">Open to talk</button>
        <button className="tag-item">In className</button>
        <button className="tag-item">Studying</button>
        <button className="tag-item">Having breakfast</button>
        <button className="tag-item">Having lunch</button>
        <button className="tag-item">Having dinner</button>
        <button className="tag-item">Cooking</button>
        <button className="tag-item">Walking to className</button>
        <button className="tag-item">Office hour</button>
        <button className="tag-item">Work</button>
        <button className="tag-item">In Wilkinson</button>
        <button className="tag-item">In HBLL</button>
        <button className="tag-item">In TMCB</button>
        <button className="tag-item">Coding</button>
        <button className="tag-item">Debugging</button>
        <button className="tag-item">Do not disturb</button>


      </div>
    </section>
    <section className="right">
      <table className="table table-striped-columns">
        <thead className="toptable">
          <tr>
            <th>Friend</th>
            <th>Name</th>
            <th>Current Status</th>
            <th>Present</th>
            <th>Last present time</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr>
            <td>1</td>
            <td>JUlia</td>
            <td>Open to talk</td>
            <td>Y</td>
            <td>22:00/2/3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Annie</td>
            <td>Do not disturb</td>
            <td>Y</td>
            <td>22:00/2/3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Annie</td>
            <td>Do not disturb</td>
            <td>Y</td>
            <td>22:00/2/3</td> 
          </tr>
        </tbody>
      </table>
    

    </section>



  </main>

  );
}