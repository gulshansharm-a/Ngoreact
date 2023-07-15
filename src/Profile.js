import React from 'react';

const Profile = () => {
  const studentBanklist = (value, displayArea) => {
    // Function logic for student bank list
    console.log('Student Bank List:', value, displayArea);
  };

  return (
  <>
    <div/>
    <div classNameName="app-content content"/>
        <div classNameName="content-overlay"></div>
        <div classNameName="content-wrapper"/>
          <div classNameName="content-header row"></div>
          <div classNameName="content-body">
            {/* eCommerce statistic */}

            {/* Section: Service */}
            <div classNameName="row">
              <div classNameName="col-12 col-sm-7">
                <div classNameName="media mb-2">
                  <a classNameName="mr-1" href="#">
                    <img
                      src="https://agent.shishuvikasyojana.org/UserDocument/User_Photo/3b4ce155-867c-4d63-b954-fe01843c1197.jpeg"
                      alt="VISHAKHA SANJAY PANDHARE"
                      classNameName="users-avatar-shadow rounded-circle"
                      height="64"
                      width="64"
                    />
                  </a>
                  <div classNameName="media-body pt-25">
                    <h4 classNameName="media-heading">
                      <span classNameName="users-view-name">VISHAKHA SANJAY PANDHARE</span>
                    </h4>
                    <span>Account No: 10339125</span>
                    <br />
                    <span classNameName="users-view-id">Enroll Date: 18-02-2021 16:03:28</span>
                  </div>
                </div>
              </div>
              <div classNameName="col-12 col-sm-5 px-0 d-flex justify-content-end align-items-center px-1 mb-2">
                <a classNameName="btn btn-info mr-25 border" href="/Student/StudentPhotoupload">
                  Photo Upload
                </a>
                <a classNameName="btn btn-microsoft mr-25 border" href="/Student/Enrolldetailsupdate">
                  Edit Details
                </a>
                <button
                  value="10339125"
                  classNameName="btn btn-success mr-25 border"
                  onClick={() => studentBanklist('10339125', 'banklistdisplayarea')}
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
                      <label style="font-size: large; font-weight: bold">
                        Aadhar No</label
                      >
                    </div>

                    <div className="col-md-3">216577612935</div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Student Name</label
                      >
                    </div>
                    <div className="col-md-3">VISHAKHA SANJAY PANDHARE</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Father name</label
                      >
                    </div>

                    <div className="col-md-3">SANJAY DIGAMBAR PANDHARE</div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Mother Name</label
                      >
                    </div>
                    <div className="col-md-3">LAXMI SANJAY PANDHARE</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Gender</label
                      >
                    </div>

                    <div className="col-md-3">Female</div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Date of Birth</label
                      >
                    </div>
                    <div className="col-md-3">2011-05-17 - Age -12</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        School Name</label
                      >
                    </div>

                    <div className="col-md-3">
                      MOHANRAVJI DESHMUKH HIGHSCHOOL SUJLEGAON (className-8)
                    </div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Area Type</label
                      >
                    </div>
                    <div className="col-md-3">Rural</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Mobile</label
                      >
                    </div>

                    <div className="col-md-3">8668226249</div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Email</label
                      >
                    </div>
                    <div className="col-md-3">BALAJIPANDHARE@GMAIL.COM</div>
                  </div>
                  <div className="row" style="margin-top: 10px">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Village/Town</label
                      >
                    </div>

                    <div className="col-md-3"><strong>KOTHALA</strong></div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Pin Code</label
                      >
                    </div>
                    <div className="col-md-3">431709</div>
                  </div>
                  <div className="row" style="margin-top: 10px">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Distric</label
                      >
                    </div>

                    <div className="col-md-3">NANDED</div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        State
                      </label>
                    </div>
                    <div className="col-md-3">MAHARASHTRA</div>
                  </div>
                  <div className="row" style="margin-top: 10px">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Father Aadhar No</label
                      >
                    </div>

                    <div className="col-md-3">662862110707</div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Mother Aadhar No</label
                      >
                    </div>
                    <div className="col-md-3">390186679714</div>
                  </div>
                <div className="row" style={}>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Father Pan No</label
                      >
                    </div>

                    <div className="col-md-3">DPAPP0131R</div>
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Enroll Date</label
                      >
                    </div>
                    <div className="col-md-3">18-02-2021 16:03:28</div>
                  </div>
                  <div className="row" style="margin-top: 10px">
                    <div className="col-md-3">
                      <label style="font-size: large; font-weight: bold">
                        Agent Details</label
                      >
                    </div>
                    <div className="col-md-3">
                      TULSHIRAM MAROTI KUSHNURE - 9423135947
                    </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
</>
   
  );
};

const App = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Profile />
    </div>
  );
};

export default App;
