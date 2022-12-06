import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { useState, createContext } from "react";
import fileImage from './../src/google-forms.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const LabelContext = createContext();

library.add(faTwitter);

export const LabelProvider = (props) => {
  const [page, setPage] = useState(0);
  const [labelInfo, setlabelInfo] = useState({
    sender: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    recevier: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    weight: "",
    shippingOption: "1"
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };
  console.log(page, "page");
  const handleChange = (prop) => (event) => {
    setlabelInfo({ ...labelInfo, [prop]: event.target.value });
  };

  const setSenderInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      sender: { ...labelInfo.sender, [prop]: event.target.value }
    });
  };
  const setRecevierInfo = (prop) => (event) => {
    setlabelInfo({
      ...labelInfo,
      recevier: { ...labelInfo.recevier, [prop]: event.target.value }
    });
  };
  const steps = [
    { title: "Get Sender address", icon: "/icon2.png", },
    { title: "Get Reciver address", icon: "/icon2.png", },
    { title: "Get Shipping Option", icon: "/shipping.png", },
    {
      title: "confirm",
      icon: "/icon4.png",
    }
  ];

  return (
    <LabelContext.Provider
      value={{
        page,
        steps,
        nextPage,
        prevPage,
        labelInfo,
        handleChange,
        setSenderInfo,
        setRecevierInfo
      }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
