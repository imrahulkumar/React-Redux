import React from 'react'
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';



const Right = () => {

 const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  const cartArr = useSelector((store) => store.cart.cartItems)


  return (
   <List dense={dense}>
     {
      cartArr.map((item, index)=> <ListItem>
                  <ListItemText
                    primary={item}
                    key={index}
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>)
     }
            </List>
  )
}



export default Right