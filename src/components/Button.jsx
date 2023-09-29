export default function Button({operation, handleClick}) {
    return (
        <button
            type="button"
            className="h-10 w-10 flex justify-center items-center rounded-full text-white text-2xl bg-lime-500 hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
            onClick={handleClick}
        >{operation}</button>
    )
}