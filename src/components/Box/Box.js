import "./box.css"

export default function Box() {
    return (
        <div className="box">
            <img src="./images/avatar-mark-webber.webp" alt="profile picture" />
            <div>
                <p><span className="name">Mark Webber</span> reacted to your recent post <span className="event">My first tournament today!</span></p>
                <p className="time">1m ago</p>
            </div>
        </div>
    );
}
