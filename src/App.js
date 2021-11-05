import './App.css';
import { useState } from 'react';

function App() {
   const [events, setEvents] = useState([
      { title: 'Mario Birthday', id: 1 },
      { title: 'How are you?', id: 2 },
      { title: 'Drinks on me', id: 3 },
   ]);

   const handleClick = (id) => {
      console.log(id);
      setEvents((prevEvents) => {
         return prevEvents.filter((event) => event.id !== id);
      });
   };

   return (
      <div className="App">
         {events.map((event) => {
            return (
               <div key={event.id}>
                  <h2>{event.title}</h2>
                  <button
                     onClick={() => {
                        handleClick(event.id);
                     }}
                  >
                     Delete
                  </button>
               </div>
            );
         })}
      </div>
   );
}

export default App;

/* Array.prototype.Myfilter = function (callback) {
   const newArray = [];
   for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
         newArray.push(this[i]);
      }
   }
   return newArray;
};

Array.prototype.Mymap = function (callback) {
   const newArray = [];
   for (let i = 0; i < this.length; i++) {
      newArray.push(callback(this[i], i, this));
   }
   return newArray;
}; */
