import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal(props) {
   return ReactDOM.createPortal(
      <div className="modal-backdrop">
         <div
            className="modal"
            style={{
               border: '3px solid',
               borderColor: props.isSalesModal ? '#ff4500' : '#555',
               textAlign: 'center',
            }}
         >
            {props.children}
            <button className={props.isSalesModal ? 'sales-btn' : ''} onClick={props.handleClose}>
               Close
            </button>
         </div>
      </div>,
      document.body
   );
}
