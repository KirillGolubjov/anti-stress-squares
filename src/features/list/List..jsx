import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { createColor } from '../../_utils/helpers';
import { addElement, addRemovingStatus, removeElement } from './listSlice';

import Button from '../../_components/Button';
import ListItem from './ListItem';
import { useEffect } from 'react';

const List = () => {
  const list = useSelector((state) => state.list.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newBox = { id: uuid(), color: createColor() }
    dispatch(addElement(newBox));
  }

  const addStatus = () => {
    dispatch(addRemovingStatus())
  }

  useEffect(() => {
    if (list.some(item => item.removing)) {
      const timer = setTimeout(() => {
        dispatch(removeElement());
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [list, dispatch]);

  console.log(list)

  return (
    <main className='main-content'>
      <div>
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={addStatus}>Delete</Button>
      </div>

      <div className='box-container'>
          {list?.map((item, index) => <ListItem key={item.id} item={item} index={index} />)}
      </div>
    </main>
  );
};

export default List;
