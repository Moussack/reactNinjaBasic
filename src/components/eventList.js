import styles from './EventList.module.css';

export default function eventList({ events, handleClick }) {
   return (
      <div className="asdasd">
         {events.map((event, index) => {
            return (
               <div className={styles.card} key={event.id}>
                  <h2>
                     {index} - {event.title}
                  </h2>
                  <button onClick={() => handleClick(event.id)}>delete event</button>
               </div>
            );
         })}
      </div>
   );
}
