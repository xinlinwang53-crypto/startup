const SpaceEvent = {
  Join: 'join',
  Leave: 'leave',
  Status:'status',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class SpaceEventNotifier {
  handlers = [];
  flip = true;

  constructor() {
    // Simulate chat messages that will eventually come over WebSocket
    setInterval(() => {
      const userC = { id: 'jimmy', name: 'Jimmy', status: 'Have lunch', avatar: '/dog.jpg' };
      const userD = { id: 'julia', name: 'Julia', status: 'Gym time', avatar: '/dd.jpg' };
      if (this.flip) {
        this.broadcastEvent('system', SpaceEvent.Leave, { user: userC });
        this.broadcastEvent('system', SpaceEvent.Join, { user: userD });
      } else {
        this.broadcastEvent('system', SpaceEvent.Leave, { user: userD });
        this.broadcastEvent('system', SpaceEvent.Join, { user: userC });
      }

      this.flip = !this.flip;
    }, 1000);
  }
      
  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {


    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const SpaceNotifier = new SpaceEventNotifier();
export { SpaceEvent, SpaceNotifier };
