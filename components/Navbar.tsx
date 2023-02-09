import { HiOutlineBars3 } from 'react-icons/hi2';
import { useState } from 'react' 

interface NavbarProps {
    onHide?: () => void,
    className?: string
}

export default function Navbar({ onHide, className } : NavbarProps) {
    const [hide, setHide] = useState(false)

    return (
        <div className={`flex flex-col justify-start text-xl space-y-5 h-screen w-fit  ${className}`} >
            <a href="/assets" className="mb-10 w-fit hover:text-gray-600"> Assets </a>
            <a href="/invitations" className="w-fit hover:text-gray-600"> Invitations </a>
            <a href="/assetsources" className="w-fit hover:text-gray-600"> Asset sources </a>
            <a href="/profile" className="w-fit hover:text-gray-600"> Profile </a>
            <a href="/billing" className="w-fit hover:text-gray-600"> Billing </a>
            <a href="/signout" className="w-fit hover:text-gray-600"> Sign out </a>
        </div>
    )    
}