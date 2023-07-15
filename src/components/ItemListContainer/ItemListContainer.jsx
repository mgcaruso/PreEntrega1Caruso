import CallBtn from "../CallBtn/CallBtn"
import './itemListContainer.css'

const ItemListContainer = ({ greeting, slogan }) => {
    return (
        <div className="item-container flex flex-col justify-center">
            <h1 className="heading flex text-7xl font-medium font-heading">
                {greeting}
            </h1>
            <h2 className="slogan text-3xl font-body">{slogan}</h2>
            <CallBtn word={"begin"} />
        </div>
    )
}

export default ItemListContainer
