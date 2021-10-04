import React from 'react';
const InfoForm = (props) => {
    return (
        <>
            <div className="card table-wrapper" style={{ borderRadius: "0", border: '0', overflowX: "scroll", margin: ".5rem auto" }} >
                <table className="table table-striped table-bordered border-light" style={{ boxShadow: "0px 1px 2px rgb(0 0 0/40%)", maxWidth: "1600px", margin: ".5rem auto" }}>
                    <thead>
                        <tr className="fw-bold">
                            <th className="tableHeader">
                                Date
                            </th>
                            <th className="tableHeader">
                                Name
                            </th>
                            <th className="tableHeader">
                                Email
                            </th>
                            <th className="tableHeaderLon">
                                Message
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data ? props.data.map((item, key) => {
                            if(!item[0].includes("Date")){
                                return (
                                    <tr key={key}>
                                        {item.map((dataEnteries, key) => {
                                            return (
                                                <td key={key} className={key === 3 ? "tableDataMessage" : "tableData"}>
                                                    {dataEnteries}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )}else{return null }
                        }) : null
                        }
                    </tbody>
                </table>
            </div>
            <p className="text-muted text-center">&copy; KCC</p>
        </>
    )
}

export default InfoForm;