
import React from 'react';

import { SpaceEvent, SpaceNotifier } from './spaceNotifier';
import './space.css';

export function Space(props) {
  const userName = props.userName;


  const A = { id: 'ammie', name: 'Ammie', status: 'In HBLL', avatar: '/avatar.JPG' };
  const B = { id: 'lily', name: 'Lily', status: 'Studying', avatar: '/avatar.JPG' };
  const C = { id: 'jimmy', name: 'Jimmy', status: 'Have lunch', avatar: '/dog.jpg' };
  const [online, setOnline] = React.useState([A,B,C]);

  React.useEffect(() => {
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

    return (
    <main className="container-fluid text-center main-theme">
      <div className="all-area">
        {online.map((u) => (
          <section className="each-avatar" key={u.id}>
            <div className="avatar-">
              <img className="avatar-" alt={u.name} src={u.avatar} />
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
  