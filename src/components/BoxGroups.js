export default function BoxGroups(props) {
    let att = ""

    if(props.att == "joined") {
        att = "has joined your group"
    } else {
        att = "left the group"
    }
    
    return (
        <div className="box">
            <img src={props.image} alt="profile picture" />
            <div>
                <p><span className="name">{props.name}</span> {att} <span className="group">{props.group}</span></p>
                <p className="time">{props.time}</p>
            </div>
        </div>
    );
}
