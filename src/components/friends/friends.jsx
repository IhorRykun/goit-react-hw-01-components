import PropTypes from 'prop-types';
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

Friend.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.elementType.isRequired,
};
