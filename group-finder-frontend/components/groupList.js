import React from 'react';
import GroupCard from './groupCard';

// convert into a single Group component to be rendered by Group List

const GroupList = () => {
  const groups = [
    {
      id: 1,
      title: 'Basketball 5 on 5',
      description:
        'Looking for more people to go to the park to play a game of basketball',
      maxSize: 5,
      currentSize: 3,
      createdBy: 'John Wick',
      createdAt: '9/26/19',
      location: 'Oakland',
      isFull: false,
    },
    {
      id: 2,
      title: 'Fortnite Duos',
      description: 'Looking for 1 more person to play Arena Duos',
      maxSize: 2,
      currentSize: 1,
      location: 'Online',
      createdBy: 'Ninja',
      createdAt: '9/25/19',
      isFull: false,
    },
    {
      id: 3,
      title: 'Twitch Rivals Trios',
      description:
        'Looking for 2 more people to go play in Twitch Rivals Fortnite Tournament at Twitch Con',
      maxSize: 3,
      currentSize: 1,
      createdBy: 'Some Streamer',
      location: 'San Diego',
      createdAt: '9/26/19',
      isFull: false,
    },
  ];
  return (
    <div>
      {groups.map(group => (
        <GroupCard group={group} key={group.id} />
      ))}
    </div>
  );
};

export default GroupList;
