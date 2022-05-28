import React from 'react';
import { HashtagIcon } from '@heroicons/react/outline';
import { useAppDispatch } from 'app/hook';
import { useNavigate } from 'react-router-dom';
import { setChannelInfo } from 'features/channelSlice';
interface Channel {
  className: string;
  id: string;
  channelName: string;
}
function Channel({ id, channelName }: Channel) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const setChannel = () => {
      dispatch(setChannelInfo({
          channelId: id,
          channelName: channelName
      }))
      navigate(`/channels/${id}`)
  };
  return (
    <div
      onClick={setChannel}
      className="flex items-center p-1 font-medium rounded-md cursor-pointer hover:bg-discord_channelHoverBg hover:text-white"
    >
      <HashtagIcon className="h-5 mr-2" /> {channelName}
    </div>
  );
}

export default Channel;
