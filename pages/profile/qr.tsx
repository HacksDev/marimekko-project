import type {NextPage} from 'next';
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import {TopNavigation} from "../../components/common/TopNavigation";
import {MainContent} from "../../components/common/MainContent";

const MyQRPage: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex flex-col px-2 mb-5">
                <div className="card border   compact side bg-base-100">
                    <div className="flex flex-col items-center space-x-4 card-body">
                        <h1 className="text-2xl w-full text-center">Your QR identifier</h1>
                        <img alt="QR" src="/images/my_qr.png" className="w-full max-h-96 object-contain"/>
                        <p className="text-md w-full text-center">Your unique identifier used when registering
                            purchases</p>
                    </div>
                </div>

            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default MyQRPage
