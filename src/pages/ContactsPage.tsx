import React, { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { IData } from "../types/data";

const ContactsPage: FC = () => {
  const context: IData = useOutletContext();
  return <div>ContactsPage</div>;
};

export default ContactsPage;
