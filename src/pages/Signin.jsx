import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { client } from "../../lib/axios.js";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Signin() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await client.post("/auth/local/register", {
                username: data.username,
                email: data.email,
                password: data.password,
            });
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            navigate("/products");
        } catch (error) {
            console.error("Signup error:", error.response?.data?.message || "Error");
        }
    };

    return (
        <section className="w-[90%] mx-auto mt-[20px] flex items-center justify-center">
            <div className="bg-white p-[18px] shadow-sm w-[40%] rounded-[20px] px-[60px] mb-[43px] pb-[90px]">
                <div className={'flex items-center justify-end'}>
                    <img src="../../src/assets/Group%202014.png" alt=""/>
                </div>
                <div className="mb-[30px]">
                    <span className="text-black/40">Welcome !!!</span>
                    <h1 className="text-black text-[56px] font-bold">Sign in</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            {...register("username")}
                            placeholder="Enter your username"
                            className="mt-1 block w-full px-3 py-2 rounded-md bg-[#FFF6F4] outline-none focus:ring-2 focus:ring-orange-200"
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-3 py-2 rounded-md bg-[#FFF6F4] outline-none focus:ring-2 focus:ring-orange-200"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-3 py-2 rounded-md bg-[#FFF6F4] outline-none focus:ring-2 focus:ring-orange-200"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="cursor-pointer bg-[#F47458] text-white py-2 px-4 rounded-[23px] hover:bg-[#E5620E] focus:outline-none focus:ring-2 focus:ring-orange-200"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm text-black/40">Already have an account? </span>
                    <a href="/login" className="text-sm text-[#F97316] hover:text-[#E5620E]">
                        Login
                    </a>
                </div>
            </div>
        </section>
    );
}
