import React from 'react';
import ServerIcon from '../components/ServerIcon';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { PlusIcon } from '@heroicons/react/outline';

function Home() {
  const [user] = useAuthState(auth);
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
      </div>
    </>
  );
}

export default Home;
