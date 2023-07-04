import './App.css';
import Header from './component/header';
import Right from './component/right';
import Left from './component/left';
function App() {
  return (
    <>
    <Header/>
    <div className='d-flex'>
     <Left/>
     <Right/>
    </div>
   
    </>
  );
}

export default App;
