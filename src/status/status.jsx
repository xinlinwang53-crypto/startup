import React from 'react';
import './status.css';

export function Status(props) {
  const username = props.userName || localStorage.getItem('userName') || 'Xinlin';;


  const [mystatus, setmystatus] = React.useState(localStorage.getItem("mystatus") || "Studying");
  const [status, setStatus] = React.useState([])
  const [friendName,setfriendName] = React.useState('')



  React.useEffect(() => {
    fetch('/api/status')
    .then((res) => res.json())
    .then((data) => {
      setStatus(data);
    })
    .catch(() => {


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

      setStatus(defaultStatus);
    });
  }, [])

  
  const statusRows = [];
  
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

  const updateMyStatus = (newStatusText) => {


    fetch('/api/status', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: username,
      status: newStatusText,
      present: 'Online',
      date: new Date().toLocaleString(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setStatus(data);
      
    });
};


  const options = [
    "Open to talk", "In class", "Studying", "Having breakfast", "Having lunch", 
    "Having dinner", "Cooking", "Walking to class", "Office hour", "Work", 
    "In Wilkinson", "In HBLL", "In TMCB", "Coding", "Debugging", "Do not disturb"
  ];

  const Updatefriendlist = ()=> {


    fetch('/api/friends', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      friend: friendName
    }),
  })
    .then((res) => res.json())
    .then(() => {

      return fetch('/api/status');
    })
      .then((res) => res.json())
      .then((data) => {
      setStatus(data);
      setFriendName('');
    })
      
};

  return (
    <main className="main-theme grid-sepe">
      <section className="left">
        <div>
          <img className="avatar" alt="A nice photo" src="/avatar.JPG" />
        </div>
        <div className="tag">

          {options.map((opt) => (
            <button key={opt} className="tag-item" onClick={() => updateMyStatus(opt)}>
              {opt}
            </button>
          ))}

         
        </div>

        <div className = "add-friend"> <input type='text' value={friendName} onChange={(e) => setfriendName(e.target.value)} placeholder='xxx@email.com' />
         <button type="button"  onClick={() => Updatefriendlist()} >
          Addfriend
        </button>

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
