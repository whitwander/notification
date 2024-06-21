export default function BoxComment(props) {
    return (
        <div className="box">
            <img src={props.image} alt="profile picture" />
            <div>
                <p><span className="name">{props.name} </span> comment on your picture</p>
                <p className="time">{props.time}</p>
            </div>
            <img src={props.picture} alt="picture commented" />
        </div>
    );
}
