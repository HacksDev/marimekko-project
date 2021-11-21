import type {NextPage} from 'next'
import {TopNavigation} from "../../../components/common/TopNavigation";
import {MainContent} from "../../../components/common/MainContent";
import {BottomNavigation} from "../../../components/common/BottomNavigation/BottomNavigation";
import AddIcon from '../../../components/icons/add.svg';

const CreateAdsPage: NextPage = () => {
    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex-col px-2 mb-5 overflow-hidden">
                <div className="card border compact side bg-base-100">
                    <form className="card-body">

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Thing
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="thing" type="text" disabled={true} value={"Kyllikki Unikko"}/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address" type="text" placeholder="Saint-Petersburg"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description" placeholder="Some interesting moments are related to the thing"/>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photos">
                                Photos
                            </label>
                            <div className="w-full space-x-4 flex flex-row">
                            <button onClick={(e) => e.preventDefault()} className="btn btn-outline btn-square btn-primary btn-lg">
                                <AddIcon width={32} height={32} className="fill-current"/>
                            </button>
                            <button onClick={(e) => e.preventDefault()} className="btn btn-outline btn-square btn-primary btn-lg">
                                <AddIcon width={32} height={32} className="fill-current"/>
                            </button>
                            <button onClick={(e) => e.preventDefault()} className="btn btn-outline btn-square btn-primary btn-lg">
                                <AddIcon width={32} height={32} className="fill-current"/>
                            </button>
                            </div>
                        </div>




                        <div className="flex items-center">
                            <button className="btn btn-secondary" type="button">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default CreateAdsPage
