import React, { useEffect, useState } from 'react'
import "./FooterCenter.scss"
import { layLogoRap } from '../../../../Redux/action/HeThongRapAction'

export default function FooterCenter() {
    let [logoRap, setLogoRap] = useState([])
    useEffect(() => {
        layLogoRap(setLogoRap)
    }, [])
    // console.log(logoRap)
    const renderLogo = () => {
        return logoRap.map((item, index) => {
            return <div className='logo col-6' key={index}>
                <img className='img-fluid' src={item.logo} alt="" />
            </div>
        })
    }
    return (
        <div>
            <h1 className='title_center'>NHÀ TÀI TRỢ CHÍNH</h1>
            <div className="logo__center row">
                {renderLogo()}
            </div>
        </div>
    )
}
