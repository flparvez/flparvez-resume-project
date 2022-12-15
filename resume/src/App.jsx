import React from 'react';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';

const App = () => {
  return (
    <div>
      <h1 className='text-black text-xl text-center mt-3 bg-orange-400'>Resume Uploader</h1>

      <div className='sm:w-[100%] w-[100%] sm:flex'>

     <div className='sm:w-[50%] w-[100%]'>
     <Form/>

     </div>
      
       <div className='sm:w-[50%] w-[100%]'>


    <Table/>



         </div>


      </div>

      </div>
      
    
  );
};

export default App;