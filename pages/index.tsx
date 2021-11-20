import type {NextPage} from "next";
import React, {useState} from "react";
import Stories from "react-insta-stories";
import {BottomNavigation} from "../components/common/BottomNavigation/BottomNavigation";
import {MainContent} from "../components/common/MainContent";
import {TopNavigation} from "../components/common/TopNavigation";
import WhiteCrossIcon from "../components/icons/white-cross.svg";

// TODO: typing
type StoryDefinition = any

interface StoryRendererProps {
    currentStoryIdx: number;
    allStories: StoryDefinition[];
    onStoriesClosed?: () => void;
}

const StoryRenderer = ({currentStoryIdx, allStories, onStoriesClosed}: StoryRendererProps) => {
    function onStoryStart(i: number) {
        if (i >= allStories.length) {
            onStoriesClosed?.();
        }
    }

    function onStoryEnd(i: number) {
        if (i === allStories.length - 1) {
            onStoriesClosed?.();
        }
    }

    return (
        <Stories
            stories={allStories}
            defaultInterval={1500}
            width={window.visualViewport.width}
            height={window.visualViewport.height}
            currentIndex={currentStoryIdx}
            onStoryStart={onStoryStart}
            onStoryEnd={onStoryEnd}
        />
    );
};

const useMainPageStories = ({stories}: { stories: StoryDefinition[] }) => {
    const [currentStoryIdx, setCurrentStoryIdx] = useState<number | undefined>();

    const MainPageStoriesWrapper = ({children}: { children: React.ReactElement | null }) => {
        if (typeof currentStoryIdx !== "undefined") {
            return <div className="main-page-stories-wrapper">
                <button
                    style={{position: "absolute", zIndex: 1000000000, right: "12px", top: "20px", width: "24px"}}
                    onClick={() => setCurrentStoryIdx(undefined)}
                >
                    <WhiteCrossIcon />
                </button>
                <StoryRenderer currentStoryIdx={currentStoryIdx} allStories={stories}
                               onStoriesClosed={() => setCurrentStoryIdx(undefined)} />
            </div>;
        } else {
            return children;
        }
    };

    const MainPageStoryCard = ({story, onClick}: { story: StoryDefinition, onClick: () => void }) => {
        const style: React.CSSProperties = {
            display: "inline-block",
            border: "1px solid",
            borderRadius: '6px',
            width: "120px",
            height: "120px",
            textOverflow: "ellipsis",
            padding: "6px",
            margin: "10px",
            backgroundImage: `url("${story.url}")`,
            backgroundSize: 'contain'
        };
        if (!story.viewed) {
            style.borderColor = "blue";
        }
        return <div style={style} onClick={onClick}>
            <span>{story.header}</span>
        </div>;
    };

    const MainPageStoriesReel = () => {
        const children = stories.map((story, i) =>
            <MainPageStoryCard key={i} story={story} onClick={() => setCurrentStoryIdx(i)} />,
        );
        const style: React.CSSProperties = {
            overflowX: "auto",
            margin: "16px",
            whiteSpace: "nowrap"
        };
        return <div className="main-page-stories-reel" style={style}>
            {children}
        </div>;
    };

    return {
        MainPageStoriesWrapper,
        MainPageStoriesReel,
    };
};

const Home: NextPage = () => {
    const {MainPageStoriesWrapper, MainPageStoriesReel} = useMainPageStories({
        stories: [
            {
                url: "/images/kermit.jpeg",
                header: "Nice Cock",
                viewed: true
            },
            {
                url: "/images/kermit.jpeg",
                header: "Awesome Balls",
            },
            {
                url: "/images/kermit.jpeg",
                header: "Говно",
            },
            {
                url: "/images/kermit.jpeg",
                header: "Залупа",
            },
            {
                url: "/images/kermit.jpeg",
                header: "Пенис",
            },
            {
                url: "/images/kermit.jpeg",
                header: "Хер",
            },
        ],
    });

    return (
        <MainPageStoriesWrapper>
            <MainContent>
                <TopNavigation />
                <MainPageStoriesReel />
                <div className="flex-col px-2 mb-5">
                    <div className="card">Hello</div>
                </div>
                <BottomNavigation />
            </MainContent>
        </MainPageStoriesWrapper>
    );
};

export default Home;
