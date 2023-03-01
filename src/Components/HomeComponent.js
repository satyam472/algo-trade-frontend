import React, { useState, useEffect } from "react";
import '../css/Home.css'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
const Home = () => {
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

    const [crossOver, setcrossOver] = useState([]);

    // const fetchData = async () => {

    //     const response = await fetch("http://127.0.0.1:5000/getCrossOver");
    //     const tempdata = await response.json();
    //     console.log(tempdata);
    //     setcrossOver(tempdata);
    // }
    const [formData, setFormData] = useState({
        emaLine1:"",
        emaLine2:""
      })
    
    //   const navigate = useNavigate();
      const onSubmit = async(body) => {
        let userDetail = {
            emaLine1: body.emaLine1,
            emaLine2: body.emaLine2
        }
        console.log(userDetail);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userDetail)
        };
        const response = await fetch("http://127.0.0.1:5000/getCrossOver",requestOptions);
        const tempdata = await response.json();
        console.log(tempdata);
        setcrossOver(tempdata);
        reset();
      };

    useEffect(() => {
        // Fetch data initially
        // fetchData();

        // Fetch data every 5 second
        // const intervalId = setInterval(fetchData, 5);

        // Clear interval on component unmount
        // return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className=" col-12 col-md-12 d-flex justify-content-center align-items-center">
                        <form className="form mt-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label>EmaLine1</label>
                                <input type="number" name="emaLine1" placeholder="10" {...register("emaLine1")} />
                            </div>
                            <div className="form-control">
                                <label>EmaLine2</label>
                                <input type="number" name="emaLine2" placeholder="20" {...register("emaLine2")} />
                            </div>
                            <div className="form-control form-button">
                                <label></label>
                                <button type="submit" className="submit-button" >Get Crossover</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container form-container">
                    <div className=" heading d-flex justify-content-center allign-items-center">
                        <h3>TimeStamp and Price at each CrossOver</h3>
                    </div>
                    <div className="container-top">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.no</th>
                                    <th scope="col">TimeStamp</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    crossOver.map((detail, index) => {
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{detail.TimeStamp}</td>
                                            <td>{detail.Price}</td>
                                        </tr>
                                    })
                                }
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;