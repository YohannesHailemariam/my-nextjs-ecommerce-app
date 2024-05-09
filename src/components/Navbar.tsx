'use client';

import { title } from "process";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    const navigation = [
        { _id: 910, title: "Home", href: "/"},
        { _id: 911, title: "Phones", href: "/phone"},
        { _id: 912, title: "Phone Cases", href: "/phonecase"},
        { _id: 913, title: "Watches", href: "/watches"},
        { _id: 914, title: "Accessories", href: "/accessories"},
    ]

    return (
        <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600">
            <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 xl:px-0">
                {/* Logo */}
                <Logo />
                {/* Navigation */}
                <ul className="hidden md:flex items-center gap-5 text-sm
                uppercase font-semibold">
                    {
                       navigation.map((item) => (
                        <Link href={item?.href}>
                            <li
                             className={`hover:text-black cursor-pointer duration-200
                             relative overflow-hidden group ${
                                item.href === pathname && "text-designColor"
                             }`}
                            >{item?.title}
                             <span
                                className={`absolute h-[1px] w-full bg-blue-700 left-0
                                bottom-0 -translate-x-[100%]
                                group-hover:translate-x-0 transition-transform duration-500
                                ${item.href === pathname && "translate-x-0 bg-designColor"}`}></span>
                            </li>
                        </Link>
                       )) 
                    }
                </ul>
                {/* icons */}
                <p>Icons</p>
            </div>
        </div>
    )
}

export default Navbar;