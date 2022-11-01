import { FriendList } from './friends';
import css from '../friends/friends.module.css';

export const FriendsItem = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendList
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
