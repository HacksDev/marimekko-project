import type {NextPage} from 'next'
import {TopNavigation} from "../components/common/TopNavigation";
import {MainContent} from "../components/common/MainContent";
import {BottomNavigation} from "../components/common/BottomNavigation/BottomNavigation";

const Board: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation/>
            <div className="flex-col px-2 mb-5">
                <button className="btn btn-secondary btn-outline btn-sm btn-block">Add new</button>

                <div className="min-h-16" />
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default Board
