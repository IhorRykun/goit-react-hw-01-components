import { User } from './profile/profile';
import profile from '../data/user';

export const App = () => {
  return (
    <User
      username={profile.username}
      tag={profile.tag}
      location={profile.location}
      avatar={profile.avatar}
      stats={profile.stats}
    />
  );
};
