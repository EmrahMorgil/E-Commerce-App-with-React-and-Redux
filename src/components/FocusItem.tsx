import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeItem } from "../types/Type";

const FocusItem: React.FC = () => {
  const [clickedData, setClickedData] = useState<homeItem>({id: 0, photo: "", name: "", price: "", amount: 0});

  let { id } = useParams();

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:3004/products/${id}`);
    setClickedData(response.data);
  };

  useEffect(() => {
    fetchData();
  });


  return (
    <div style={{textAlign:"justify"}}>
      <div className="focusItem-card">
        <img src={clickedData.photo} alt="detail" />
        <br/><br/>
        <h3>{clickedData.name}</h3>
        <br/>
        <i>${clickedData.price}</i>
        <br/><br/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default FocusItem;
