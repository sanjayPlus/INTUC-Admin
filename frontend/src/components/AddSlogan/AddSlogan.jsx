import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import axios from "axios";
import SERVER_URL from "../../config/SERVER_URL";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

function AddSlogan() {
  const [slogan, setSlogan] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    axios
      .get(`${SERVER_URL}/admin/protected`, {
        headers: { "x-access-token": token },
      })
      .then((res) => {
        if (res.status !== 200) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, []);



  //   const handleImageChange = (e) => {
  //     const files = Array.from(e.target.files);
  //     const imageArray = slogan.images ? [...slogan.images] : []; // Check if slogan.images is defined

  //     files.forEach((file) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         if (reader.readyState === FileReader.DONE) {
  //           // Check if the image already exists in the image array
  //           if (!imageArray.includes(reader.result)) {
  //             imageArray.push(reader.result);
  //             setSlogan((prevSlogan) => ({
  //               ...prevSlogan,
  //               images: imageArray,
  //             }));
  //           }
  //         }
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   };
 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token");
    axios
      .post(`${SERVER_URL}/admin/slogan`,{
        slogan:slogan
      }, {
        headers: { "x-access-token": token },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("Slogan added successfully");
          setSlogan("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="main-wrapper">
        <SideBar />
        <div className="page-wrapper">
          <NavBar />
          <div className="page-content">
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">Add slogan</h6>
                    <form className="forms-sample" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="sloganName" className="form-label">
                          slogan Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="slogan"
                          autoComplete="off"
                          placeholder="slogan"
                          name="slogan"
                          value={slogan}
                          onChange={(e)=>setSlogan(e.target.value)}
                        />
                      </div>
                
            

                      
                      <button
                        type="submit"
                        className="btn btn-primary me-2 m-2"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSlogan;
