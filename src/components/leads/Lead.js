import React, { useState, useEffect } from 'react'
import Inputs from '../../utils/Inputs'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Lead() {
    const navigate = useNavigate()
    const { state } = useLocation(state => state)

    const [buttonLoading, setButtonLoading] = useState(false)
    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        status: 0
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    useEffect(() => {
        if (state) {
            setData(state?.state)
        }
    }, [state])

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleObject = () => {
        setButtonLoading(true)
        if (!data.name) {
            toast.error('Please enter valid name')
        } else if (!regex.test(data.email)) {
            toast.error('Please enter valid email')
        }
        else if (!data.phoneNumber || data.phoneNumber.length != 10) {
            toast.error('Please enter valid  phone number')
        }

        else if (data.status == 0) {
            toast.error('Please select status')
        }
        else {

            const existingData = localStorage.getItem('myData');
            const dataArray = existingData ? JSON.parse(existingData) : [];

            // Add the new object to the array
            if (state?.id != undefined) {
                dataArray[state?.id] = data;
                toast.success('Updated successfully')
            }
            else {
                dataArray?.push(data);
                toast.success(' Added successfully')
            }


            // Stringify the modified array
            const newDataString = JSON.stringify(dataArray);

            // Store the modified array back into local storage
            localStorage.setItem('myData', newDataString);

            // Update state with the modified array
            //    setLocalData(dataArray);
            setButtonLoading(false)
            setData(dataArray);
            navigate('/')
        }
        setButtonLoading(false)
    };
    return (
        <>
            <div className='navMain'>
                <h3>Welcome</h3>
            </div>

            <form className='mainDiv grid' >
                <Inputs
                    type={"text"}
                    name={"name"}
                    value={data?.name}
                    onChange={handleChange}
                    placeholder={"Name"}
                />

                <Inputs
                    type="email"
                    name="email"
                    value={data?.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <Inputs
                    type="number"
                    name="phoneNumber"
                    value={data?.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
                <div>
                    <label>Status</label> <br />
                    <select name='status' onChange={handleChange} value={data?.status} >
                        <option value={0}>Select</option>
                        <option value={1}>New</option>
                        <option value={2}>Contacted</option>
                        <option value={3}>Qualified</option>


                    </select>
                </div>
            </form>

            <div className='gridCenter'>
                <button type='button' className='buttonSave' onClick={handleObject} disabled={buttonLoading} >
                    {buttonLoading == true ? 'Loading' : "Save"}</button>
            </div>
        </>
    )
}
