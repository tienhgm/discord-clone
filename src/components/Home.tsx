import React from 'react';
import ServerIcon from '../components/ServerIcon';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import {
  ChevronDownIcon,
  CogIcon,
  MicrophoneIcon,
  PhoneIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import Channel from './Channel';
import { collection, addDoc } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from './Chat';
function Home() {
  const [user]: any = useAuthState(auth);
  const [channels] = useCollection(collection(db, 'channels'));
  const handleAddChannel = async () => {
    const channelName = prompt('Enter a new channel name');
    if (channelName) {
      await addDoc(collection(db, 'channels'), {
        channelName: channelName,
      });
    }
  };
  return (
    <>
      {!user && <Navigate to={'/'} />}
      <div className="flex h-screen">
        <div className="flex flex-col p-3 space-y-3 bg-discord_serversBg min-w-max">
          <div className="server-default hover:bg-discord_purple">
            <img src="https://rb.gy/kuaslg" className="h-5" alt="" />
          </div>
          <hr className="w-8 mx-auto border border-gray-700" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <ServerIcon image="https://rb.gy/qidcpp" />
          <ServerIcon image="https://rb.gy/zxo0lz" />
          <div className="server-default hover:bg-discord_green group">
            <PlusIcon className="text-discord_green h-7 group-hover:text-white" />
          </div>
        </div>
        <div className="flex flex-col bg-discord_channelsBg min-w-max">
          <h2 className="flex items-center justify-between p-4 text-sm font-bold text-white border-b border-gray-800 cursor-pointer hover:bg-discord_serverNameHoverBg">
            Official TN Server...
            <ChevronDownIcon className="h-5 ml-2" />
          </h2>
          <div className="flex-grow overflow-y-scroll text-discord_channel scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3 mr-2" />
              <h4 className="font-semibold">Channels</h4>
              <PlusIcon
                onClick={handleAddChannel}
                className="h-6 ml-auto cursor-pointer hover:text-white"
              />
            </div>
            <div className="flex flex-col px-2 mb-4 space-y-2">
              {channels?.docs.map((doc: any) => (
                <Channel
                  className="mb-14"
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between p-2 space-x-8 bg-discord_userSectionBg">
            <div className="flex items-center space-x-1">
              <img
                src={user?.photoURL}
                className="h-10 rounded-full"
                onClick={() => {
                  auth.signOut();
                }}
              />
              <h4 className="text-xs font-medium text-white">
                {user?.displayName}
                <span className="block text-discord_userId">
                  #{user?.uid.substring(0, 4)}
                </span>
              </h4>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="p-2 rounded-md hover:bg-discord_iconHover">
                <MicrophoneIcon className="h-5 icon" />
              </div>
              <div className="p-2 rounded-md hover:bg-discord_iconHover">
                <PhoneIcon className="h-5 icon" />
              </div>
              <div className="p-2 rounded-md hover:bg-discord_iconHover">
                <CogIcon className="h-5 icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow bg-discord_chatBg">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Home;
