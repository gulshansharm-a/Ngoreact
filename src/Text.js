import React, { useEffect, useState } from 'react';

const Test = () => {
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/student-profile');
        const json = await response.json();
        setStudentProfile(json);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {studentProfile ? (
        <div>
          <p>Aadhar Number: {studentProfile.aadharNumber}</p>
          <p>Student Name: {studentProfile.studentName}</p>
          <p>Father's Name: {studentProfile.fatherName}</p>
          <p>Mother's Name: {studentProfile.motherName}</p>
          <p>Gender: {studentProfile.gender}</p>
          <p>Date of Birth: {studentProfile.DOB}</p>
          <p>School Name: {studentProfile.schoolName}</p>
          <p>Area Type: {studentProfile.areaType}</p>
          <p>Mobile: {studentProfile.mobile}</p>
          <p>Email: {studentProfile.email}</p>
          <p>Village or Town: {studentProfile.villageOrTown}</p>
          <p>Pin Code: {studentProfile.pinCode}</p>
          <p>District: {studentProfile.district}</p>
          <p>State: {studentProfile.state}</p>
          <p>Father's Aadhar Number: {studentProfile.fatherAadharNo}</p>
          <p>Mother's Aadhar Number: {studentProfile.motherAadharNo}</p>
          <p>Father's PAN Number: {studentProfile.fatherPanNo}</p>
          <p>Enroll Date: {studentProfile.enrollDate}</p>
          <p>Agent Detail: {studentProfile.agentDetail}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Test;
