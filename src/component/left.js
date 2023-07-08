import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from "../helper/cartSlice"


 const Left = () => {
const dispatch = useDispatch();

  const addToCart = () => {
  const fruit = ["Apple", "Orange", "Mango", "Banana", "Guava"];
  const index = Math.floor(Math.random() * 4)
     dispatch(addItem(fruit[index]));
  }

     const removeFromCart = () => {
      dispatch(removeItem());
  }


  return (
     <Stack direction="row" spacing={2}  mt={2} ml={2}>
      <Button variant="contained" onClick={addToCart}>Add</Button>
      <Button variant="contained" onClick={removeFromCart}>Remove All</Button>
      </Stack>
  )
}

export default Left;