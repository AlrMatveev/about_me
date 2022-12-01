import React, { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { IData } from "../types/data";
import Contacts from "../components/Contacts";

const ContactsPage: FC = () => {
  //const context: IData = useOutletContext();
  return <Contacts />;
};

export default ContactsPage;
