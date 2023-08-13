import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/FirstPage.css";
import SecondPage from './SecondPage';

function HomePage() {

  const naviagate = useNavigate();
  const [isAddcontact, setisAddcontact] = useState(false);
  const [tableData, settableData] = useState([]);
  const [editData, seteditData] = useState(null);
  const [isSorting, setIsSorting] = useState(true);

  useEffect(() => {
    GetDatafrmLocal()
  }, []);



  const GetDatafrmLocal = () => {
    let retrive_data = JSON.parse(localStorage.getItem('formData'));

    //assign data if any data in local storage
    if (retrive_data) {
      settableData([...retrive_data])
    }

  }

  function secondPageNav() {
    setisAddcontact(prev => !prev)
    // naviagate("/SecondPage")
  }

  // navigate to edit and selected data assign to editData state
  const EditContact = (data, index) => {
    seteditData(data)
    setisAddcontact(prev => !prev)
  }



  // sorting by first name
  const SortByFrstName = () => {


    setIsSorting(!isSorting);
    // sorting by name
    if (isSorting) {
      let sorted = tableData.sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
      settableData(sorted)
    } else {
      // sorting by as it is
      let retrive_data = JSON.parse(localStorage.getItem('formData'));
      settableData([...retrive_data])
    }

  }


  return (
    <>
      {isAddcontact ? <SecondPage settableData={settableData} tableData={tableData} secondPageNav={secondPageNav} editData={editData} seteditData={seteditData} /> : <>
        <h2>Single Column Table Example</h2>

        <div id="first-container">

          <div className='center-container'>

            <table class="table table-dark table-striped">
              <thead onClick={SortByFrstName}>
                <tr>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Eamil</th>
                  <th>PhoneNumber</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>PostalCode</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((e, i) => {
                  return (
                    <tr key={i}>
                      <th>{e.firstName}</th>
                      <th>{e.lastName}</th>
                      <th>{e.email}</th>
                      <th>{e.phonenumber}</th>
                      <th>{e.Address}</th>
                      <th>{e.city}</th>
                      <th>{e.state}</th>
                      <th>{e.country}</th>
                      <th>{e.postalcode}</th>
                      <th><button title='Edit' onClick={() => EditContact(e, i)} style={{ color: "red" }}>Edit</button></th>
                    </tr>
                  )
                })}


              </tbody>
            </table>
          </div>

        </div>

        {/* <button>Add new</button> */}
        <button id="btn" onClick={secondPageNav}> Add New
        </button></>}


      <footer>
        <p>Footer Section <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo" /> .</p>
      </footer>

    </>
  );
}

export default HomePage;
