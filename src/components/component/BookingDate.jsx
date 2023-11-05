import React, { useState } from "react";
import DatePicker from "react-datepicker";

const BookingDate = () => {

    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    return (
        <div>
      <h2>Room Booking Form</h2>
      <div>
        <label>Select a date:</label>
        <DatePicker selected={selectedDate} onChange={handleDateChange} />
      </div>
      {selectedDate && (
        <div>
          <p>Selected Date: {selectedDate.toDateString()}</p>
          <p>Booking duration: Single Day</p>
        </div>
      )}
    </div>
    );
};

export default BookingDate;