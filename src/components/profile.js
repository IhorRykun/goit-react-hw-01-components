import users from '../components/data/user.json';

const data = users;

function User() {
  const { username, tag, location, avatar, followers, staviewsts, likes } =
    data;
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="list__item">
          <span className="label">Followers</span>
          <span className="quantity">{data.stats.followers}</span>
        </li>
        <li className="list__item">
          <span className="label">Views</span>
          <span className="quantity">{data.stats.views}</span>
        </li>
        <li className="list__item">
          <span className="label">Likes</span>
          <span className="quantity">{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default User;
