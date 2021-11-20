import type {NextPage} from 'next'
import {BottomNavigation} from "../components/common/BottomNavigation/BottomNavigation";
import {TopNavigation} from "../components/common/TopNavigation";
import {MainContent} from "../components/common/MainContent";

const Profile: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation/>
            <div className="flex-col px-2 mb-5">

                <div className="card border  rounded compact side bg-base-100">
                    <div className="flex-row items-center space-x-4 card-body">
                        <div>
                            <div className="avatar">
                                <div className="rounded-full w-14 h-14 shadow">
                                    <img alt="img"  src="https://i.pravatar.cc/500?img=32"/>
                                </div>
                            </div>
                        </div>
                        <div><h2 className="leading-none card-title">Janis Johnson</h2> <p
                            className="leading-none text-base-content text-opacity-40">Fucking marketing specialist</p></div>
                    </div>
                </div>

                <div className="w-full card flex flex-col md:flex-row border  rounded  compact mt-2 side bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-8 h-8 text-primary fill-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </div>
                        <div className="stat-title">Total Poins</div>
                        <div className="stat-value text-primary">235</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-8 h-8 fill-current text-secondary">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <div className="stat-title">Total energy savings</div>
                        <div className="stat-value text-2xl text-secondary">2.1kW</div>
                    </div>
                </div>



                <div style={{background: 'white'}} className="collapse card border  rounded  compact side bg-base-100  mt-2 collapse-arrow w-full">
                    <input type="checkbox"/>
                        <div style={{background: 'white'}} className="collapse-title text-xl font-medium">
                            Notifications <div className="badge bg-accent border-0  ml-2">+999</div>
                        </div>
                        <div style={{background: 'white'}} className="collapse-content">
                            <p><span className="badge badge-secondary badge-xs mr-2"/>Add new item of leather shorts</p>
                        </div>
                </div>

                <div className="card border  rounded  compact mt-2 side bg-base-100">
                    <div className="flex-row items-center card-body">
                        <div className="flex-1"><h2 className="card-title leading-none">Account Information</h2>
                            <p className="text-base-content text-opacity-40 leading-none">Email, Phone number, Name</p>
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

                <div className="card border  rounded  compact mt-2 side bg-base-100">
                    <div className="flex-row items-center card-body">
                        <div className="flex-1"><h2 className="card-title leading-none">My Swaps</h2>
                            <p className="text-base-content text-opacity-40 leading-none">My fucking s(laves)waps</p>
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

                <div className="card border  rounded  compact mt-2 side bg-base-100">
                    <div className="flex-row items-center card-body">
                        <div className="flex-1"><h2 className="card-title leading-none">Things</h2>
                            <p className="text-base-content text-opacity-40 leading-none">My fucking things</p>
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

                <div className="card border  rounded  compact mt-2 side bg-base-100">
                    <div className="flex-row items-center card-body">
                        <div className="flex-1"><h2 className="card-title leading-none">My Swaps</h2>
                            <p className="text-base-content text-opacity-40 leading-none">My fucking s(laves)waps</p>
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

                <div className="min-h-16" />


            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default Profile
