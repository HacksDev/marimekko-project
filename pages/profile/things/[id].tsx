import Link from 'next/link';
import type {NextPage} from 'next'
import {TopNavigation} from "../../../components/common/TopNavigation";
import {BottomNavigation} from "../../../components/common/BottomNavigation/BottomNavigation";
import {MainContent} from "../../../components/common/MainContent";
import LocationIcon from "../../../components/icons/location.svg";
import TickIcon from '../../../components/icons/tick.svg';

const ThingModalPage: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex-col px-2 mb-5 overflow-hidden">
                <div className="w-full border bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 ">
                        <img className="object-center object-cover w-full h-full"
                             src="/images/product_1.jpg" alt="photo"/>
                    </div>
                    <div className="w-full relative md:w-3/5 text-left p-6 md:p-4 space-y-2">
                        <p className="text-xl mt-0 text-gray-700 font-bold leading-none">Kyllikki Unikko
                            <span className="ml-2 badge badge-success">
                                <TickIcon className="inline-block w-4 h-4 mr-2 fill-current" />
                                Verified
                            </span>
                        </p>

                        <p className="inline-flex leading-none justify-start text-xs align-top  flex-row">
                            <LocationIcon className="mr-0.5" width={12} height={12}/>
                            Saint-Petersburg
                        </p>

                        <p className="font-extralight text-gray-700 leading-none text-xs">45,00 €</p>

                        <p className="text-base text-gray-400 leading-none font-normal">Skirt</p>


                        <div className="flex flex-row align-baseline items-center">
                            <span className="text-gray-400 leading-none mr-2">Color: </span>
                            <input type="radio" name="opt" defaultChecked={true} className="radio radio-lg mr-1" value="3"/>
                        </div>

                        <p className="mt-3 text-gray-400">Materials: 100 % Polyester</p>

                        <div className="btn-group mt-3">
                            <button className="btn btn-outline btn-sm btn-active">XS</button>
                        </div>

                        <p className="text-base leading-relaxed text-gray-500 font-normal">Marimekko’s famous poppy
                            pattern Unikko was born in 1964 in a time when the design house’s collections featured
                            mostly abstract prints. Designer Maija Isola wanted to create something interesting from
                            this organic theme and designed an entire range of floral prints. Today, the iconic flower
                            represents creativity.</p>

                        <ol className="steps text-gray-600 steps-vertical">
                            <li className="step step-primary">
                                <h4>10.12.3025 &mdash; Produced</h4>
                            </li>
                            <li className="step step-primary">
                                <h4>10.12.3026 &mdash; Sold</h4>
                            </li>
                            <li className="step step-primary">
                                <h4>15.12.3026 &mdash; Re-Sold</h4>
                            </li>
                        </ol>

                        <Link href="/profile/ads/create" passHref={true}>
                            <button className="btn btn-block btn-secondary">Create Ads</button>
                        </Link>


                    </div>
                </div>
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default ThingModalPage
