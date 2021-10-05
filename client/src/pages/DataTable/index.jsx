import React, { useEffect, useState } from "react";
import SkeletonTable from "./skeletonTable";
import InfoTable from "./infoTable";
import { Link } from "react-router-dom";
import SheetTab from "../../components/SheetTab";
import API from "../../lib/API";
import Skeleton from "react-loading-skeleton";

const DataTable = () => {
    const [data, setData] = useState("");
    const [searchFilter, setSearchFilter] = useState(data);
    const [tab, setTab] = useState("");
    const [tableReady, setTableReady] = useState(false);
    const [currentSheet, setCurrentSheet] = useState({});
    const [errMsg, setErrMsg] = useState("");
    const [queryString, setQueryString] = useState("");

    useEffect(() => {
        let mounted = true;
        if (mounted) {
            API.get()
                .then((response) => {
                    if (response || response.data.length > 1) {
                        let sorted = response.data.sort((a, b) => a[0] < b[0] ? 1 : -1);
                        setData(sorted);
                        setSearchFilter(sorted)
                        setTableReady(true)
                    }
                })
                .catch((err) => {
                    if (err.response) {
                        setErrMsg(err.response.data);
                    } else {
                        setErrMsg("Internal Error");
                    }
                });
            API.getSheets()
                .then(response => {
                    if (response) {
                        setTab(response.data)
                    }
                });
        }
        return () => mounted = false;
    }, []);
    const handleChange = (event) => {
        let value = event.target.value.toLowerCase();

        setQueryString(value)

        if (searchFilter) {
            const newSet = searchFilter.filter(obj => (obj[0].toLowerCase().includes(value) || obj[1].toLowerCase().includes(value) || obj[2].toLowerCase().includes(value) || obj[3].toLowerCase().includes(value)))

            setData(newSet)
        }
    }

    const changeTab = (title, id) => {
        setQueryString("");

        //removal of Active on all elements and add active to newtoold
        document.querySelectorAll(".dropdown-item").forEach(dropdown => {
            if (dropdown.classList.contains("newToOld")) {
                dropdown.classList.add("active");
                return
            }
            dropdown.classList.remove("active");
        });

        setData("")

        setCurrentSheet({ title: title, id: id })

        API.getSpecificSheet(title, id)
            .then(response => {
                let sorted = response.data.sort((a, b) => a[0] < b[0] ? 1 : -1);
                setData(sorted)
                setSearchFilter(sorted)
            })
            .catch(err => {
                setErrMsg(err.response.data)
            })



        //change tab colors to know which is active
        document.querySelectorAll('.tabButtons').forEach(Elements => {
            if (Elements.id !== title) {
                Elements.classList.remove("bg-primary");
                Elements.classList.remove("text-light");
                Elements.classList.add("text-secondary");
                Elements.classList.add("bg-light");
            } else {
                Elements.classList.add("bg-primary");
                Elements.classList.add("text-light");
                Elements.classList.remove("text-secondary");
                Elements.classList.remove("bg-light");
            }
        })
    }

    //Sort Filters
    const NewtoOld = (evt) => {
        setQueryString("");

        //removal of Active on all elements
        document.querySelectorAll(".dropdown-item").forEach(dropdown => dropdown.classList.remove("active"));
        //addition of active for the button click
        evt.target.classList.add("active");

        setData("")

        if (currentSheet.title && currentSheet.id) {
            API.getSpecificSheet(currentSheet.title, currentSheet.id)
                .then((response) => {
                    if (response) {
                        let sorted = response.data.sort((a, b) => a[0] < b[0] ? 1 : -1);
                        setData(sorted);
                        setSearchFilter(sorted)
                    }
                })
                .catch((err) => {
                    if (err.response) {
                        setErrMsg(err.response.data);
                    } else {
                        setErrMsg("Internal Error")
                    }
                });

            return
        }

        API.get()
            .then((response) => {
                if (response) {
                    let sorted = response.data.sort((a, b) => a[0] < b[0] ? 1 : -1);
                    setData(sorted);
                    setSearchFilter(sorted)
                }
            })
            .catch((err) => {
                if (err.response) {
                    setErrMsg(err.response.data);
                } else {
                    setErrMsg("Internal Error")
                }
            });
    }

    const OldtoNew = (evt) => {
        setQueryString("");
        //removal of Active on all elements
        document.querySelectorAll(".dropdown-item").forEach(dropdown => dropdown.classList.remove("active"));
        //addition of active for the button click
        evt.target.classList.add("active");

        setData("")

        if (currentSheet.title && currentSheet.id) {
            API.getSpecificSheet(currentSheet.title, currentSheet.id)
                .then((response) => {
                    if (response) {
                        setData(response.data);
                        setSearchFilter(response.data)
                    }
                })
                .catch((err) => {
                    if (err.response) {
                        setErrMsg(err.response.data);
                    } else {
                        setErrMsg("Internal Error")
                    }
                });
            return
        }

        API.get()
            .then((response) => {
                if (response) {
                    setData(response.data);
                    setSearchFilter(response.data)
                }
            })
            .catch((err) => {
                if (err.response) {
                    setErrMsg(err.response.data);
                } else {
                    setErrMsg("Internal Error")
                }
            });
    }

    const Alphabetical = (evt) => {
        setQueryString("");

        //removal of Active on all elements
        document.querySelectorAll(".dropdown-item").forEach(dropdown => dropdown.classList.remove("active"));
        //addition of active for the button click
        evt.target.classList.add("active");

        setData("")

        if (currentSheet.title && currentSheet.id) {
            API.getSpecificSheet(currentSheet.title, currentSheet.id)
                .then((response) => {
                    if (response) {
                        let sorted = response.data.sort((a, b) => a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1);
                        setData(sorted);
                        setSearchFilter(sorted)
                    }
                })
                .catch((err) => {
                    if (err.response) {
                        setErrMsg(err.response.data);
                    } else {
                        setErrMsg("Internal Error")
                    }
                });
            return
        }

        API.get()
            .then((response) => {
                if (response) {
                    let sorted = response.data.sort((a, b) => a[1].toLowerCase() > b[1].toLowerCase() ? 1 : -1);
                    setData(sorted);
                    setSearchFilter(sorted)
                }
            })
            .catch((err) => {
                if (err.response) {
                    setErrMsg(err.response.data);
                } else {
                    setErrMsg("Internal Error")
                }
            });
    }
    return (
        <>
            <div style={errMsg === "" ? null : { display: "none" }}>
                {tableReady && tab !== "" ?
                    <SheetTab tab={tab} changeTab={changeTab} NewtoOld={NewtoOld} OldtoNew={OldtoNew} Alphabetical={Alphabetical} handleChange={handleChange} queryString={queryString} />
                    :
                    <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
                        <div className="text-center d-md-none d-block p-1">
                            <Skeleton className="btn p-2 text-center" />
                        </div>
                        <div className="row g-0">
                            <div className="col-md-3 col-6 p-1 text-md-end">
                                <Skeleton className="btn p-2 text-center" style={{ width: "100px" }} />
                            </div>
                            <div className="col-md-6 d-md-block d-none p-1">
                                <Skeleton className="btn p-2 text-center" />
                            </div>
                            <div className="col-md-3 col-6 p-1 text-md-start text-end">
                                <Skeleton className="btn p-2 text-center" style={{ width: "100px" }} />
                            </div>
                        </div>
                    </div>
                }
                {data === "" ?
                    <SkeletonTable />
                    :
                    <InfoTable data={data} />
                }
            </div>
            {errMsg !== "" ?
                <div className="container">
                    <div className="text-center p-3 shadow-sm">
                        <h4 className="p-3">{errMsg}</h4>
                        <Link to="/form"><button type="button" className="btn btn-secondary p-2">Back to Form</button></Link>
                    </div>
                </div>
                : null}
        </>
    );
};

export default DataTable;
