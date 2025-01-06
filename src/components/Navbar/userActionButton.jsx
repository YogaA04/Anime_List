import { authUserSession } from "@/libs/auth_libs"
import Link from "next/link"

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2 items-center md:pt-0 pt-2">
            {
                user ? <Link href="/users/dashboard" className="bg-yellow-500 text-white py-1 px-4 inline-block rounded click">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-green-500 text-white py-1 px-12 inline-block rounded click">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton