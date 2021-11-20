import type {NextPage} from 'next'
import {BottomNavigation} from "../components/common/BottomNavigation/BottomNavigation";
import {Footer} from "../components/common/Footer";
import {TopNavigation} from "../components/common/TopNavigation";
import {MainContent} from "../components/common/MainContent";

const Home: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation/>
            <div className="flex-col px-2 mb-5">
                <div className="card">Hqllo</div>

            </div>
            <Footer/>
            <BottomNavigation/>
        </MainContent>
    )
}

export default Home
