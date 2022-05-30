import React, { useRef } from 'react';
import {
  BellIcon,
  ChatIcon,
  EmojiHappyIcon,
  GiftIcon,
  HashtagIcon,
  InboxIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { useAppSelector } from 'app/hook';
import { selectChannelId, selectChannelName } from 'features/channelSlice';
import {
  serverTimestamp,
  addDoc,
  collection,
  query,
  orderBy,
} from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Message from './Message';
function Chat() {
  const channelId = useAppSelector(selectChannelId);
  const channelName = useAppSelector(selectChannelName);
  const [user] = useAuthState(auth);
  const inputRef = useRef<any>('');
  const chatRef = useRef<any>(null);
  const [messages]: any = useCollection(
    channelId &&
      query(
        collection(db, 'channels', channelId, 'messages'),
        orderBy('timestamp', 'asc')
      )
  );
  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const sendMessage = async (e: any) => {
    e.preventDefault();
    const docRef = collection(db, 'channels', channelId, 'messages');
    if (!!inputRef.current.value) {
      await addDoc(docRef, {
        timestamp: serverTimestamp(),
        message: inputRef.current.value,
        name: user?.displayName,
        photoUrl: user?.photoURL,
        emal: user?.email,
      });
      inputRef.current.value = '';
      scrollToBottom();
    }
  };
  return (
    <div className="flex flex-col h-screen ">
      <header className="flex items-center justify-between p-4 -mt-1 space-x-5 border-b border-gray-800 ">
        <div className="flex items-center space-x-1">
          <HashtagIcon className="h-6 text-discord_chatHeaderIcon" />
          <div className="font-semibold text-white">{channelName}</div>
        </div>
        <div className="flex items-center space-x-3">
          <BellIcon className="icon" />
          <ChatIcon className="icon" />
          <UserIcon className="icon" />
          <div className="flex p-1 text-xs rounded-md bg-discord_chatHeaderInputBg ">
            <input
              type="text"
              placeholder="search"
              className="pl-1 text-white bg-transparent focus:outline-none placeholder:bg-discord_chatHeader"
            />
            <SearchIcon className="h-4 mr-1 text-discord_chatHeader" />
          </div>
          <InboxIcon className="icon" />
          <QuestionMarkCircleIcon className="icon" />
        </div>
      </header>
      <main className="flex-grow overflow-y-scroll scrollbar-hide">
        {messages && (
          <>
            {messages?.docs.map((doc: any) => {
              const { message, timestamp, name, photoUrl, emal } = doc.data();
              console.log(doc.data())
              return (
                <Message
                  key={Math.random()}
                  id={doc.id}
                  message={message}
                  timestamp={timestamp}
                  name={name}
                  photoUrl={photoUrl}
                  email={emal}
                />
              );
            })}
            <div ref={chatRef} className="pb-16"></div>
          </>
        )}
      </main>
      <div className="flex items-center p-2.5 mx-5 mb-7 rounded-lg bg-discord_chatInputBg">
        <PlusCircleIcon className="mr-4 icon" />
        <form className="flex-grow">
          <input
            type="text"
            disabled={!channelId}
            placeholder={
              channelId ? `Message #${channelName}` : 'Select a channel'
            }
            ref={inputRef}
            className="w-full bg-transparent focus:outline-none text-discord_chatInputText placeholder-discord_chatInput"
          />
          <button hidden type="submit" onClick={sendMessage}>
            Send
          </button>
        </form>
        <GiftIcon className="mr-2 icon" />
        <EmojiHappyIcon className="icon" />
      </div>
    </div>
  );
}

export default Chat;
