
const ItemListContainer = ({ title, slogan }) => {
    return (
        <div className="flex flex-col px-5 py-3">
            <h1 className="text-7xl font-medium font-heading">
                {title}
            </h1>
            <h2 className="text-3xl font-body">{slogan}</h2>

        </div>
    )
}

export default ItemListContainer
