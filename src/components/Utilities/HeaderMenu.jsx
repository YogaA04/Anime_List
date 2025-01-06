import Image from 'next/image'

const HeaderMenu = ({title}) => {
    return (
        <div>
            <div className='p-8'>
                <h1 className='text-center text-2xl font-bold'>{title}</h1>
            </div>
        </div>
    )
}

export default HeaderMenu