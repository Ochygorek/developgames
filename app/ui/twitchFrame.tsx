'use client'

import React, { useEffect, useState } from 'react';

function TwitchFrame() {
  const [parent, setParent] = useState('');

  useEffect(() => {
    // Set the parent dynamically based on the current host
    setParent(window.location.hostname);
  }, []);

  if (!parent) {
    return null; // Render nothing until the parent is set
  }

  const src = `https://player.twitch.tv/?channel=piratesoftware&parent=${parent}`;

  return (
    <div className="relative w-full max-w-[900px] mx-auto aspect-video rounded-[12px] overflow-hidden">
      <iframe
        src={src}
        allowFullScreen
        className="w-full h-full bg-neutral-700"
      ></iframe>
    </div>
  );
}

export default TwitchFrame;
