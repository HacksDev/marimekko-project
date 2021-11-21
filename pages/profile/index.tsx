import type {NextPage} from 'next'
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import {TopNavigation} from "../../components/common/TopNavigation";
import {MainContent} from "../../components/common/MainContent";
import DropIcon from '../../components/icons/drop.svg';
import Link from 'next/link';

const ProfilePage: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation/>
            <div className="flex-col px-2 mb-5">

                <div className="card border   compact side bg-base-100">
                    <div className="flex-row items-center space-x-4 card-body">
                        <div>
                            <div className="avatar">
                                <div className="rounded-full w-14 h-14">
                                    <img alt="avatar" src="/images/avatar.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div><h2 className="leading-none card-title">Vladimir Aksenov</h2> <p
                            className="leading-none text-base-content text-opacity-40">240 points</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row items-center mt-2 bg-base-100">
                    <Link href={"/scan"} passHref={true}>
                        <button className="btn btn-primary flex-1">Scan QR</button>
                    </Link>
                    <div className="w-3"/>
                    <Link href={"/profile/qr"} passHref={true}>
                        <button className="btn btn-primary flex-1">My QR</button>
                    </Link>
                </div>

                <div className="w-full card flex flex-col md:flex-row border compact mt-2 side bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <DropIcon width={32} height={32} className="fill-current text-secondary"/>
                        </div>
                        <div className="stat-title">Total water savings</div>
                        <div className="stat-value text-secondary">4000L</div>
                    </div>
                </div>


                <div style={{background: 'white'}}
                     className="collapse card border compact side bg-base-100  mt-2 collapse-arrow w-full">
                    <input type="checkbox"/>
                    <div style={{background: 'white'}} className="collapse-title text-xl font-medium">
                        Notifications <div className="badge bg-primary border-0  ml-2">+3</div>
                    </div>
                    <div style={{background: 'white'}} className="collapse-content">
                        <p><span className="badge badge-secondary badge-xs mr-2"/>Item #15168464 has been added to your
                            Things</p>
                        <p><span className="badge badge-secondary badge-xs mr-2"/>Item #15168465 has been added to your
                            Things</p>
                        <p><span className="badge badge-secondary badge-xs mr-2"/>Item #15168466 has been added to your
                            Things</p>
                        <Link href={'/profile/notifications'} passHref={true}>
                            <button className="mt-4 btn btn-primary btn-block">View all</button>
                        </Link>
                    </div>
                </div>

                <div className="card border  compact mt-2 side bg-base-100">
                    <Link href={'/profile/things'} passHref={true}>
                        <div className="flex-row cursor-pointer items-center card-body">
                            <div className="flex-1"><h2 className="card-title leading-none">Things</h2>
                                <p className="text-base-content text-opacity-40 leading-none">Things you have
                                    purchased</p>
                            </div>
                            <button className="btn btn-square  btn-sm btn-outline btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </Link>
                </div>

                <div className="card border  compact mt-2 side bg-base-100">
                    <div className="flex-row items-center card-body">
                        <div className="flex-1"><h2 className="card-title leading-none">My Ads</h2>
                            <p className="text-base-content text-opacity-40 leading-none">Ads that you have created</p>
                        </div>
                        <button className="btn btn-square  btn-sm btn-outline btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="card border  compact mt-2 side bg-base-100">
                    <div className="flex-row items-center card-body">
                        <div className="flex-1"><h2 className="card-title leading-none">Subscriptions</h2>
                            <p className="text-base-content text-opacity-40 leading-none">Managing subscriptions</p>
                        </div>
                        <button className="btn btn-square  btn-sm btn-outline btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default ProfilePage
