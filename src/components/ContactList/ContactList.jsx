import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { Button, Item, List, Text } from './ContactList.styled'; // стилі компонента

export const ContactList = () => {
  const contacts = useSelector(getContacts); // функція, яка дозволяє витягнути дані зі стейта
  const filter = useSelector(getFilter);
  const dispatch = useDispatch(); // функція, яка дозволяє відправити екшн

  // фільтруємо контакти по значенню фільтра
  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); // відправляємо екшн
  };

  // якщо контактів немає, то виводимо повідомлення
  if (!filteredContacts?.length) {
    return <Text>No contacts found.</Text>;
  }

  return (
    <List>
      {/* мапимо контакти і виводимо їх на екран */}
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
