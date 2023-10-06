import { Label, Input } from './Filter.styled';
import { changeFilter } from 'components/redux/filterSlice';
import { selectFilter } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};

export default Filter;
