import React from "react";

const AppointmentByDate = ({ appointments }) => {
  return (
    <div>
      {appointments.length}
      {appointments.map((app) => (
        <li>{app.name}</li>
      ))}
    </div>
  );
};

export default AppointmentByDate;
