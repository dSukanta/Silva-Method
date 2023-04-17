import React, { useState } from 'react'
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { allcodes } from '../../../utils/allCountryCodes';
import { toast } from 'react-hot-toast';
import { baseUrl } from '../../../utils/axioscall';

function SendOTP() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false)

    const loginfetch = async (value) => {
        var myHeaders = new Headers();
        myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
        myHeaders.append("Device", "Android");
        myHeaders.append("Language", "english");
        // myHeaders.append("DeviceId", "{{asdfwedfgdasfds}}");
        // myHeaders.append("Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzaWx2YW1ldGhvZC5jb20iLCJhdWQiOiJUaGVfQXVkIiwiaWF0IjoxNjgxNDQ0MzI3LCJuYmYiOjE2ODE0NDQzMzcsImV4cCI6NTM1MjE0NDQzMjcsImRhdGEiOiIxIn0.D-p1cFH0rSYBWN1tGnDG1UUvRejaEdwkcoxgcWAlwmo");

        var formdata = new FormData();
        formdata.append("phone", value);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        setLoading(true)
        const res = await fetch(baseUrl + "loginWithOTP", requestOptions);
        setLoading(false)
        const data = await res.json();
        if (data.error === false) {
            toast.success(data.messages)
        } else {
            toast.error(data.messages)
        }
        console.log(data)

    }

    const [countryCode, setCountryCode] = useState("");

    const onSubmit = (data) => {
        if (!countryCode) {
            toast.error("Enter a country code");
            return
        }
        loginfetch(countryCode + data.phone)
        console.log(countryCode+data.phone)
    }

    const handleCountryChange = (e) => {
        const val = (e.target.value)
        if (val !== "Select country code") {
            setCountryCode(val)
        } else {
            setCountryCode("")
        }
    }

    return (
        <div className='login-area'>
            <div className="basic-login2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select className="form-select mb-3" aria-label="Default select example" onChange={handleCountryChange}>
                        <option selected>Select country code</option>
                        {
                            allcodes.map((code, index) => (
                                <option key={index + 1} value={code.dial_code}>{code.name}{`(${code.dial_code})`}</option>
                            ))
                        }
                    </select>

                    <label htmlFor="phone" className='mb-2'>Phone Number <span>**</span></label>
                    <input {...register("phone", { required: true, pattern: /^\d*[.]?\d*$/, maxLength: 13 })} required id="phone" name="phone" type="text"
                        placeholder="Enter Phone number" />
                    {
                        errors.phone && (
                            <Alert variant={"danger"}>
                                Invalid Phone number !
                            </Alert>
                        )
                    }
                    <button className='btn btn-success'>
                        {
                            loading ? (
                                <Spinner animation="border" variant="light" />
                            ) : "Send OTP"
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SendOTP