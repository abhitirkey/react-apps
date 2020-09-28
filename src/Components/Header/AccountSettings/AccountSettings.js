import React from 'react'
import { FaCog } from 'react-icons/fa'
 
const AccountSettings = () => {
    return(
        <div className="AccountSettingsContainer">
            <button className="btn-transparent AccountSettingsButton">
                <FaCog/>
            </button>
        </div>
    )
}

export default AccountSettings;