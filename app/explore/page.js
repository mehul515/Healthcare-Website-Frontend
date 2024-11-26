import React from 'react'
import Tabs from './Explore'
import DoctorTab from './DoctorTab'
import CareGiver from './CareGiver'

export default function Home() {
    return (
        <div>
            <div className="container mx-auto mt-10">
                <Tabs
                    tab1Label="Expert Doctors"
                    tab2Label="Trusted Care Givers"
                    tab1Content={<DoctorTab/>}
                    tab2Content={<CareGiver/>}
                />
            </div>
        </div>
    )
}
