import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Location({ dataLocation }) {
  
  return (
    <div className="box_location">
      <h1>{dataLocation?.name}</h1>
      <p><strong>Tipe:</strong>{dataLocation?.type}</p>
      <p><strong>Dimension:</strong>{dataLocation?.dimension}</p>
      <p><strong>Residents:</strong>{dataLocation?.residents?.length}</p>
    </div>
  );
}
