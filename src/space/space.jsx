
import React from 'react';

import { SpaceEvent, SpaceNotifier } from './spaceNotifier';
import './space.css';

export function Space(props) {
  const username = props.userName.split('@')[0]
  const currentstatus = localStorage.getItem('mystatus') || 'studying';

  const [online, setOnline] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/status')
      .then((res) => res.json())
      .then((data) => {
        setOnline(data);
      })
      .catch(() => {

        const A = { id: username, name: username, status: currentstatus, avatar: '/avatar.JPG' };
        const B = { id: 'lily', name: 'Lily', status: 'Studying', avatar: '/avatar.JPG' };
        const C = { id: 'jimmy', name: 'Jimmy', status: 'Have lunch', avatar: '/dog.jpg' };
        setOnline([A, B, C]);
      });
    },[username,currentstatus]);

        /*
      
           function handleSpaceEvent(e) {
            setOnline((prev) => {
              if (e.type === SpaceEvent.Join) {
                const user = e.value.user;
              
                if (prev.some((u) => u.id === user.id)) return prev;
                return [...prev, user];
              }
      
              if (e.type === SpaceEvent.Leave) {
                const user = e.value.user;
                return prev.filter((u) => u.id !== user.id);
              }
      
              return prev;
            });
          }
      
          SpaceNotifier.addHandler(handleSpaceEvent);
          return () => SpaceNotifier.removeHandler(handleSpaceEvent);
        }, []);
      */
        return (
          <main className="container-fluid text-center main-theme">
            <div className="all-area">
              {online.map((u,i) => (
                <section className="each-avatar" key={i}>
                  <div className="avatar-">
                    <img className="avatar-" alt={u.name} src={u.avatar || '/avatar.JPG'} />
                  </div>

                  <div className="statue">
                    <p>
                      <span className="font-sta">{u.name}</span>
                    </p>
                    <span className="font-sta-i">{u.status}</span>
                  </div>
                </section>
              ))}
            </div>
          </main>
        );
      }
