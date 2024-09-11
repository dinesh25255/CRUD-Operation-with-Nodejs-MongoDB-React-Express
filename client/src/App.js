import logo from './logo.svg';
import './App.css';
import { MdClose } from "react-icons/md";
import { useState } from 'react';

function App() {

  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    FullPayement: "",
    HalfPayement: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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

                <label htmlFor="FullPayement">Full Payement:</label>
                <input type="number" id="FullPayement" name="FullPayement" onChange={handleOnChange} />

                <label htmlFor="HalfPayement">Half Payement:</label>
                <input type="number" id="HalfPayement" name="HalfPayement" onChange={handleOnChange} />

                <button className="btn" type="submit">Submit</button>
              </form>
            </div>
          )
        }
      </div>
    </>
  );
}

export default App;
