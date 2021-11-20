import type {NextPage} from 'next'
import {BottomNavigation} from "../../components/common/BottomNavigation/BottomNavigation";
import {TopNavigation} from "../../components/common/TopNavigation";
import {MainContent} from "../../components/common/MainContent";
import {useEffect} from "react";
import {useRouter} from "next/router";


let scanMockTimer: any;
const ScanQRCodePage: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        scanMockTimer = setTimeout(() => router.push('/scan/123'), 5000)
        return () => clearTimeout(scanMockTimer)
    }, [router])

    return (
        <MainContent>
            <TopNavigation showBackArrow={true}/>
            <div className="flex flex-col px-2 mb-5">
                <div className="card border   compact side bg-base-100">
                    <div className="flex flex-col items-center space-x-4 card-body">
                        <h1 className="text-2xl w-full text-center">Scan QR</h1>
                        <button className="btn btn-ghost btn-lg btn-circle loading"/>
                        <h1 className="text-lg w-full text-center">Simulation of scanning a real QR code...</h1>
                    </div>
                </div>

            </div>
            <BottomNavigation/>
        </MainContent>
    )
}

export default ScanQRCodePage
