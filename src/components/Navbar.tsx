'use client';

import { title } from "process";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3X3, ShoppingBagIcon } from "lucide-react";

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
                <div className="flex items-center gap-x-5 mr-10">
                    <Link
                        href={"/wishlist"}
                        className="hover:text-black cursor-pointer duration-200 relative group">
                        <ShoppingBagIcon />
                        <span className="absolute top-0 -left-1 bg-zinc-800 text-zinc-100
                        w-4 h-4 rounded-full text-xs flex items-center justify-center
                        group-hover:bg-black font-semibold group-hover:text-white">
                            0
                        </span>
                    </Link>
                    <Grid3X3 />
                </div>
            </div>
        </div>
    )
}

export default Navbar;