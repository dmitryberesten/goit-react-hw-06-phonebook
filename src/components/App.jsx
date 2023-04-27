import { ToastContainer } from 'react-toastify'; // відображення сповіщень
import 'react-toastify/dist/ReactToastify.css'; // стилі для сповіщень
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainHeader, SecondaryHeader, Section } from './App.styled'; // стилі для компонентів

export const App = () => {
  return (
    <Section>
      <MainHeader>Phonebook</MainHeader>

      <ContactForm />
      <SecondaryHeader>Contacts</SecondaryHeader>
      
      <Filter />
      <ContactList />
      <ToastContainer position="top-center" /> {/* відображення сповіщень */}
    </Section>
  );
};

// Діма Берестень
