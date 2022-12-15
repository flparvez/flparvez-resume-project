import React, { useCallback, useEffect, useState } from 'react';
import { useSaveProfileMutation,useGetResumeProfileQuery } from '../../services/candidateProfile.api';

const Form = () => {
 


    const [image, setImage] = useState();
    const [gender, setGender] = useState();
    const [name, setName] = useState();
    const [st, setSt] = useState();
    const [email, setEmail] = useState();
    // const [dob, setDob] = useState()
    const [pimage, setPimage] = useState()
    const [location, setLocation] = useState()

    const [rdoc, setRdoc] = useState()


    const handleImage =(e)=>{
      setImage(e.target.files[0])
      console.log(e.target.files[0]);
      
    }
    const handleFile =(e)=>{
      setRdoc(e.target.files[0])
      console.log(e.target.files[0]);
      
    }
const [error, setError] = useState({
    status: false,
    msg:'',
    type:''

})


const [candidates, setCandidates] = useState([])

  // Clear Form
  const resetForm = () => {
    setName('')
    setEmail('')
    // setDob('')
    setSt('')
    setLocation('')
    setGender('')
    setPimage('')
    setRdoc('')
    document.getElementById('resume-form').reset()
  }


// RTK QUERY

// RTK Query
const [saveProfile] = useSaveProfileMutation()
const { data, isSuccess } = useGetResumeProfileQuery()


useEffect(() => {
  if (data && isSuccess) {
    setCandidates(data.candidates)
 
  }
}, [data, isSuccess])


  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('name', name)
    data.append('email', email)
    // data.append('dob', dob)
    // data.append('dob', dob == null ? null : format(dob, 'yyyy-MM-dd'))
    // data.append('dob', dob == null ? null : format(dob, parseISO('YYYY-MM-DD'),))
    data.append('state', st)
    data.append('gender', gender)
    data.append('location', location)
    data.append('pimage', image)
    data.append('rdoc', rdoc)

  //   const res = await saveProfile(data)
      // console.log(data);
  // }
  if (name && email) {
    const res = await saveProfile(data)
    console.log(res);
    
    if (res.data.status === "success") {
      setError({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })

      resetForm()
    }
  } else {
    setError({ status: true, msg: "All Fields are Required", type: 'error' })
  }
}

// name='dob' id='dob' value={dob} onChange={(newValue) => { setDob(newValue) }}
    return (
       
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
          
          <form onSubmit={handleSubmit} className="mt-6" noValidate id='resume-form'>
            <div className="mb-2 ">
              <label>
                <span className="text-gray-700">Your name</span>
                <input id='name'  onChange={(e)=> {setName(e.target.value)}}
                  type="text"
                  name="name" required
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-solid border-2 border-sky-500
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  placeholder="Md Parvez"
                />
              </label>
            </div>

     <div className="mb-2">
              <label>
                <span className="text-gray-700">Your Email</span>
                <input id='email'  onChange={(e)=> {setEmail(e.target.value)}}
                  type="email"
                  name="email" required
                  className="
  
              w-full
              block px-16 py-2 mt-2
              border-solid border-2 border-sky-500
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
                  
                />
              </label>
            </div>

         



        

  
            
            

  <div className="mb-2">
             
                <span className="text-gray-700">State</span>
                <select value={st}  onChange={(e)=> {setSt(e.target.value)}} id='state-select'
                 className="block appearance-none w-full bg-gray-200 border-solid border-2 border-sky-500 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
                
                <option  value="Cumilla">Cumilla</option>
                <option  value="Dhaka">Dhaka</option>
                <option  value="Feni">Feni</option>
                <option value="Chandpur">Chandpur</option>
              </select>
             
        
            </div>
            
           
    
        <div className="mb-2">
        <label>
          <span className="text-gray-700">Location</span>
          <input id='location'  onChange={(e)=> {setLocation(e.target.value)}}
            type="text"
            name="location" required
            className="
        w-min
        block px-16 py-2 mt-2
        border-solid border-2 border-sky-500
        rounded-md
        shadow-sm
        focus:border-indigo-300
        focus:ring
        focus:ring-indigo-200
        focus:ring-opacity-50
      "
            
          />
        </label>
      </div>



        <div className="mb-2">
        <label>
        <span className="text-gray-700">Image Upload</span>
          <input id='profile-photo' 
            type="file" onChange={handleImage}
            name="pimage" 
            className="
            block w-full text-sm text-gray-900  border-solid border-2 border-sky-500 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
      
            
          />
         
        </label>
      </div>
       <div className="mb-2">
        <label>
        <span className="text-gray-700">Upload File</span>
          <input id='resume-file'  
            type="file" onChange={handleFile}
              name='rdoc'
            className="
            block w-full text-sm text-gray-900  border-solid border-2 border-sky-500 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
      
            
            />
         
        </label>

        <div className="mb-2">
           
        <span className="text-gray-700">Gender</span>
    <div className="flex items-center mb-4">

    <input onChange={(e)=> {setGender(e.target.value)}} id="gender" type="text"  name="gender" 
    className=" w-min
    block px-16 py-2 mt-2
    border-solid border-2 border-sky-500
    rounded-md
    shadow-sm
    focus:border-indigo-300
    focus:ring
    focus:ring-indigo-200
    focus:ring-opacity-50
  "/>
    
    </div>


</div> 

        <div className='justify-center text-center'>
        <button  className='bg-orange-600 p-2 my-3 text-center' type='submit'>
        Submit
        </button>
        {error.status ? <alert severity={error.type}>{error.msg}</alert> : ''}
        </div>
      </div>




          </form>


            </div>
            </div>
            
     
      
       
        
    );
};

export default Form;