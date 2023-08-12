import React, { useState } from 'react';
import "../Styles/SecondPage.css";
import { useNavigate } from 'react-router-dom';


const SecondPage = () => {

  const naviagate= useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenumber:'',
    Address:'',
    city:'',
    state:'',
    country:'',
    postalcode:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleButtonClick = () => {
    // Store the form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    naviagate("/");
  };

  return (

    <>
    <div className='form-center'>
    <div class="form">
    <div class="title">Contact Info</div>
      <div class="input-container ic1">
        <input id="firstname" class="input"    name="firstName" type="text" placeholder=" " value={formData.firstName} onChange={handleInputChange}/>
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" name="lastName" placeholder=" " value={formData.lastName} onChange={handleInputChange}/>
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" name="email" placeholder=" " value={formData.email} onChange={handleInputChange} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder" >Email</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="tel" name='phonenumber'  placeholder=" " value={formData.phonenumber} onChange={handleInputChange} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder" >PhoneNumber</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="text" name="Address" placeholder=" " value={formData.Address} onChange={handleInputChange} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder" >Address</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="text" name="city" placeholder=" " value={formData.city} onChange={handleInputChange} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder" >City</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="text" name="state" placeholder=" " value={formData.state} onChange={handleInputChange} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">State</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="text" name="country" placeholder=" " value={formData.country} onChange={handleInputChange} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder" >Country</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="text" name='postalcode' placeholder=" " value={formData.postalcode} onChange={handleInputChange} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder" >PostalCode</label>
      </div>
      <button onClick={handleButtonClick} type="text" id="submit">submit</button>
    </div>
    
    </div>
   
    </>
   

  );
};

export default SecondPage;
