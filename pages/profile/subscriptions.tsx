import type {NextPage} from 'next'
import {TopNavigation} from "../../components/common/TopNavigation";
import {MainContent} from "../../components/common/MainContent";
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import LocationIcon from '../../components/icons/location.svg';
import {useState} from "react";

const SubscriptionsPage: NextPage = () => {
    const [subs, setSubs] = useState(true);
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex-col px-2 mb-5 overflow-hidden">

                {!subs && (<div className="flex h-96 align-middle justify-center items-center flex-col">
                    <p className="items-center text-xl">There are no elements yet</p>
                </div>)}

                <div className="container">
                    <div className="flex flex-wrap -mx-2">

                        {subs && (
                            <div className="w-1/2 md:w-1/2 xl:w-1/4 p-2">
                                <div className="cursor-pointer c-card border block bg-white overflow-hidden">
                                    <div className="w-full overflow-hidden">
                                        <img src="/images/product_4.jpg" alt="proruct card"/>
                                    </div>
                                    <div className="p-2">
                                        <h2 className="font-bold">
                                            Kasvikuu Unikko
                                        </h2>
                                        <p className="font-extralight text-gray-700 text-xs">2019</p>
                                        <div className="flex justify-between align-bottom flex-row">
                                            <div
                                                className="inline-flex leading-none justify-start text-xs align-top  flex-row mt-1">
                                                <LocationIcon className="mr-0.5" width={12} height={12}/>
                                                Saint-Petersburg
                                            </div>
                                            <p className="font-extralight text-right text-gray-700 text-sm">45,00 €</p>
                                        </div>
                                        <button className="btn btn-block btn-sm"
                                                onClick={() => setSubs(false)}>Unsubscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default SubscriptionsPage
