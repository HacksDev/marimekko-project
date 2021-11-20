import type {NextPage} from 'next'
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import {TopNavigation} from "../../components/common/TopNavigation";
import {MainContent} from "../../components/common/MainContent";
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation/>
            <div className="flex-col px-2 mb-5">

                <div className="container">
                    <div className="flex flex-wrap -mx-2">


                        <div className="w-1/2 md:w-1/2 xl:w-1/4 p-2">
                            <Link passHref={true} href="/catalog/123">
                               <div className="cursor-pointer c-card border block bg-white rounded-lg overflow-hidden">
                                <div className="w-full overflow-hidden">
                                    <img className="h-full" src="/images/product_1.jpg" alt="proruct card"/>
                                </div>
                                <div className="p-2">
                                    <h2 className="font-bold">Kyllikki Unikko</h2>
                                    <div className="flex justify-between align-bottom flex-row">
                                        <p className="font-extralight text-right text-gray-700 text-sm">Skirt</p>
                                        <p className="font-extralight text-right text-gray-700 text-sm">45,00 €</p>
                                    </div>


                                </div>
                               </div>
                            </Link>
                        </div>

                        <div className="w-1/2 md:w-1/2 xl:w-1/4 p-2">
                            <Link passHref={true} href="/catalog/123">
                                <div className="cursor-pointer c-card border block bg-white rounded-lg overflow-hidden">
                                    <div className="w-full overflow-hidden">
                                        <img className="h-full" src="/images/product_1.jpg" alt="proruct card"/>
                                    </div>
                                    <div className="p-2">
                                        <h2 className="font-bold">Kyllikki Unikko</h2>
                                        <div className="flex justify-between align-bottom flex-row">
                                            <p className="font-extralight text-right text-gray-700 text-sm">Skirt</p>
                                            <p className="font-extralight text-right text-gray-700 text-sm">45,00 €</p>
                                        </div>


                                    </div>
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>


                <div className="min-h-16"/>
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default Home
