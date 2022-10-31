import ProtoTypes from 'prop-types';
import css from '../profile/profile.module.css';

export const User = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.list__item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.list__item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.list__item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.ProtoTypes = {
  user: ProtoTypes.exact({
    username: ProtoTypes.string.isRequired,
    tag: ProtoTypes.string.isRequired,
    location: ProtoTypes.string.isRequired,
    avatar: ProtoTypes.elementType.isRequired,
    followers: ProtoTypes.number.isRequired,
    views: ProtoTypes.number.isRequired,
    likes: ProtoTypes.number.isRequired,
  }),
};
