import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import './internship.css';

export default function App() {
  const handleFileInputChange = (event) => {
    const fileName = event.target.files[0]?.name;
    const fileInput = document.getElementById('resumeInput');

    // Set the title attribute to display the full file name on hover
    if (fileName) {
      fileInput.setAttribute('title', fileName);
    }
  };

  return (
    <div className='internshipform_main'>
      <form className='internshipform'>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='form6Example1' label='First name' />
          </MDBCol>
          <MDBCol>
            <MDBInput id='form6Example2' label='Last name' />
          </MDBCol>
        </MDBRow>

        <MDBInput wrapperClass='mb-4' id='form6Example3' label='Company name' />
        <MDBInput wrapperClass='mb-4' id='form6Example4' label='Address' />
        <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Email' />
        <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Phone' />
        <div className='mb-4'>
          <label htmlFor='selectItem' className='form-label'>
            Select Item
          </label>
          <select className='form-select' id='selectItem'>
            <option value='1'>Option 1</option>
            <option value='2'>Option 2</option>
            <option value='3'>Option 3</option>
          </select>
        </div>

        <div className='mb-4'>
          <label htmlFor='resumeInput' className='form-label'>
            Browse Resume
          </label>
          <input
            type='file'
            className='form-control file-input'
            id='resumeInput'
            onChange={handleFileInputChange}
          />
        </div>

        <MDBInput
          wrapperClass='mb-4'
          textarea
          id='form6Example7'
          rows={4}
          label='Additional information'
        />

        <MDBCheckbox
          wrapperClass='d-flex justify-content-center mb-4'
          id='form6Example8'
          label='I have read and agree to the terms'
          defaultChecked
        />

        <MDBBtn className='mb-4' type='submit' block>
          Submit
        </MDBBtn>
      </form>
    </div>
  );
}
