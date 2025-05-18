import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        mobileNumber: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement login logic
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black p-4">
            <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-xl shadow-lg shadow-[#39d5ff22]">
                <div>
                    <h2 className="text-center text-3xl font-bold text-[#39d5ff]">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-center text-sm text-[#39d5ff]/70">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-[#39d5ff] hover:text-[#39d5ff]/80">
                            Sign up
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <InputField 
                            label="Email Address" 
                            type="email" 
                            name="email"
                            value={formData.email}
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
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-[#39d5ff] focus:ring-[#39d5ff] border-[#39d5ff]/20 rounded bg-[#2a2a2a]"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-[#39d5ff]">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-[#39d5ff] hover:text-[#39d5ff]/80">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <Button
                        to="/"
                        buttonText="Sign in"
                        height="py-3"
                    />

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#39d5ff]/20"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-black text-[#39d5ff]">OR</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-center text-sm text-[#39d5ff]">Login through Mobile Number</p>
                        <InputField 
                            label="Mobile Number" 
                            type="tel" 
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            required
                        />
                        <Button
                            to="/otp"
                            buttonText="Continue"
                            height="py-3"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;