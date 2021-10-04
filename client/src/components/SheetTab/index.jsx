import React, { useState } from 'react';

const SheetTab = (props) => {
    const [tab, setTab] = useState(props.tab);

    return (
        <>
            <div className="ps-2 pe-2" style={{ maxWidth: "1600px", margin: "0 auto" }}>
                <div className="text-center d-md-none d-flex p-1">
                    <input type="text" className="form-control" placeholder="Search for an Item..." id="queryString" name="queryString" aria-label="Search for an Item..." aria-describedby="button-submit" value={props.queryString} onChange={props.handleChange} />
                </div>
                <div className="row g-0">
                    <div className="col-md-3 col-6 p-1 text-md-end">
                        <button className="btn btn-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" >Sheet Tab</button>
                    </div>
                    <div className="col-md-6 p-1 d-md-flex d-none" style={{ width: "50%" }}>
                        <input type="text" className="form-control" placeholder="Search for an Item..." id="queryString" name="queryString" aria-label="Search for an Item..." aria-describedby="button-submit" value={props.queryString} onChange={props.handleChange} />
                    </div>
                    <div className="col-md-3 col-6 p-1 text-md-start text-end dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropDownMenuSort" aria-expanded="false">Sort Items</button>
                        <ul className="dropdown-menu shadow-sm" aria-labelledby="dropDownMenuSort">
                            <li className="dropdown-item newToOld active" onClick={props.NewtoOld}>New to Old</li>
                            <li className="dropdown-item" onClick={props.OldtoNew}>Old to New</li>
                            <li className="dropdown-item" onClick={props.Alphabetical}>Alphabetical by Name</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" style={{ borderRight: "0" }} tabIndex="0" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Sheet Tabs</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {tab.map((tab) => {
                        return (
                            <ul className="list-unstyled" key={tab.title}>
                                <p className="fw-bold">{tab.title}</p>
                                {tab.sheets.map(({ properties }, key) => {
                                    return (
                                        <li className="pt-2 pb-2" key={key}>
                                            <button id={`${properties.title}`} className={`btn tabButtons w-100 fst-normal ${tab.active === properties.title ? "bg-primary text-light" : "bg-light text-secondary"}`} data-bs-dismiss="offcanvas" onClick={() => { props.changeTab(properties.title, tab.spreadSheetId) }}>{properties.title}</button>
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default SheetTab;
