'use client'
import axios from "axios";
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import React, { useState } from 'react'
import { redirect, useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    
    const [loading,setLoading] = useState(false)

    const [formData, setFormData] = useState({
        // companyName: '',
        name: '',
        email: '',
        password: '',
        // interest: '',
        // termsAccepted: false,
        // receiveUpdates: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
         // Basic validation - check if form data is not empty
    if (!formData.name || !formData.password || !formData.email) {
        toast.error('Please fill in all required fields.');
        setLoading(false)
        return;
    }

        try {
            const apiUrl = process.env.API_URL;

            const response = await axios.post( `${apiUrl}/user`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                // Registration successful, handle accordingly
                if (response.data.status === 200) {
                    toast.success(response.data.message);
                    setLoading(false)
                    router.push('/login');
                } else if (response.data.status === 400) {
                    setLoading(false)
                    toast.error(response.data.message);
                } else {
                    // Registration failed, handle error
                    setLoading(false)
                    console.error('Registration failed');
                }
            } else {
                // Registration failed, handle error
                setLoading(false)
                console.error('Registration failed');
            }
        } catch (error) {
            setLoading(false)
            // console.error('Error registering:', error.message);
        }
    };
    return (
        <div className='overflow-hidden h-full'>



            {/* about sec 1  */}
            <section style={{ backgroundImage: "url('/assets/images/aboutmain.jpg')" }} className='w-full bg-[#f5f5f6] bg-cover object-center relative max-w-[1800px]  px-[10px] xsm:px-[30px] lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto'>
                <div className='absolute w-full h-full z-0 top-0 left-0 bg-black opacity-[0.2]'></div>
                <div className='flex w-full min-h-screen items-center justify-center'>
                    <form onSubmit={handleSubmit} className='max-w-[600px] relative z-10 px-3 xsm:px-5 py-10 rounded-lg w-[500px] bg-white shadow-lg'>
                        <h2 className='text-left font-worksans text-[20px] xsm:text-[25px] lg:text-[30px] xll:text-[35px] uppercase font-semibold text-[#3d3d3d]'>Register</h2>
                        <div>
                            {/* <div className='flex my-4 flex-col'>
                                <label htmlFor="companyName" className='mb-1'>Company Name</label>
                                <input type="text" id="companyName" name="companyName" placeholder='Company Name' className='a company-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' onChange={handleChange} />
                            </div> */}
                            <div className='flex my-4 flex-col'>
                                <label className='mb-1'>Full Name</label>
                                <input name="name" type="text" placeholder='full name' className='outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' onChange={handleChange} />
                            </div>
                            <div className='flex my-4 flex-col'>
                                <label className='mb-1'>Email</label>
                                <input type="email" name="email" placeholder='Email' className='outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' onChange={handleChange} />
                            </div>

                            <div className='flex my-4 flex-col'>
                                <label className='mb-1'>Password</label>
                                <input name="password" type="password" placeholder='Password' className='outline-none border-2 rounded-md shadow-lg border-[#443d3d82] px-4 py-2' onChange={handleChange} />
                            </div>




                            {/* <div className='flex my-4 flex-col'>
                                <label className='mb-1'>What are you interested in?</label>
                                <select
                                    className='outline-none border-2 bg-white rounded-md shadow-lg border-[#443d3d82] px-4 py-2' name="interest" onChange={handleChange} required
                                >
                                    <option value="">Select a country</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Rest of Europe">Rest of Europe</option>
                                    <option value="Rest of World">Rest of World</option>
                                </select>
                            </div>

                            <div className='flex my-4 h-6 items-center ml-1 justify-start gap-3'>
                                <input type="checkbox"       name="termsAccepted" className='outline-none border-2 rounded-md shadow-lg h-full w-[20px] border-[#443d3d82] px-4 py-2' required onChange={handleChange} />
                                <label className='font-medium text-[12px] xsm:text-[14px]'>I have read and accept Terms & Conditions </label>
                            </div>

                            <div className='flex my-4 h-6 items-center ml-1 justify-start gap-3'>
                                <input type="checkbox"         name="receiveUpdate"  className='outline-2 border-2 rounded-md shadow-lg h-full w-[20px] border-[#443d3d82] px-4 py-2' onChange={handleChange} required />
                                <label className='font-medium text-[12px] xsm:text-[14px]'>I want to receive email updates from Treeapp</label>
                            </div> */}
                        </div>

                        <div className='flex flex-col gap-4 items-center justify-start w-full'>
                            <button disabled={loading} className={`w-full px-7 py-3 hover:bg-blue-700 duration-300 text-white rounded-lg font-poppins text-[16px] xll:text-[18px] font-medium tracking-wide ${loading ? 'bg-blue-900 opacity-50'  : 'bg-blue-900'}`}>Register</button>

                            <p>Alredy Have Account <Link className='font-semibold hover:text-blue-900 text-green' href='/login'>Login </Link></p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Page