import { ContactsPageContainer } from "./contacts-styles";
import { PageTitle } from "../about.section/about-styles";
import EmailBox from "./emailbox";
import React from "react";

const Contacts = () => {
  return (
    <ContactsPageContainer id="contacts">
    <PageTitle>Get in Touch</PageTitle>
    <EmailBox/>
    </ContactsPageContainer>
  );
};

export default Contacts;
