import React from 'react';
import './status.css';

export function Status(props) {

    const [status, setStatus] = React.useState([]);
    React.useEffect(() => {
      const username =  props.username|| localStorage.getItem('userName') || 'Xinlin';;

  const defaultStatus = [
    {
      name: username,
      status: 'Studying',
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
      }else{
        setStatus(defaultStatus);
      }
    }, [props.username])
  
    // Demonstrates rendering an array with React
    const statusRows = [];
    //if (status.length) { store for future
    if (status.length){
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
