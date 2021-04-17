import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ date, modalIsOpen, closeModal, appointmentOn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="">
          <h2 className="text-center text-brand">{appointmentOn}</h2>
          <h6 className="text-center">{date.toDateString()}</h6>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true })}
              placeholder="name"
              className="form-control"
            />
            {errors.name && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            <br></br>
            <input
              {...register("age", { required: true })}
              placeholder="age"
              className="form-control"
            />
            {errors.age && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            <br></br>
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="phone number"
              className="form-control"
            />
            {errors.phoneNumber && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            <br></br>
            <input
              {...register("email", { required: true })}
              placeholder="email"
              className="form-control"
            />
            {errors.email && (
              <span style={{ color: "red" }}>This field is required</span>
            )}
            <br></br>

            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
