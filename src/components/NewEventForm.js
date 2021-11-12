import { useState, useRef } from 'react';
import './NewEventForm.css';

export default function NewEventForm({ addEvent }) {
   const [title, setTitle] = useState('');
   const [date, setDate] = useState('');
   const [location, setLocation] = useState('jakarta');

   const resetForm = () => {
      setTitle('');
      setDate('');
      setLocation('jakarta');
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // why must use object??, bcuz it's the representation of the the value inside the state (the state is an object inside an array )
      const event = {
         title: title,
         date: date,
         location: location,
         id: Math.floor(Math.random() * 1000),
      };

      console.log(event);
      addEvent(event);
      resetForm();
      //console.log(event);
   };

   return (
      <form className="new-event-form" onSubmit={handleSubmit}>
         <label>
            <span>Event Title</span>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
         </label>
         <label>
            <span>Event Date:</span>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
         </label>
         <label>
            <span>Event Location :</span>
            <select onChange={(e) => setLocation(e.target.value)}>
               <option value="jakarta">Jakarta</option>
               <option value="bandung">Bandung</option>
            </select>
         </label>
         <button>Submit</button>
      </form>
   );
}
