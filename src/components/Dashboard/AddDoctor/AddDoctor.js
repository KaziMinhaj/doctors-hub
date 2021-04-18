import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("file", info.name);
    formData.append("file", info.email);

    fetch("http://localhost:5000/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div className="row container-fluid">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <h3 className="mt-5  text-brand">Add a Doctor</h3>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">name</label>
            <input
              onBlur={handleBlur}
              type="name"
              class="form-control"
              name="name"
              placeholder="name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">email</label>
            <input
              onBlur={handleBlur}
              type="email"
              class="form-control"
              name="email"
              placeholder="email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Upload a image</label>
            <input
              onChange={handleFileChange}
              type="file"
              class="form-control"
              name="image"
              placeholder="upload"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
