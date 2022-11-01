import { User } from './profile/profile';
import profile from '../data/user';
import { StaticId } from './static/Statistics';
import data from '../data/data';
import friends from '../data/friends';
import { FriendsItem } from './friends/friendsItem';
import { Transactions } from './transaction/transaction';
import transactions from '../data/transact';

export const App = () => {
  return (
    <div>
      <User
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <StaticId title="Upload stats" stats={data} />
      <FriendsItem friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
