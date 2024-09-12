import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";

function App() {

  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    FullPayement: "",
    HalfPayement: "",
  });

  const [dataList, setDataList]= useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/create", formData);
      console.log(response.data);  // Handle the successful response here

      if (response.data.success) {
        setAddSection(false);
        alert(response.data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);  // Handle errors here
    }
  };

  const getFetchData =async()=>{
    try {
      const response = await axios.get("/");
      // console.log(data)
    

      if (response.data.success) {
        setDataList(response.data.data);

      
        // alert(response.data.message);
       
      }
    } catch (error) {
      console.error("There was an error!", error);  // Handle errors here
    }

  };

  useEffect(()=>{
    getFetchData()

  },[])

  console.log(dataList)

  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={() => setAddSection(true)}>Student - Add</button>
        {
          addSection && (
            <div className="addcontainer">
              <form onSubmit={handleSubmit}>
                <div className="close-btn" onClick={() => setAddSection(false)}>
                  <MdClose />
                </div>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" onChange={handleOnChange} />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleOnChange} />

                <label htmlFor="mobile">Mobile:</label>
                <input type="number" id="mobile" name="mobile" onChange={handleOnChange} />

                <label htmlFor="FullPayement">Full Payment:</label>
                <input type="number" id="FullPayement" name="FullPayement" onChange={handleOnChange} />

                <label htmlFor="HalfPayement">Half Payment:</label>
                <input type="number" id="HalfPayement" name="HalfPayement" onChange={handleOnChange} />

                <button className="btn" type="submit">Submit</button>
              </form>
            </div>
          )
        }

        {/* table contain part */}

        


      </div>
    </>
  );
}

export default App;
