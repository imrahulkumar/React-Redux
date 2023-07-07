import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



 const Left = () => {


  const addToCart=()=> {
     console.log("Add")
  }

     const removeFromCart = () => {
     console.log("Remove")
  }


  return (
     <Stack direction="row" spacing={2}  mt={2} ml={2}>
      <Button variant="contained" onClick={addToCart}>Add</Button>
      <Button variant="contained" onClick={removeFromCart}>Remove</Button>
      </Stack>
  )
}

export default Left;