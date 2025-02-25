import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <header
            className={'bg-white p-[18px] shadow-sm rounded-[16px] w-[90%] mx-auto flex items-center justify-between mt-[20px]'}>
            <h2 className={'text-[24px] font-bold bg-gradient-to-r from-[#F97316] to-[#22C55E] bg-clip-text text-transparent'}>
                Shopedia
            </h2>
            <div className={'flex items-center justify-around gap-x-60'}>
                <nav className={'flex items-center gap-x-5 '}>
                    <Link to="/Products" className="text-[#1E293B] text-[20px] hover:text-[#F06908] transform">Products</Link>
                    <Link to="/signup" className="text-[#1E293B] text-[20px] hover:text-[#F06908] transform">Sign up</Link>
                    <Link to="/login" className="text-[#1E293B] text-[20px] hover:text-[#F06908] transform">login</Link>
                </nav>
                <Link to="/newsletter" className="text-[#1E293B] text-[20px hover:text-[#F06908] transform"><img
                    src="../src/assets/Frame%2054.svg" alt=""/></Link>
            </div>
        </header>
    )
}
