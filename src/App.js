import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/eventList';

function App() {
   const [showModal, setShowModal] = useState(false);

   const [showEvents, setShowEvents] = useState(true);

   const [events, setEvents] = useState([
      { title: "mario's birthday bash", id: 1 },
      { title: "bowser's live stream", id: 2 },
      { title: 'race on moo moo farm', id: 3 },
      { title: 'Gaming Time', id: 4 },
      { title: 'Gaming Time 2', id: 5 },
   ]);

   const handleClick = (id) => {
      setEvents((prevEvents) => {
         return prevEvents.filter((event) => id !== event.id);
      });
   };

   const handleClose = () => {
      setShowModal(false);
   };

   const subtitle = 'All the latest events in Marioland';

   return (
      <div className="App">
         <Title title="Marioland Events" subtitle={subtitle} />

         {showEvents && (
            <div>
               <button onClick={() => setShowEvents(false)}>Hide Events</button>
            </div>
         )}
         {!showEvents && (
            <div>
               <button onClick={() => setShowEvents(true)}>Show Events</button>
            </div>
         )}

         {showEvents && <EventList events={events} handleClick={handleClick} />}

         {showModal && (
            <Modal handleClose={handleClose} isSalesModal={false}>
               <h2>TERMS AND CONDITION</h2>
               <p>Loremsasd ipsum dolor sit, amet consectetur adipisicing elit. Expedita doloribus nostrum officia ab accusamus? Doloribus!</p>
            </Modal>
         )}

         <div>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
         </div>
      </div>
   );
}

export default App;

/*     {showEvents &&
            events.map((event, index) => (
               <React.Fragment key={event.id}>
                  <h2>
                     {index} - {event.title}
                  </h2>
                  <button onClick={() => handleClick(event.id)}>delete event</button>
               </React.Fragment>
            ))} */
