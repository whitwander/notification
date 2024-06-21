export default function BoxMessage(props) {
    return (
        <div className="box">
            <img src={props.image} alt="profile picture" />
            <div>
                <p><span className="name">{props.name}</span> sent you a private message</p>
                <p className="time">{props.time}</p>
                <div className="message-box">
                    <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
                </div>
            </div>
        </div>
    );
}
