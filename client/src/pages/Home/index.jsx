import React from "react";
import { Link } from "react-router-dom";

const home = () => {
    return (
        <div className="container">
            <div>
                <div className="rounded" style={{background:"#FDFDFD", boxShadow:"0px 1px 2px rgb(0 0 0/40%)"}}>
                    <div className="p-sm-3 p-2">
                        <div className="header-card mt-4 ps-sm-2">
                            <h1 className="text-muted fw-bold">Google Sheets API Demo</h1>
                        </div>
                        <div className="body-card mb-5 text-muted ps-sm-2">
                            <p className="fs-5 lh-base">A demo that utilizes <strong>Google Sheet API</strong> and <strong>Google Drive API</strong>.
                            Demonstrating adding information and organizing that information without the use of a database.
                            </p>
                            <Link to="/form">
                                <button type="button" className="btn btn-outline-secondary btn-lg p-2">Try it Now !</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row g-0 mt-3">
                    <div className="col-12 col-md-6 pe-0 pe-md-1">
                        <div className="bg-primary rounded p-3" style={{boxShadow:"0px 1px 2px rgb(0 0 0/40%)",}}>
                            <h3 className="text-light">
                                Form Utilization
                            </h3>
                            <p className="text-light">
                                A form to be able to Append Information a user sends to a SpreadSheet in Google Sheets.
                            </p>
                            <Link to="/form">
                                <button type="button" className="btn btn-primary p-2 border-light">Go to Form</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-1 pt-md-0">
                    <div className="bg-success rounded p-3 mb-2" style={{boxShadow:"0px 1px 2px rgb(0 0 0/40%)",}}>
                            <h3 className="text-light">
                                Data Table 
                            </h3>
                            <p className="text-light">
                               A table which takes all of the necessary information the spreadsheet has to display to the user.
                            </p>
                            <Link to="/datatable">
                                <button type="button" className="btn btn-success p-2 border-light">Go to Data Table</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-muted text-center">&copy; KCC</p>
        </div>
    );
};

export default home;
