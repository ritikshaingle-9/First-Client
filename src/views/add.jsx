import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Add() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    city: "",
  });

  const addStudent = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/students`,
        {
          id: student.id,
          name: student.name,
          city: student.city,
        }
      );

      if (response.data.success) {
        setStudent({
          id: "",
          name: "",
          city: "",
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div className="bg-slate-200  min-h-screen mt-[-20px] ">
      <h1 className="text-center text-3xl pt-10 md:text-5xl lg:text-6xl my-4 mb-7">Add student</h1>

      <div className="w-2/3 shadow-md m-5 p-5 rounded-md border-2 border-gray-200 bg-white md:w-2/4 pt-10 mt-10  lg:w-1/3 mx-auto ">
        <input
          type="text"
          placeholder="Enter ID"
          value={student.id}
          onChange={(e) => setStudent({ ...student, id: e.target.value })}
          className="my-3 border-2 border-gray-200 rounded-md w-4/4 mx-auto py-3 px-3 md:  text-xl"/>

        <input
          type="text"
          placeholder="Enter Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          className="my-3 border-2 border-gray-200 rounded-md w-4/4 mx-auto py-3 px-3 md: text-xl"
        />

        <input
          type="text"
          placeholder="Enter City"
          value={student.city}
          onChange={(e) => setStudent({ ...student, city: e.target.value })}
          className="my-3 border-2 border-gray-200 rounded-md w-4/4 mx-auto py-3 px-3 md:  text-xl"
        />

        <button
          className="bg-slate-500 text-xs px-5  rounded-full text-white block mx-auto mt-10 mb-2 cursor-pointer md:px-6 lg:px-10 py-3 text-[20px] "
          onClick={addStudent}
        >
          Add Student
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Add;