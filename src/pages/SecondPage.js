import React, { useEffect, useState } from 'react';
import "../Styles/SecondPage.css";
import { useNavigate } from 'react-router-dom';


const SecondPage = ({ settableData, tableData, secondPageNav, editData, seteditData }) => {


  const naviagate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    Address: '',
    city: '',
    state: '',
    country: '',
    postalcode: '',
  });


  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }

    // null selected contact to edit
    return () => {
      seteditData(null)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleButtonClick = () => {
    // Update edited contact in whole table data


    const inputField = document.getElementById("firstname");

    if (editData) {
      let editChange = tableData.map(e => {
        if (e.id === editData.id) {
          return { ...formData }
        } else {
          return e
        }
      })
      settableData(editChange)
      // Store the Editedform data in local storage
      localStorage.setItem('formData', JSON.stringify(editChange));
      secondPageNav()

    } else {
      // generate random id for each contact
      var Id = Math.floor(1000 + Math.random() * 9000);
      settableData(prev => {
        return [{ ...formData, id: Id }, ...prev]
      })

      let store = [{ ...formData, id: Id }, ...tableData];
      // Store the form data in local storage as well
      localStorage.setItem('formData', JSON.stringify(store));
    }

    //  navigate to first page

  };

  return (

    <>
      <div className='form-center'>
        <div class="form">
          <div class="title">Contact Info</div>
          <form>

            <div class="input-container ic1">
              <input id="firstname" class="input" name="firstName" type="text" placeholder=" " value={formData.firstName} onChange={handleInputChange} required />
              <div class="cut"></div>
              <label for="firstname" class="placeholder">First name</label>
            </div>
            <div class="input-container ic2">
              <input id="lastname" class="input" type="text" name="lastName" placeholder=" " value={formData.lastName} onChange={handleInputChange} required />
              <div class="cut"></div>
              <label for="lastname" class="placeholder">Last name</label>
            </div>
            <div class="input-container ic2">
              <input id="email" class="input" type="email" name="email" placeholder=" " value={formData.email} onChange={handleInputChange} required />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder" >Email</label>
            </div>

            <div class="input-container ic2">
              <input id="email" class="input" type="tel" name='phonenumber' placeholder=" " value={formData.phonenumber} onChange={handleInputChange} required />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder" >PhoneNumber</label>
            </div>

            <div class="input-container ic2">
              <input id="email" class="input" type="text" name="Address" placeholder=" " value={formData.Address} onChange={handleInputChange} required />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder" >Address</label>
            </div>

            <div class="input-container ic2">
              <input id="email" class="input" type="text" name="city" placeholder=" " value={formData.city} onChange={handleInputChange} required />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder" >City</label>
            </div>

            <div class="input-container ic2">
              <input id="email" class="input" type="text" name="state" placeholder=" " value={formData.state} onChange={handleInputChange} required />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder">State</label>
            </div>

            <div class="input-container ic2">
              <input id="email" class="input" type="text" name="country" placeholder=" " value={formData.country} onChange={handleInputChange} required />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder" >Country</label>
            </div>

            <div class="input-container ic2">
              <input id="email" class="input" type="text" name='postalcode' placeholder=" " value={formData.postalcode} onChange={handleInputChange} required />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder" >PostalCode</label>
            </div>
            <button onClick={handleButtonClick} type="submit" id="submit">submit</button>

          </form>
        </div>

      </div>

    </>


  );
};

export default SecondPage;
