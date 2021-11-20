import type {NextPage} from 'next'
import {BottomNavigation} from "../components/common/BottomNavigation/BottomNavigation";
import {TopNavigation} from "../components/common/TopNavigation";
import {MainContent} from "../components/common/MainContent";

const Home: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation/>
            <div className="flex-col px-2 mb-5">


                <div className="min-h-16" />
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default Home
