import './style/bookSlot.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { displayMessage } from '../redux/action';

export const BookSlot = () => {
    const dispatch = useDispatch();

    const handleBookTicketMessg = ()=>{
        dispatch(displayMessage("Ticket is Booked"))
    }
    return (
        <div className="slot-main-container">
            <h2>Book Slot</h2>
            <div className="time-container">
            <div><button onClick={handleBookTicketMessg}>9am - 12pm</button> </div>
            <div><button onClick={handleBookTicketMessg}>12pm - 3pm</button> </div>
            <div><button onClick={handleBookTicketMessg}>3pm - 6pm</button> </div>
            <div><button onClick={handleBookTicketMessg}>6pm - 9pm</button> </div>
            <div><button onClick={handleBookTicketMessg}>9pm - 12pm</button> </div>
            </div>
        </div>
    )
}
