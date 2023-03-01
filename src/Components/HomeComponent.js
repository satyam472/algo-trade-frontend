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

    const [crossOver, setcrossOver] = useState();
    const [formStatus, setformStatus] = useState(true);
    const [tableStatus, settableStatus] = useState(false);
    const [EmaShort, setEmaShort] = useState(false);
    const [EmaLong, setEmaLong] = useState(false);
    const [CandleLength, setCandleLength] = useState(false);

    // const fetchData = async () => {

    //     const response = await fetch("http://127.0.0.1:5000/getCrossOver");
    //     const tempdata = await response.json();
    //     console.log(tempdata);
    //     setcrossOver(tempdata);
    // }
    const [formData, setFormData] = useState({
        EmaShort: "",
        EmaLong: "",
        CandleLength:""
    })

    //   const navigate = useNavigate();
    const onSubmit = async (body) => {
        setformStatus(false)
        settableStatus(true)
        setEmaShort(body.EmaShort)
        setEmaLong(body.EmaLong)
        setCandleLength(body.CandleLength)
        let userDetail = {
            EmaShort: body.EmaShort,
            EmaLong: body.EmaLong,
            CandleLength: body.CandleLength
        }
        console.log(userDetail);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetail)
        };
        const response = await fetch("http://127.0.0.1:5000/api/data", requestOptions);
        const tempdata = await response.json();
        console.log(tempdata);
        setcrossOver(tempdata);
        reset();
    };

    const getAnotherCrossoer = ()=>{
        setformStatus(true)
        settableStatus(false)
    }
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
                {
                    formStatus ? (<div className="row">
                        <div className=" col-12 col-md-12 d-flex justify-content-center align-items-center">
                            <form className="form mt-4" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label>EmaShort</label>
                                    <input type="number" name="EmaShort" placeholder="10" {...register("EmaShort")} />
                                </div>
                                <div className="form-control">
                                    <label>EmaLong</label>
                                    <input type="number" name="EmaLong" placeholder="20" {...register("EmaLong")} />
                                </div>
                                <div className="form-control">
                                    <label>Candle Length</label>
                                    <input type="number" name="candleLength" placeholder="3" {...register("CandleLength")} />
                                </div>
                                <div className="form-control form-button">
                                    <label></label>
                                    <button type="submit" className="submit-button" >Get Crossover</button>
                                </div>
                            </form>
                        </div>
                    </div>) :""
                }
                {
                    tableStatus? (<div className="container form-container">
                    <div className="row heading d-flex justify-content-center allign-items-center">
                        <div className="row">
                            <div className="col col-md-6">
                            <h3>Following data is based where  <br />EmaShort ={EmaShort}  <br />EmaLong ={EmaLong}  <br /> candleLength = {CandleLength}</h3>
                            </div>
                            <div className="col col-md-6 ">
                            <div className="form-control form-button d-flex justify-content-center allign-items-center">
                                    <label></label>
                                    <button onClick={getAnotherCrossoer} className="submit-button" >Get another crossover</button>
                                </div>
                            </div>
                        </div>
                        
                        <h3 className="d-flex justify-content-center allign-items-center">TimeStamp and Price at each CrossOver</h3>
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
                                {/* {
                                    crossOver.map((detail, index) => {
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{detail.TimeStamp}</td>
                                            <td>{detail.Price}</td>
                                        </tr>
                                    })
                                } */}
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
                </div>):""
                }
            </div>
        </>
    );
};

export default Home;