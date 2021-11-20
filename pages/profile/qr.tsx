import type {NextPage} from 'next'
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import {TopNavigation} from "../../components/common/TopNavigation";
import {MainContent} from "../../components/common/MainContent";

const MyQRPage: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex-col px-2 mb-5">
                <div className="card">MyQR</div>

            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default MyQRPage
