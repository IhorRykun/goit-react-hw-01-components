import { FriendItem } from './friends';
import css from '../friends/friends.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
