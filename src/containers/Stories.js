import React, { useEffect, useState } from "react";
import { Story } from "../components/Story";
import { getStoryIds } from "../services/hnApi";

export const StoriesContainer = () => {
  const [storyIds, setstoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(storyData => {
      storyData && setstoryIds(storyData);
    });
  }, []);

  return (
    <>
      <h1>Hacker News Stories</h1>
      {storyIds.map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};

export default StoriesContainer;
