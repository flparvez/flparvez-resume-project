import React from 'react';
import { useForm } from "react-hook-form";
const Test = () => {
    const { register,  formState: { errors } } = useForm();
    return (
        <div>
            

        <div className='mb-2'>
        <input
        type='date' value={dob} onChange={(newValue) => { setDob(newValue) }}
        className={`w-96 text-3xl rounded-lg ${errors.date &&
         " focus:border-red-500 focus:ring-red-500 border-red-500"}`}
        {...register("date", { required: 'Date is required' })}
        

        />

        <div>
        {errors.date && <span className="text-sm text-red-500">{errors.date.message}</span>}
        </div>
    </div>
        </div>
    );
};

export default Test;