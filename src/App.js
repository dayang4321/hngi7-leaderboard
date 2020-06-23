import React from 'react';
import Uploader from './components/Uploader/UploadCSV'
import Leaderboard from './components/Rank Table/RankTable'
import  './App.css'
import { AuthContext } from './context/AuthContext'
import Layout from './containers/Layout'
import { Modal } from './components/Modal/Modal'
import Auth from './components/Auth/Auth'




const App = (props) => {
  const authContext = React.useContext(AuthContext);

  const [open, setOpen] = React.useState(false)
  
 const modalToggler = () => {
    setOpen(true)
 }
  const modalCloser = () => {
    setOpen(false)
  }

  return (
    <Layout clicked={modalToggler}>
    <Modal open={open} modalClose={modalCloser}><Auth modalClose={modalCloser} /></Modal>
    
  <div className="App">
      {authContext.isAuth? <Uploader />: null }
        <Leaderboard isAuth={authContext.isAuth}/>
      
    </div>
    </Layout>
  
   
  
  );
}

export default App;
