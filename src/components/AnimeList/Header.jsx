import Link from "next/link"

const Header = ({link, title, linkTitile }) => {
    return (
        <div className="flex justify-between pb-4">
            <h1 className="text-1xl font-bold">{title}</h1>
            {link && linkTitile ? <Link href={link} className="underline hover:text-blue-500 click">{linkTitile}</Link> : null}
        </div>
    )
}

export default Header