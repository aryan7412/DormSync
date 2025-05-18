import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        dateofbirth: '',
        address: '',
        password: '',
        identityCard: null,
        profileImage: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement signup logic
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-xl shadow-lg shadow-[#39d5ff22]">
                <div>
                    <h2 className="text-center text-3xl font-bold text-[#39d5ff]">
                        Create your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-[#39d5ff]/70">
                        Already have an account?{' '}
                        <Link to="/login" className="font-medium text-[#39d5ff] hover:text-[#39d5ff]/80">
                            Sign in
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <InputField 
                            label="Full Name" 
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                        <InputField 
                            label="Email Address" 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <InputField 
                            label="Mobile Number" 
                            type="tel" 
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                        <div>
                            <label className="block text-sm font-medium text-[#39d5ff] mb-2">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                name="dateofbirth"
                                value={formData.dateofbirth}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#39d5ff]/20 rounded-md text-[#39d5ff] focus:outline-none focus:ring-2 focus:ring-[#39d5ff] focus:border-transparent [color-scheme:dark]"
                            />
                        </div>
                        <InputField 
                            label="Address" 
                            type="text" 
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                        <InputField 
                            label="Password" 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <div>
                            <label className="block text-sm font-medium text-[#39d5ff] mb-2">
                                Identity Card
                            </label>
                            <input
                                type="file"
                                name="identityCard"
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#39d5ff]/20 rounded-md text-[#39d5ff] focus:outline-none focus:ring-2 focus:ring-[#39d5ff] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#39d5ff] mb-2">
                                Profile Image
                            </label>
                            <input
                                type="file"
                                name="profileImage"
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#39d5ff]/20 rounded-md text-[#39d5ff] focus:outline-none focus:ring-2 focus:ring-[#39d5ff] focus:border-transparent"
                            />
                        </div>
                    </div>

                    <Button
                        to="/"
                        buttonText="Sign up"
                        height="py-3"
                    />
                </form>
            </div>
        </div>
    );
};

export default Signup;