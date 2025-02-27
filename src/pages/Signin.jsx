export default function Signin() {
    return (
        <section className={' w-[90%] mx-auto mt-[20px] flex items-center justify-center'}>
            <div className={'bg-white p-[18px] shadow-sm w-[40%] rounded-[20px] px-[60px] mb-[43px] pb-[90px]'}>
                <div className={'flex items-center justify-end'}>
                    <img src="../../src/assets/Group%202014.png" alt=""/>
                </div>
                <div className={'mb-[30px]'}>
                    <span className={'text-black/40 '}>Welcome back !!!</span>
                    <h1 className={'text-black text-[56px] font-bold'}>Sign in</h1>
                </div>
                <form action="">
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            UserName
                        </label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            placeholder="Enter your username"
                            className="mt-1 block w-full px-3 py-2 rounded-md bg-[#FFF6F4] outline-none focus:ring-2 focus:ring-orange-200"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="mt-1 block w-full px-3 py-2 rounded-md bg-[#FFF6F4] outline-none focus:ring-2 focus:ring-orange-200"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <a
                                href="#"
                                className="text-sm text-black/40"
                            >
                                Forget Password?
                            </a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="mt-1 block w-full px-3 py-2 rounded-md bg-[#FFF6F4] outline-none focus:ring-2 focus:ring-orange-200"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="cursor-pointer bg-[#F47458] text-white py-2 px-4 rounded-[23px] hover:bg-[#E5620E] focus:outline-none focus:ring-2 focus:ring-orange-200"
                        >
                            Sing in
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm text-black/40">Already have an account ?  </span>
                    <a
                        href="#"
                        className="text-sm text-[#F97316] hover:text-[#E5620E]"
                    >
                        Login
                    </a>
                </div>
            </div>
        </section>
    )
}