import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryWrapper,
  StoryTitle,
  Storymeta,
  StoryMetaElement
} from "../styles/StoryStyles";
export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => {
      setStory(data);
    });
  }, []);

  return (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.url}</a>
      </StoryTitle>
      <Storymeta>
        <span className="story-by" data-testid="story-by">
          <StoryMetaElement>{story.by}</StoryMetaElement>
        </span>
      </Storymeta>
      By: <p></p>
      Posted: <p>{story.time}</p>
    </StoryWrapper>
  );
};
