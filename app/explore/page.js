import React from 'react'
import Tabs from './Explore'
import DoctorTab from './DoctorTab'
import CareGiver from './CareGiver'

export default function Home() {
    return (
        <div>
            <div className="container mx-auto mt-10">
                <Tabs
                    tab1Label="Our Family of Doctors"
                    tab2Label="Our Family of Care Givers"
                    tab1Content={<DoctorTab/>}
                    tab2Content={<CareGiver/>}
                />
            </div>
        </div>
    )
}
