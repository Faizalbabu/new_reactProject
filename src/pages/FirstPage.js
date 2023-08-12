import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/FirstPage.css";


function FirstPage() {

  const naviagate= useNavigate();


  function secondPageNav(){
    naviagate("/SecondPage")
  }

  return (
   <>
<h2>Single Column Table Example</h2>

<div id="first-container">

<div className='center-container'>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
  </tr>
  <tr>
    <td>FirstName</td>
    <td></td>
  </tr>
  <tr>
    <td>LastName</td>
    <td></td>
  </tr>
  <tr>
    <td>Email</td>
    <td></td>
  </tr>
  <tr>
    <td>PhoneNumber</td>
    <td></td>
  </tr>
  <tr>
    <td>Address</td>
    <td></td>
  </tr>
  <tr>
    <td>City</td>
    <td></td>
  </tr>
  <tr>
    <td>State</td>
    <td></td>
  </tr>
  <tr>
    <td>Country</td>
    <td></td>
  </tr>
  <tr>
    <td>PostalCode</td>
    <td></td>
  </tr>
</table>

</div>

</div>

{/* <button>Add new</button> */}
<button id="btn" onClick={secondPageNav}> Add New
</button>
   </>
  );
}

export default FirstPage;
