import { User } from './profile/profile';
import profile from '../data/user';
import { StaticId } from './static/Statistics';
import data from '../data/data';
import friends from '../data/friends';
import { Friend } from './friends/friends';

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
      <Friend friends={friends[3]} />
    </div>
  );
};
