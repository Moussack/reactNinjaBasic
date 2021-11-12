import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/eventList';
import NewEventForm from './components/NewEventForm';

function App() {
   const [showModal, setShowModal] = useState(false);
   const [showEvents, setShowEvents] = useState(true);
   const [events, setEvents] = useState([]);

   const addEvent = (event) => {
      // *** add to state event
      setEvents((prev) => {
         return [...prev, event];
      });
      // close the modal after adding event
      setShowModal(false);
   };

   const handleClick = (id) => {
      setEvents((prevEvents) => {
         return prevEvents.filter((event) => id !== event.id);
      });
   };

   const handleClose = () => {
      setShowModal(false);
   };

   const subtitle = 'All the latest events';

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
               <NewEventForm addEvent={addEvent} />
            </Modal>
         )}

         <div>
            <button onClick={() => setShowModal(true)}>Add New Event</button>
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
