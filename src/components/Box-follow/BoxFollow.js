import "./box.css"

export default function BoxFollow(props) {
    return (
        <div className="box">
            <img src={props.image} alt="profile picture" />
            <div>
                <p><span className="name">{props.name}</span> followed you</p>
                <p className="time">{props.time}</p>
            </div>
        </div>
    );
}
