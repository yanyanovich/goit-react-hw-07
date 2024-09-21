import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

import { useSelector } from "react-redux";
import { selectFilteredContacts, selectIsLoading, selectError } from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ul className={css["card-list"]}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.card}>
            <Contact name={contact.name} number={contact.number} id={contact.id} />
          </li>
        );
      })}
      {isLoading && "Please wait, Phonebook is loading..."}
      {error && `${error}`}
    </ul>
  );
}
