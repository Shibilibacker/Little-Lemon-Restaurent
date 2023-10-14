import React, { useState } from 'react'

const BookingForm = (props) => {
    const [date, setdate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange = (e) => {
        setdate(e);
        props.dispatch(e)
    }
  return (
    <header>
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label html for="book-date">Choose Date:</label>
                        <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                    </div>
                    <div>
                        <label html for="book-time">Choose Time</label>
                        <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                            <option value=""> Select a Time</option>
                            
                        </select>
                    </div>
                    <div>
                        <label html for="book-guest">Number of Guests:</label>
                        <input id="book-guest" min="1" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                    </div>
                    <div>
                        <label html for="book-occasion">Occasion</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option>Anniversary</option>
                            <option>BirthDay</option>
                            <option>Dating</option>
                            <option>Getogether</option>
                        </select>
                    </div>
                    <div className='btnReceive'>
                        <input aria-label='On Click' type='submit' value={"Make Your reservation"}/>
                    </div>
                </fieldset>
            </form>
        </section>
    </header>
  )
}

export default BookingForm;
