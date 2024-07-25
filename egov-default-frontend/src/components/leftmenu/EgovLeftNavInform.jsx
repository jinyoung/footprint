import React from 'react';

import URL from 'constants/url';
import { NavLink } from 'react-router-dom';

function EgovLeftNavInform() { 
    const lastSegment = window.parent.location.href.split('/').pop();
    
    if (lastSegment === 'codes'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>CodeService</h2>
                    <ul className="menu4">
                        <li><NavLink to="/codeService/codes" className={({ isActive }) => (isActive ? "cur" : "")}>Code</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'metalOrders'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>MetalOrderService</h2>
                    <ul className="menu4">
                        <li><NavLink to="/metalOrderService/metalOrders" className={({ isActive }) => (isActive ? "cur" : "")}>MetalOrder</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'molds'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>MoldService</h2>
                    <ul className="menu4">
                        <li><NavLink to="/moldService/molds" className={({ isActive }) => (isActive ? "cur" : "")}>Mold</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    return null;
}

export default React.memo(EgovLeftNavInform);