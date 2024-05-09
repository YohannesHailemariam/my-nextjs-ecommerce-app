import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="w-full h-20 border-b-[1px] border-b-zinc-500 bg-white text-zinc-600">
            <div className="max-w-screen-xl mx-auto h-full flex items-center">
                {/* Logo */}
                <Logo />
                {/* Navigation */}
                {/* icons */}
            </div>
        </div>
    )
}

export default Navbar;