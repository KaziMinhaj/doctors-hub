import React from "react";
import BookingCard from "../BookingCard/BookingCard";

const bookingData = [
  {
    subject: "Teeth Orthodontics",
    visitingHour: "8:00-9:00",
    totalSpace: "10",
  },
  {
    subject: "Cosmetic Dentistry",
    visitingHour: "8:00-9:00",
    totalSpace: "10",
  },
  {
    subject: "Teeth Cleaning",
    visitingHour: "8:00-9:00",
    totalSpace: "10",
  },
  {
    subject: "Cavity Protection",
    visitingHour: "8:00-9:00",
    totalSpace: "10",
  },
  {
    subject: "Teeth Orthodontics",
    visitingHour: "8:00-9:00",
    totalSpace: "10",
  },
  {
    subject: "Teeth Orthodontics",
    visitingHour: "8:00-9:00",
    totalSpace: "10",
  },
];

const BookAppointment = ({ date }) => {
  return (
    <section>
      <h2 className="text-center text-brand mb-5">
        Available Appointment on {date.toDateString()}
      </h2>
      <div className="row m-5">
        {bookingData.map((booking) => (
          <BookingCard date={date} booking={booking}></BookingCard>
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
