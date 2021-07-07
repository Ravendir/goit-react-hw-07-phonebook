import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { filteredItemsSelector } from "../../redux/selector";
import { removeContacts } from "../../redux/operations";
import styles from "./ContactListStyles.module.css";

const ContactList = ({ items, handleDelete }) => {
  return (
    <ul className={styles.contacts}>
      {items.map((contact) => (
        <li className={styles.list} key={contact.id}>
          {contact.name} : {contact.number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => handleDelete(contact.id)}
              className={styles.listBtn}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: filteredItemsSelector(state),
  };
};

const mapDispatchToProps = {
  handleDelete: removeContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
