import './App.css';
import LostDeals from './LostDeals';
import QuaterGoals from './QuaterGoals';
import Revenue from './Revenue';
import Sidebar from './Sidebar';
import Customers from './Customers';
import Graph from './Graph';
import Chats from './Chats';
import TopStates from './TopStates';
import NewDeals from './NewDeals';

function App() {
  return (
    <>
      <div className='conatiner-fluid '>
        <div className='card rounded-4'>
          <div className='card-body'>
            <Sidebar></Sidebar>
            <div className='row mainrow '>
              <div className='col-md'>
                <Revenue></Revenue>
              </div>
              <div className='col-md'>
                <LostDeals></LostDeals>
              </div>
              <div className='col-md-4'>
                <QuaterGoals></QuaterGoals>
              </div>
            </div>
            <div className='row mainrow '>
              <div className='col-md'>
                <Customers></Customers>
              </div>
              <div className='col-md'>
                <Graph></Graph>
              </div>
            </div>
            <div className='row mainrow '>
              <div className='col-md'>
                <Chats></Chats>
              </div>
              <div className='col-md'>
                <TopStates></TopStates>
              </div>
              <div className='col-md'>
                <NewDeals></NewDeals>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
