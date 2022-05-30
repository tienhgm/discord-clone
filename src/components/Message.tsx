import React from 'react';
import moment from 'moment';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { TrashIcon } from '@heroicons/react/outline';
interface Message {
  id: string;
  message: string;
  timestamp: any;
  name: string;
  photoUrl: string;
  email: string;
}

function Message({ id, message, timestamp, name, photoUrl, email }: Message) {
  const [user] = useAuthState(auth);
  return (
    <div className="flex items-center p-1 my-5 mr-2 hover:bg-discord_messageBg group">
      <img
        src={photoUrl}
        className="h-10 mr-3 rounded-full cursor-pointer hover:shadow-2xl"
        alt=""
      />
      <div className="flex flex-col">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="text-sm text-white cursor-pointer hover:underline">
            {name}
          </span>
          <span className="text-xs text-discord_messageTimestamp">
            {moment(timestamp?.toDate().getTime()).format('lll')}
          </span>
        </h4>
        <p className="text-sm text-discord_message">{message}</p>
      </div>
      {user?.email === email && (
        <div className="p-1 ml-auto rounded-sm cursor-pointer hover:bg-discord_deleteIconBg text-discord_deleteIconBg hover:text-white">
          <TrashIcon className="h-5 group-hover:inline" />
        </div>
      )}
    </div>
  );
}

export default Message;
