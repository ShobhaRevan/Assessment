import React from 'react';
// import Dashboard from './Dashboard';
import Login from './Login';
function App(){
  return(
    <div className='App'>
      {/* <Dashboard/> */}
      <Login/>
    </div>
  )
}

export default App;












































































































































































































































































// import React,{useState} from 'react';

// function App() {
//   const [data, setData] = useState('');
//   return (
//     <div className='App'>
//       <h1>Test click event with Button</h1>
//       <button onClick={()=>setData('updated data')}>Update data</button>
//       <h1>{data}</h1>
//     </div>
//   );
// }

// export default App;


// import React,{useState} from 'react';

// function App() {
//   const [data, setData] = useState('');
//   return (
//     <div className='App'>
//       <h1>Test Onchange Event with Input text</h1>
//       <input
//         type='text' value={data} onChange={(e)=>setData(e.target.value+'test')}/>
//     </div>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TestRouter from './TestRouter';
// import Account from './Account';
//  import AudianceTopCityBar from './AudianceTopCityBar';
// import AnalyticAudience from './AnalyticAudience';
// import AudianceAnt from './AudianceAnt';
// import BudgetBooking from './BudgetBooking';
// import AdditionalServices from './AdditionalServices';
// import MonthCalender from './MonthCalender';
// import ManpowerService from './ManpowerService';
// import MapPower from './MapPower.js';
// import MapLocation from './MapLocation';
// import LoginPage from './LoginPage';
// import RegistrationPage from './RegistrationPage';
// import MyProject from './MyProject';
// import './MyProject.css';
// import DashBoardsub from './DashBoardsub';
// import Mywork from './Mywork';
// import GodHome from './GodHome';
// import TempleDetail from './TempleDetail';
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<GodHome />} />
//         <Route path="/temple-detail" element={<TempleDetail />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App; 

  // import React,{useState} from 'react';
  // //import Users from './Users';
  // import handleOtherMethod from './helper';
  // function App(){
  //   const [data,setData] = useState('');
    
  //   const handleData=()=>{
  //   setData('hello')
  //   }
    
  //   return(
  //     <div className="App">
  //       <h1>Functional component with testing methods</h1>
  //     <button data-testid='btn1' onClick={handleData}>Update</button>
  //     <button data-testid='btn2' onClick={handleOtherMethod}>Print</button>
  //     <h2>{data}</h2>
{/* <Account/> */ }
{/* <AudianceTopCityBar/> */ }
{/* <AnalyticAudience/> */ }
{/* <AudianceAnt/> */ }
{/* <BudgetBooking/> */ }
{/* <AdditionalServices/> */ }
{/* <MonthCalender/> */ }
{/* <ManpowerService/> */ }
{/* <MapPower/> */ }
{/* <MapLocation/> */ }
{/* <LoginPage/> */ }
{/* <RegistrationPage/> */ }
{/* <MyProject/> */ }
{/* <Mywork/> */ }
{/* <DashBoardsub/> */ }
{/* <TestRouter/>*/}
{/* <GodHome/>*/}
{/*<TempleDetail/>*/}
     {/* <Users/> */}
//      </div> 
//     )
//   }

// export default App; 

/****Multiple elements with role and custom role*****/
// import React,{useState} from 'react';
// function App(){
//   return(
//   <div className='App'>
//     <h1>Multiple elements with custom role</h1>
//     <h1>custome role</h1>
//     <button>Click1</button>
//     <button>Click2</button>
//     <label htmlFor='input1'>User Name</label>
//     <input type="text" id='input1'/>
//     <label htmlFor='input2'>User Age</label>
//     <input type="text" id='input2'/>
//     <div role='dummy'>
//       Dummy Text
//     </div>
//   </div>
//     )
// }

// export default App;

/***getByAllRole****/
// import React,{useState} from 'react';
// function App(){
// return(
//   <div>
//     <h1>RTL Query:getByAllRole</h1>
//     <button>Click Me</button>
//     <button>Click Me</button>
//     <button>Click Me</button>
//     <button>Click Me</button>
//     <button>Click Me</button>
//     <select>
//       <option>1</option>
//       <option>2</option>
//       <option>3</option>
//     </select>
//   </div>
// )
// }
// export default App;

// /***getByLabelText and checkbox*****/
// import React,{useState} from 'react';
//  function App(){
//  return(
//    <div className='App'>
//     <h1>RTL Query:getByLabelText</h1>
//     <label htmlFor='user-name'>Username</label>
//     <input tyep='text' id='user-name'defaultValue={'shobha'}/>
    
//     <label htmlFor='skills'>Skills</label>
//     <input type='checkbox' id='skills' defaultChecked={true}/>

//     </div>
//  )
//  }

//  export default App;

/***getAllByLabelText and multiple checkboxs*****/
// import React,{useState} from 'react';
//  function App(){
//  return(
//    <div className='App'>
//     <h1>RTL Query:getAllByLabelText</h1>
//     <label htmlFor='user-name1'>Username</label>
//    <input type='text' id='user-name1'/>
   
//    <label htmlFor='user-name2'>Username</label>
//    <input type='text' id='user-name2'/>
   
//    <label htmlFor='user-name3'>Username</label>
//    <input type='text' id='user-name3'/>
    
//     <label htmlFor='skills1'>Skills</label>
//     <input type='checkbox' id='skills1' defaultChecked={true} />

//     <label htmlFor='skills2'>Skills</label>
//     <input type='checkbox' id='skills2' defaultChecked={true} />

//     <label htmlFor='skills3'>Skills</label>
//     <input type='checkbox' id='skills3' defaultChecked={true}/>
//     </div>
//  )
//  }

//  export default App;

/***Overriding data-testId*****/
//  import React,{useState} from 'react';
//   function App(){
//   return(
//     <div className='App'>
// <h1>Overriding data-test id</h1>
// <div element-id='test-div'>Dummy Text</div>
//     </div>
//   )
//   }
//   export default App;

/*****getByDisplayValue and getAllByDisplayValue*****/
// import React,{useState} from 'react';
//   function App(){
//   return(
//     <div className='App'>
//       <h1>getByDispalyValue and getAllByDisplayValue</h1>
//       <input type='text' defaultValue={"shobha"}/>
//       <textarea defaultValue={'shobha'} />
//       <input type='radio' defaultValue={'female'} />
//     </div>

//   )
//   }
//   export default App;

/****getByTitle and getAllByTitle*****/
// import React,{useState} from 'react';
//   function App(){
//   return(
//     <div className='App'>
//      <h1>getByTitle and getAllByTitle</h1>
//      <button title='click'>Click Me</button>

//      <br/>
//      <br/>
//      <span title='black spade suit'>&#x2660;</span>
//      <span title='black spade suit'>&#x2660;</span>
//     </div>

//   )
//   }
//   export default App;
 
// import React,{useState} from 'react';
//   function App(){
//   return(
// <div className='App'>
//   <h1>Assertion Methods</h1>
//   <input type='text' 
//   defaultValue={'shobha'}
//   name='username'
//   className='test-style'
//   id='user-name'
//   data-test='test'
//   />
//   </div>
//   )
//   }
//   export default App;

