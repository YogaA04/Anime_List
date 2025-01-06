const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        if(page === lastPage) return 0

        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    const handlePrevPage = () => {
        if(page <= 1) return 0

        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-4 md:text-xl text-sm">
            <button onClick={handlePrevPage} className="click">Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={handleNextPage} className="click">Next</button>
        </div>
    )
}

export default Pagination