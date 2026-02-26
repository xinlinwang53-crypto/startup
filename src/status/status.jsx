import React from 'react';
import './status.css';

export function Status(props) {
  const username = props.username || localStorage.getItem('userName') || 'Xinlin';;


  const [mystatus, setmystatus] = React.useState(localStorage.getItem("mystatus") || "Studying");
  const [status, setStatus] = React.useState([])



  React.useEffect(() => {


    const defaultStatus = [
      {
        name: username,
        status: mystatus,
        present: 'Online',
        date: new Date().toLocaleString(),
      },
      {
        name: 'lily@byu.edu',
        status: 'Open to talk',
        present: 'Offline',
        date: '2/24/2026 10:30 AM',
      },
      {
        name: 'jimmy@byu.edu',
        status: 'Coding',
        present: 'Online',
        date: '2/24/2026 11:10 AM',
      },
    ];
    const statusText = localStorage.getItem('status');
    if (statusText) {
      setStatus(JSON.parse(statusText));
    } else {
      setStatus(defaultStatus);
    }
  }, [])

  // Demonstrates rendering an array with React
  const statusRows = [];
  //if (status.length) { store for future
  if (status.length) {
    for (const [i, statu] of status.entries()) {
      statusRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{statu.name.split('@')[0]}</td>
          <td>{statu.status}</td>
          <td>{statu.present}</td>
          <td>{statu.date}</td>
        </tr>
      );
    }
  } else {
    statusRows.push(
      <tr key='0'>
        <td colSpan='5' className="h2-"><h5>Tell your friend to join!</h5></td>
      </tr>
    );
  }




  return (
    <main className="main-theme grid-sepe">
      <section className="left">
        <div>
          <img className="avatar" alt="A nice photo" src="/avatar.JPG" />
        </div>
        <div className="tag">

          <button className="tag-item" onClick={() => {
            setmystatus("Open to talk");
            localStorage.setItem("mystatus", "Open to talk");
          }}>Open to talk</button>

          <button className="tag-item" onClick={() => {
            setmystatus("In class");
            localStorage.setItem("mystatus", "In class");
          }}>In class</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Studying");
            localStorage.setItem("mystatus", "Studying");
          }}>Studying</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Having breakfast");
            localStorage.setItem("mystatus", "Having breakfast");
          }}>Having breakfast</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Having lunch");
            localStorage.setItem("mystatus", "Having lunch");
          }}>Having lunch</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Having dinner");
            localStorage.setItem("mystatus", "Having dinner");
          }}>Having dinner</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Cooking");
            localStorage.setItem("mystatus", "Cooking");
          }}>Cooking</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Walking to class");
            localStorage.setItem("mystatus", "Walking to class");
          }}>Walking to class</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Office hour");
            localStorage.setItem("mystatus", "Office hour");
          }}>Office hour</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Work");
            localStorage.setItem("mystatus", "Work");
          }}>Work</button>

          <button className="tag-item" onClick={() => {
            setmystatus("In Wilkinson");
            localStorage.setItem("mystatus", "In Wilkinson");
          }}>In Wilkinson</button>

          <button className="tag-item" onClick={() => {
            setmystatus("In HBLL");
            localStorage.setItem("mystatus", "In HBLL");
          }}>In HBLL</button>

          <button className="tag-item" onClick={() => {
            setmystatus("In TMCB");
            localStorage.setItem("mystatus", "In TMCB");
          }}>In TMCB</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Coding");
            localStorage.setItem("mystatus", "Coding");
          }}>Coding</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Debugging");
            localStorage.setItem("mystatus", "Debugging");
          }}>Debugging</button>

          <button className="tag-item" onClick={() => {
            setmystatus("Do not disturb");
            localStorage.setItem("mystatus", "Do not disturb");
          }}>Do not disturb</button>

        </div>

      </section>
      <section className="right">
        <table className='table  table-striped-columns'>
          <thead className='toptable'>
            <tr>
              <th>Friend</th>
              <th>Name</th>
              <th>Current Status</th>
              <th>Present</th>
              <th>Last present time</th>
            </tr>
          </thead>
          <tbody id='status'>{statusRows}</tbody>
        </table>


      </section>



    </main>

  );
}
