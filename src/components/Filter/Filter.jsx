import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice'; // цей екшен викликає редюсер
import { useDispatch, useSelector } from 'react-redux'; // хуки для роботи з редаксом
import { getFilter } from 'redux/selectors'; // селектори для роботи з редаксом

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter); // витягує значення фільтра з редакса

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))} // викликає редюсер з екшеном setFilter
      />
    </Label>
  );
};
