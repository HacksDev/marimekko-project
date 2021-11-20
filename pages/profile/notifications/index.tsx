import {NextPage} from "next";
import {MainContent} from "../../../components/common/MainContent";
import {TopNavigation} from "../../../components/common/TopNavigation";
import {BottomNavigation} from "../../../components/common/BottomNavigation/BottomNavigation";

const NotificationPage: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex flex-col px-2 mb-5">


                <div className="flex flex-col w-full">
                    <div className="card border compact mt-2 side bg-base-100">
                        <div className="flex-col md:flex-row  card-body">
                            <div className="flex-1">
                                <h2 className="card-title text-secondary leading-none">
                                    Confirm the sale operation
                                </h2>
                                <p className="text-base-content mb-2 md:mb-0 text-opacity-40 leading-none">
                                    User #1651684 has scanned your thing!
                                </p>
                            </div>
                            <div className="flex flex-row">
                            <button className="btn btn-secondary">Approve</button>
                            <div className="w-1"/>
                            <button className="btn btn-primary">Reject</button>
                            </div>
                        </div>
                    </div>
                    <div className="divider">Past notifications</div>
                    <div className="card border compact mt-2 side bg-base-100">
                        <div className="flex-col md:flex-row  card-body">
                            <div className="flex-1">
                                <h2 className="card-title text-secondary leading-none">
                                    Confirm the sale operation
                                </h2>
                                <p className="text-base-content mb-2 md:mb-0 text-opacity-40 leading-none">
                                    User #1651684 has scanned your thing!
                                </p>
                            </div>
                            <div className="flex flex-row">
                                <button className="btn btn-secondary">Approve</button>
                                <div className="w-1"/>
                                <button className="btn btn-primary">Reject</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default NotificationPage
