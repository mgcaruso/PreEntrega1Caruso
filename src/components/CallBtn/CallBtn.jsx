import './callBtn.css'

const CallBtn = ({word}) => {

    

    return (
        <div className="button py-4">
            { word.split("").map( (letter, index) => <div key={index} className="box">{letter.toUpperCase()}</div> )  }
        </div>
    )
}

export default CallBtn
