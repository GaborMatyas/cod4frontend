import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import useOnClickOutside from '@hooks/click-outside.hook'

import { selectSidePanelOpened } from '@store/app/app.selectors';
import { toggleSidePanel } from '@store/app/app.slice';
import Menu from '@app/components/menu/menu';


import './sidepanel.scss'

const SidePanel = () => {
    const dispatch = useDispatch();
    const ref = useRef(null)
    const isSidepanelOpened = useSelector(selectSidePanelOpened);


    let handleClickOutside = () => {
        dispatch(toggleSidePanel());
    }

    useOnClickOutside(ref, handleClickOutside, isSidepanelOpened)

    return (
        <>
            <div className={`dark-overlay ${isSidepanelOpened ? 'active' : ''}`}/>
            <div ref={ref} className={`side-panel ${isSidepanelOpened ? 'active' : ''}`}>
                <button className="close" onClick={()=>dispatch(toggleSidePanel())}/>
                <Menu />
            </div>
        </>
    )
}

export default SidePanel;
