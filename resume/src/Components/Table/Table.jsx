import React, { useEffect, useState } from 'react';
import { useGetResumeProfileQuery } from '../../services/candidateProfile.api';



const Table = () => {

 
  const { data, isSuccess } = useGetResumeProfileQuery()

  // RTK Query
  
  
  
  useEffect(() => {
    if (data && isSuccess) {
      setCandidates(data.candidates)
   
    }
  }, [data, isSuccess])
  const [candidates, setCandidates] = useState([])
console.log(candidates)
    return (


        <div>
           

            <table className="table-fixed">
  <thead >
    <tr className='my-2 py-2'>
      <th className='px-2'>Name</th>
      <th className='px-2'>Email</th>
      
      <th className='px-2'>State</th>
      <th className='px-2'>Gender</th>
      <th className='px-2'>Location</th>
      <th className='px-2'>Avatar</th>
    </tr>
  </thead>
  <tbody>

  {candidates.map((candidate,_id)=>{
const host= 'http://127.0.0.1:8000'
       
  const Pimage = `${host}${candidate.pimage}`
console.log(Pimage);
    return (

  

    <tr key={_id} className=''>
      <td className='px-2'>{candidate.name}</td>
      <td className='px-2'>{candidate.email}</td>
      <td className='px-2'>{candidate.state}</td>
      <td className='px-2'>{candidate.gender}</td>
      <td className='px-2'>{candidate.location}</td>
      <td className='px-2'><img className='rounded-full' src={Pimage} alt="" /> </td> 
      <td className='px-2'>1961</td>

    </tr>

    ) 
  })
  }
  </tbody>
</table>
        </div>
    );
};

export default Table;