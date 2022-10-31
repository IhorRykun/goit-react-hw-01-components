import ProTypes from 'prop-types';
import css from '../friends/friends.module.css';

export const Friend = ({ friends: { isOnline, id, avatar, name } }) => {
  return (
    <ul className={css.list}>
      <li className={css.item} key={id}>
        <span className={css.isOnline}>{isOnline}</span>
        <img src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    </ul>
  );
};

Friend.ProTypes = {
  friends: ProTypes.exact({
    id: ProTypes.number.isRequired,
    isOnline: ProTypes.string.isRequired,
    name: ProTypes.string.isRequired,
    avatar: ProTypes.elementType.isRequired,
  }),
};
