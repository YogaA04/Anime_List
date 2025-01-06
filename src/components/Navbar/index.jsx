import Link from "next/link"
import InputSearch from "./InputSearch"
import UserActionButton from "./userActionButton"

const Navbar = () => {
    return(
        <header className=" bg-sky-500 ">
            <div className="md:flex cols justify-between items-center md:p-4 p-2 ">
                <Link href="/" className="font-bold text-2xl">ANIME LIST</Link>
                <InputSearch />
                <UserActionButton/>
            </div>
        </header>
    )
}

export default Navbar