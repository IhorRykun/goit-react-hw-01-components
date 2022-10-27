import users from '../components/data/user.json';

const data = users;

function User() {
  const { username, tag, location, avatar, followers, staviewsts, likes } =
    data;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li class="list__item">
          <span class="label">Followers</span>
          <span class="quantity">{data.stats.followers}</span>
        </li>
        <li class="list__item">
          <span class="label">Views</span>
          <span class="quantity">{data.stats.views}</span>
        </li>
        <li class="list__item">
          <span class="label">Likes</span>
          <span class="quantity">{data.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default User;
