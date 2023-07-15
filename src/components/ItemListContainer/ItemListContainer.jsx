import CallBtn from "../CallBtn/CallBtn"


const ItemListContainer = ({ title, slogan }) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="flex text-7xl font-medium font-heading">
                {title}
            </h1>
            <h2 className="text-3xl font-body">{slogan}</h2>
            <CallBtn />
        </div>
    )
}

export default ItemListContainer
