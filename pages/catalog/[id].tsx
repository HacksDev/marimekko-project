import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {TopNavigation} from "../../components/common/TopNavigation";
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import {MainContent} from "../../components/common/MainContent";

const CatalogModelPage: NextPage = () => {
    const router = useRouter();
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex-col px-2 mb-5 overflow-hidden">
            <h1>{router.query.id}</h1>
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default CatalogModelPage
