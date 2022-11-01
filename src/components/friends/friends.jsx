import PropTypes from 'prop-types';
import css from '../friends/friends.module.css';

export const FriendList = ({ isOnline, id, avatar, name }) => {
  return (
    <li
      className={css.item}
      key={id}
      style={{
        backgroundColor: isOnline ? '#08dd08' : 'coral',
        color: isOnline ? 'blue' : 'red',
      }}
    >
      <span className={css.isOnline}>{isOnline ? 'onLine' : 'offLine'}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendList.protoTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.elementType.isRequired,
};
