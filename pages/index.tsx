import type {NextPage} from 'next'
import {BottomNavigation} from "../components/common/BottomNavigation";
import {Footer} from "../components/common/Footer";
import {TopNavigation} from "../components/common/TopNavigation";
import {MainContent} from "../components/common/MainContent";

const Home: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation/>
            <div className="min-h-screen"/>
            <BottomNavigation/>
            <Footer/>
        </MainContent>
    )
}

export default Home
