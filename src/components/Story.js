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
    <>
    {story.url ?<StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.url}</a>
      </StoryTitle>
      <Storymeta>
        <span className="story-by" data-testid="story-by">
          <StoryMetaElement>By: </StoryMetaElement>{story.by}
        </span>
        <span className="story-time" data-testid="story-time">
          <StoryMetaElement>Posted: </StoryMetaElement>{ story.time}
        </span>
      </Storymeta>
    </StoryWrapper> : null}
    </>
  );
};
