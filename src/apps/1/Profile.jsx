import "./styles.css";
import avatatPhoto from "./avatar.png";

function Avatar() {
  return (
    <div className="avatar">
      <img src={avatatPhoto} alt="" />
    </div>
  );
}
function Details() {
  return (
    <div className="profile-details">
      <Avatar />
      <div className="name">Rita Correia</div>
      <div className="place">London</div>
      <hr />
      <div className="social-flex">
        <div>
          <p>80K</p>
          <p>followers</p>
        </div>
        <div>
          <p>803K</p>
          <p>Likes</p>
        </div>
        <div>
          <p>1.4K</p>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
}
export default function Profile() {
  return (
    <div className="profile">
      <div className="banner"></div>
      <Details />
    </div>
  );
}
