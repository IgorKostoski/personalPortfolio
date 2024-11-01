import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

  return (
    <button
    type="submit"
    className="group flex items-center justify-center 
              gap-2
              h-[3rem]
              w-[8rem] bg-sky-300 text-white rounded-full
              outline-none transition-all focus:scale-110 
              hover:scale-110 active:scale-105 hover:bg-sky-900 hover:text-white
              active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100
              disabled:bg-opacity-65"
              disabled={pending}
  >{
    pending ? ( 
    <div className='h-5 w-5 animate-spin rounded-full 
    border-b-2 border-white'>

    </div> ) : (
        <>

        Submit{" "}
        <FaRegPaperPlane
          className="text-xs
                  opacity-70 transition-all 
                  group-hover:translate-x-1
                  grouo-hover:-translate-y-1"
        />{" "}

</>

    )}
   
  </button>
  )
}
