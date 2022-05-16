import React from 'react';
interface Image {
  image: string;
}
function ServerIcon({ image }: Image) {
  return (
    <img
      src={image}
      alt=""
      className="h-12 transition-all duration-100 ease-out rounded-full cursor-pointer hover:rounded-2xl"
    />
  );
}

export default ServerIcon;
