import { authUserSession } from "@/libs/auth_libs"
import Image from "next/image"
import Link from "next/link"
import Header from "./Header"


const Page = async () => {
    const user = await authUserSession()
    console.log(user)
    return (
        <div className="m-4">
            <Header title="Dashboard"/>

            <div className="pt-4 flex flex-col justify-center items-center">
                <Image src={user?.image} className="rounded-full" alt="..." width={250} height={250} />
                <h2 className="pt-4 text-2xl font-bold ">Welcome, {user?.name}</h2>

                <div className="flex gap-4 py-8">
                    <Link href={"/users/dashboard/collection"} className="bg-yellow-500 font-bold px-4 py-3 rounded click">My Collection</Link>

                    <Link href={"/users/dashboard/comment"} className="bg-yellow-500 font-bold px-4 py-3 rounded click">My Comment</Link>
                </div>
            </div>
        </div>
    )
}

export default Page