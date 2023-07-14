import CallBtn from "../CallBtn/CallBtn"


const ItemListContainer = ({ title, slogan }) => {
    return (
        <div className="flex flex-col px-6 py-5">
            <h1 className="text-7xl font-medium font-heading">
                {title}
            </h1>
            <h2 className="text-3xl font-body">{slogan}</h2>
            <CallBtn />
        </div>
    )
}

export default ItemListContainer
