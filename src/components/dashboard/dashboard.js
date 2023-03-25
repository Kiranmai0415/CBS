import React from 'react'
import EmpSideBar from '../../shared/employeesidebar'
import Header from '../../shared/header'

export const Dashboard = () => {
    return (
        <div className="flx   ">
            <div className="posAbs col-12 mt1">
                <Header />
            </div>
            <div>
                <EmpSideBar />
            </div>
            <h1 className='tac fntGreen mv25'><b >Dashboard is coming soon</b></h1>
        </div>
    )
}
