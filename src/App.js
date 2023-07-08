import './App.css';
import Header from './component/header';
import Right from './component/right';
import Left from './component/left';
import Grid from '@mui/material/Grid';
import { Provider } from "react-redux"
import { store } from "./helper/store"


function App() {
  return (
    <Provider store={store}>
    <Header/>
    <div className='d-flex'>
      <Grid container spacing={2}>
         <Grid item xs={12} md={6}><Left/></Grid>
          <Grid item xs={12} md={6}> <Right/></Grid>
      </Grid>
    </div>
    </Provider>
  );
}

export default App;
