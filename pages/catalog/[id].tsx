import type {NextPage} from 'next'
import {useRouter} from "next/router";
import {TopNavigation} from "../../components/common/TopNavigation";
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import {MainContent} from "../../components/common/MainContent";
import Link from "next/link";
import {useState} from "react";

const CatalogModelPage: NextPage = () => {
    const router = useRouter();
    const [subscribed, setSubscribed] = useState(false);
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex-col px-2 mb-5 overflow-hidden">
                <div className="w-full border bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 ">
                        <img className="object-center object-cover w-full h-full"
                             src="/images/product_1.jpg" alt="photo"/>
                    </div>
                    <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                        <p className="text-xl text-gray-700 font-bold leading-none">Kyllikki Unikko</p>
                        <p className="font-extralight text-gray-700 leading-none text-xs">450,00 €</p>
                        <p className="text-base text-gray-400 leading-none font-normal">Skirt</p>


                        <div className="flex flex-row align-baseline items-center">
                            <span className="text-gray-400 leading-none mr-2">Color: </span>
                            <input type="radio" name="opt" checked={true} className="radio radio-lg mr-1 radio-primary"
                                   value="1"/>
                            <input type="radio" name="opt" checked={true}
                                   className="radio radio-lg mr-1 radio-secondary"
                                   value="2"/>
                            <input type="radio" name="opt" checked={true} className="radio radio-lg mr-1" value="3"/>
                        </div>

                        <p className="mt-3 text-gray-400">Materials: 100 % Polyester</p>

                        <div className="btn-group mt-3">
                            <button className="btn btn-outline btn-sm btn-active">XS</button>
                            <button className="btn btn-outline btn-sm">S</button>
                            <button className="btn btn-outline btn-sm">M</button>
                            <button className="btn btn-outline btn-sm">L</button>
                        </div>

                        <p className="text-base leading-relaxed text-gray-500 font-normal">Marimekko’s famous poppy
                            pattern Unikko was born in 1964 in a time when the design house’s collections featured
                            mostly abstract prints. Designer Maija Isola wanted to create something interesting from
                            this organic theme and designed an entire range of floral prints. Today, the iconic flower
                            represents creativity.</p>


                        <button onClick={() => setSubscribed((value) => !value)}
                                className={`btn btn-block  btn-secondary ${!subscribed ? 'btn-outline' : ''}`}>
                            {!subscribed ? "Notify me!" : "Subscribed!"}
                        </button>
                        {subscribed && <p className="text-center text-secondary leading-none text-xs">
                            You will receive a notification if this model appears in the market. You can manage subscriptions in your profile.
                        </p>}

                        <Link href="https://www.marimekko.com/" passHref={true}>
                            <a target="_blank" rel="noreferrer" className="btn btn-block btn-secondary">Buy 45,00 €</a>
                        </Link>

                    </div>
                </div>
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default CatalogModelPage
