import axios from "axios";
import React, { useEffect, useState } from "react";

const Residentinfo = ({ url }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((error) => console.error(error));
  }, []);

  console.log(resident);

  const bgStatus = () => {
    if (resident.status === "Alive") {
      return "green";
    } else if (resident.status === "Dead") {
      return "red";
    } else {
      return "gray";
    }
  };

  return (
    <div className="card">
      <div className="box_resident">
        <img className="img_resident" src={resident.image} alt="" />
        <h3 className="name_resident">{resident.name}</h3>
        <div className="info_status">
          <div className="status" style={{ backgroundColor: bgStatus() }}></div>
          <p>{resident.status}</p>
        </div>
        <p>
          <strong>Specie:</strong>
          {resident.species}
        </p>
        <p>
          <strong>Origin:</strong>
          {resident.origin?.name}
        </p>
        <p>
          <strong>Episodes:</strong>
          {resident.episode?.length}
        </p>
      </div>
    </div>
  );
};

export default Residentinfo;
