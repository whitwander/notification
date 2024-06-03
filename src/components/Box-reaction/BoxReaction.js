import "./box.css"

export default function BoxReaction(props) {
    return (
        <div className="box">
            <img src={props.image} alt="profile picture" />
            <div>
                <p><span className="name">{props.name}</span> reacted to your recent post <span className="event">{props.event}</span></p>
                <p className="time">{props.time}</p>
            </div>
        </div>
    );
}
