import React from 'react';

export default function eventList({ events, handleClick }) {
   return (
      <div className="asdasd">
         {events.map((event, index) => {
            return (
               <React.Fragment key={event.id}>
                  <h2>
                     {index} - {event.title}
                  </h2>
                  <button onClick={() => handleClick(event.id)}>delete event</button>
               </React.Fragment>
            );
         })}
      </div>
   );
}
