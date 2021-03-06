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
        <div className="story-fix">
        <Stories
            stories={allStories}
            defaultInterval={5000}
            width={window.visualViewport.width}
            height={window.visualViewport.height}
            currentIndex={currentStoryIdx}
            onStoryStart={onStoryStart}
            onStoryEnd={onStoryEnd}
        />
        </div>
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
                    <WhiteCrossIcon/>
                </button>
                <h1 hidden>Hello</h1>
                <StoryRenderer  currentStoryIdx={currentStoryIdx} allStories={stories}
                               onStoriesClosed={() => setCurrentStoryIdx(undefined)}/>
            </div>;
        } else {
            return children;
        }
    };

    const MainPageStoryCard = ({story, onClick}: { story: StoryDefinition, onClick: () => void }) => {
        const style: React.CSSProperties = {
            display: "inline-block",
            backgroundImage: `url("${story.url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
        if (!story.viewed) {
            style.borderColor = "blue";
        }
        return <div style={style}
                    className="rounded-full w-16 m-3 h-16 md:w-24 md:h-24 ring ring-secondary ring-offset-base-100 ring-offset-2"
                    onClick={onClick}>
            <span>{story.header}</span>
        </div>;
    };

    const MainPageStoriesReel = () => {
        const children = stories.map((story, i) =>
            <MainPageStoryCard key={i} story={story} onClick={() => setCurrentStoryIdx(i)}/>,
        );
        const style: React.CSSProperties = {
            overflowX: "auto",
            whiteSpace: "nowrap"
        };
        return <div style={style}>
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
            {url: "/images/stories/Story1.png"},
            {url: "/images/stories/Story2.png"},
            {url: "/images/stories/Story3.png"},
            {url: "/images/stories/Story4.png"},
            {url: "/images/stories/Story5.png"},
        ],
    });

    return (
        <MainPageStoriesWrapper>
            <MainContent>
                <TopNavigation/>
                <MainPageStoriesReel/>
                <div className="flex-col px-2 mb-5">


                    <div className="card border p-4 compact side bg-base-100">

                        <h1 className="text-lg text-secondary">Concept</h1>
                        <p>
                            A service created to sell Marimekko preloved goods using NFT technology in order to prove goods originality and track their lifecycle.
                        </p>

                        <h1 className="text-lg text-secondary mt-4">Service purpose</h1>
                        <ul>
                            <li>
                                <div className="badge badge-primary mr-1 badge-xs"/>
                                Make a purchase of expensive and quality goods more reasonable from a customer&#39;s viewpoint.</li>
                            <li>
                                <div className="badge badge-primary mr-1 badge-xs"/>
                                Make the apparel retail industry more environmentally friendly by encouraging hand-to-market purchases instead of buying new goods.</li>
                            <li>
                                <div className="badge badge-primary mr-1 badge-xs"/>
                                Better dispose of sales the way goods will not gather dust in closets.</li>
                            <li>
                                <div className="badge badge-primary mr-1 badge-xs"/>
                                Build a loyal brand community.</li>
                        </ul>
                    </div>


                </div>

                <BottomNavigation/>
            </MainContent>
        </MainPageStoriesWrapper>
    );
};

export default Home;
