import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [studentProfile, setStudentProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:6000/student-profile');
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
        <div className="app-content content">
          <div className="content-overlay"></div>
          <div className="content-wrapper">
            <div className="content-header row"></div>
            <div className="content-body">
              <div className="row">
                <div className="col-12 col-sm-7">
                  <div className="media mb-2">
                    <a className="mr-1" href="#">
                      <img
                        src="https://agent.shishuvikasyojana.org/UserDocument/User_Photo/3b4ce155-867c-4d63-b954-fe01843c1197.jpeg"
                        alt="VISHAKHA SANJAY PANDHARE"
                        className="users-avatar-shadow rounded-circle"
                        height="64"
                        width="64"
                      />
                    </a>
                    <div className="media-body pt-25">
                      <h4 className="media-heading">
                        <span className="users-view-name">
                          VISHAKHA SANJAY PANDHARE
                        </span>
                      </h4>
                      <span>Account No: 10339125</span>
                      <br />
                      <span className="users-view-id">
                        Enroll Date: 18-02-2021 16:03:28
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-5 px-0 d-flex justify-content-end align-items-center px-1 mb-2">
                  <a
                    className="btn btn-info mr-25 border"
                    href="/Student/StudentPhotoupload"
                  >
                    Photo Upload
                  </a>

                  <a
                    className="btn btn-microsoft mr-25 border"
                    href="/Student/Enrolldetailsupdate"
                  >
                    Edit Details
                  </a>
                  <button
                    value="10339125"
                    className="btn btn-success mr-25 border"
                    data-toggle="modal"
                    data-target="#bankData"
                  >
                    Bank Details
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Aadhar No
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.aadharNumber}</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Student Name
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.studentName}</div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Father Name
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.fatherName}</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Mother Name
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.motherName}</div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Gender
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.gender}</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Date of Birth
                          </label>
                        </div>
                        <div className="col-md-3">2011-05-17 - Age -12</div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            School Name
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.schoolName}</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Area Type
                          </label>
                        </div>
                        <div className="col-md-3">Rural</div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Mobile
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.mobile}</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Email
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.email}</div>
                      </div>
                      <div className="row" style={{ marginTop: '10px' }}>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Village/Town
                          </label>
                        </div>
                        <div className="col-md-3">
                          <strong>{studentProfile.villageOrTown}</strong>
                        </div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Pin Code
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.pinCode}</div>
                      </div>
                      <div className="row" style={{ marginTop: '10px' }}>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            District
                          </label>
                        </div>
                        <div className="col-md-3">NANDED</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            State
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.state}</div>
                      </div>
                      <div className="row" style={{ marginTop: '10px' }}>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Father Aadhar No
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.fatherAadharNo}</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Mother Aadhar No
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.motherAadharNo}</div>
                      </div>
                      <div className="row" style={{ marginTop: '10px' }}>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Father PAN No
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.fatherPanNo}</div>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Enroll Date
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.enrollDate}</div>
                      </div>
                      <div className="row" style={{ marginTop: '10px' }}>
                        <div className="col-md-3">
                          <label style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            Agent Details
                          </label>
                        </div>
                        <div className="col-md-3">{studentProfile.agentDetail}</div>
                      </div>

                      <div className="row mt-2">
                        <div className="col-md-3">
                          <a
                            href="https://agent.shishuvikasyojana.org/Agent/VirtualCard?Acknowled=DXHkmNri/M3D6L2xHko4rYDJs9o0hgYMnu5ywB&#x2B;YGSLY05Zxeium5zdIcBCEohwX"
                            target="_blank"
                            className="btn btn-info"
                          >
                            Virtual Card
                          </a>
                        </div>

                        <div className="col-md-9">
                          <strong className="text-danger">
                            Renwal Required Call Us-1800 309 5532
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Profile;
