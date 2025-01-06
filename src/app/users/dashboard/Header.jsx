'use client'

import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()

    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{title}</h1>
            <button onClick={handleBack} className="click">Back</button>
        </div>
    )
}

export default Header