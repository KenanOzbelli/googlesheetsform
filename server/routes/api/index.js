const router = require("express").Router();
const SheetId = require("./sheetIds");
const fs = require("fs");
let spreadsheetObj;

//googleApi
const { google } = require("googleapis");

//GoogleAuth
const auth = new google.auth.GoogleAuth({
    scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
    ],
    keyFile: `${process.env.GOOGLE_APPLICATION_CREDENTIALS}`
    
});

//find right key for right year
let SheetYear = async () => {
    let dateOBJ = new Date();

    SheetId.find((sheet) => {
        if (sheet.id === dateOBJ.getUTCFullYear()) {
            spreadsheetObj = sheet;
        }
    });
};

const authClientObject = auth.getClient();
const googleSheetsInstance = google.sheets({
    version: "v4",
    auth: authClientObject,
});
const googleDriveInstance = google.drive({
    version: "v3",
    auth: authClientObject,
});

const createNewSpreadSheet = async () => {
    let dateOBJ = new Date();
    let newSpreadSheetId;
    let oldParent;
    let sheetid;
    let SheetIdString;

    await googleSheetsInstance.spreadsheets
        .create({
            auth,
            resource: {
                properties: {
                    title: `ContactForm ${dateOBJ.getUTCFullYear()}`,
                },
                sheets: [
                    {
                        properties: {
                            title: `${dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear()}`,
                        },
                    },
                ],
            },
        })
        .then((response) => {
            newSpreadSheetId = response.data.spreadsheetId;
            console.log(response.data.sheets[0].properties.sheetId);
            sheetid = response.data.sheets[0].properties.sheetId;
        });

    await googleSheetsInstance.spreadsheets
        .batchUpdate({
            auth,
            spreadsheetId: newSpreadSheetId,
            resource: {
                requests: {
                    appendCells: {
                        rows: [
                            {
                                values: [
                                    {
                                        userEnteredValue: { stringValue: "Date" },
                                        userEnteredFormat: { textFormat: { bold: true } },
                                    },
                                    {
                                        userEnteredValue: { stringValue: "Name" },
                                        userEnteredFormat: { textFormat: { bold: true } },
                                    },
                                    {
                                        userEnteredValue: { stringValue: "Email" },
                                        userEnteredFormat: { textFormat: { bold: true } },
                                    },
                                    {
                                        userEnteredValue: { stringValue: "Message" },
                                        userEnteredFormat: { textFormat: { bold: true } },
                                    },
                                ],
                            },
                        ],
                        sheetId: `${sheetid}`,
                        fields: "userEnteredValue, userEnteredFormat",
                    },
                },
            },
        })
        .then((response) => {
            console.log(response.data);
        });

    await googleDriveInstance.permissions
        .create({
            auth,
            fileId: newSpreadSheetId,
            fields: "id",
            resource: {
                type: "user",
                role: "writer",
                pendingOwner:true,
                emailAddress: `${process.env.CLIENTEMAIL}`
            },
        })
        .then((response) => {
            console.log(response.data);
        })

    await googleDriveInstance.files
        .get({
            auth,
            fileId: newSpreadSheetId,
            fields: "parents"
        })
        .then((response) => {
            oldParent = response.data.parents;
        });

    await googleDriveInstance.files
        .update({
            auth,
            fileId: newSpreadSheetId,
            removeParents: oldParent,
            addParents: "1biB-W9JkOdwO3vfKBGf1BpmniQ9z5dRv",
        })
        .then((response) => {
            console.log(response.data);
        });

    SheetId.push({ id: dateOBJ.getUTCFullYear(), key: newSpreadSheetId });

    SheetIdString = JSON.stringify(SheetId);

    fs.writeFile(
        "../server/routes/api/sheetIds.js",
        `const SheetId = ${SheetIdString}; module.exports = SheetId;`,
        function (err) {
            if (err) {
                // there was an error
                console.log(err);
            } else {
                // data written successfully
                console.log("file written successfully");
            }
        }
    );
    SheetYear();
};

router.get("/googlesheet/sheets", async (req, res) => {
    const sheetData = [];
    let dateOBJ = new Date();

    //grab all the spreadsheets we have and upload to an array
    await Promise.all(
        SheetId.map(async (sheet) => {
            await googleSheetsInstance.spreadsheets
                .get({
                    auth,
                    spreadsheetId: sheet.key,
                })
                .then((response) => {
                    const sheetIdNum = {
                        spreadSheetId: sheet.key,
                        title: sheet.id,
                        sheets: response.data.sheets,
                        active: dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear(),
                    };
                    sheetData.push(sheetIdNum);
                })
                .catch((error) => {
                    return console.log(error);
                });
        })
    );
    //sorts the data since sometimes the list is off depeding on getting the information
    sheetData.sort((a, b) => (a.title < b.title ? 1 : -1));
    res.status(200).json(sheetData);
});

router.get("/googlesheet/:sheetId/:spreadsheetId", async (req, res) => {
    const { sheetId, spreadsheetId } = req.params;

    await googleSheetsInstance.spreadsheets.values
        .get({
            auth,
            spreadsheetId: spreadsheetId,
            range: `${sheetId}!A:D`,
        })
        .then((response) => {
            if (response.data.values) {
                res.status(200).json(response.data.values);
                return;
            }
            res.status(400).json("this table is empty...");
        })
        .catch((err) => {
            res.status(400).json(err.message);
        });
});

router.get("/googlesheet", async (req, res) => {
    let dateOBJ = new Date();

    //Check to see if still in current Year if not get new Key for year.
    if (!spreadsheetObj || spreadsheetObj.id !== dateOBJ.getUTCFullYear()) {
        await SheetYear();
            
        if (!spreadsheetObj) {
            return res.status(500).json(`Table does not exist for ${dateOBJ.getUTCMonth() + 1} - ${dateOBJ.getUTCFullYear()}`);
        }
    }
    await googleSheetsInstance.spreadsheets.values
        .get({
            auth,
            spreadsheetId: spreadsheetObj.key,
            range: `${dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear()}!A:D`,
        })
        .then((response) => {
            res.status(200).json(response.data.values);
        })
        .catch((err) => {
            if (
                err.message ===
                `Unable to parse range: ${dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear()}!A:D`
            ) {
                res
                    .status(400)
                    .json(
                        `There is no data for ${dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear()}`
                    );
            } else {
                res.status(400).json(err.message);
            }
        });
});

router.post("/googlesheetsend", async (req, res) => {
    let dateOBJ = new Date();

    const { name, email, message } = req.body;
    const date = dateOBJ.toISOString().slice(0, 10);

    if (name === "" || email === "" || message === "") {
        return res
            .status(400)
            .json("You Cannot Leave Name, Email, and Message Blank.");
    }

    if (name.length > 10) {
        return res.status(400).json("Retype Name Please.");
    }
    if (email.length > 20) {
        return res.status(400).json("Retype Email Please.");
    }
    if (message.length > 250) {
        return res.status(400).json("Message is too Long.");
    }

    //if year doesn't match up then there is a newer spreadsheet id with new year
    if (!spreadsheetObj || spreadsheetObj.id !== dateOBJ.getUTCFullYear()) {
        await SheetYear();

        if (!spreadsheetObj) {
            await createNewSpreadSheet();
        }
    }
    //create new sheet on the main spreadsheet
    const addNewSheet = async () => {
        await googleSheetsInstance.spreadsheets
            .batchUpdate({
                auth,
                spreadsheetId: spreadsheetObj.key,
                resource: {
                    requests: [
                        {
                            addSheet: {
                                properties: {
                                    title: `${dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear()}`,
                                },
                            },
                        },
                    ],
                },
            })
            .then((response) => {
                getSheetId();
            })
            .catch((err) => {
                console.log(err);
                res
                    .status(400)
                    .json("can't get new sheet Contact Support at 111-111-1111");
            });
    };
    //get the id of the new sheet to append titles
    const getSheetId = async () => {
        await googleSheetsInstance.spreadsheets
            .get({
                auth,
                spreadsheetId: spreadsheetObj.key,
                ranges: `${dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear()}`,
            })
            .then((response) => {
                const sheetIdNum = response.data.sheets[0].properties.sheetId;
                appendTitleValuesSheet(sheetIdNum);
            })
            .catch((err) => {
                console.log(err);
                res
                    .status(400)
                    .json("can't find sheetId Contact Support at 111-111-1111");
            });
    };
    //append titles on the new sheet
    const appendTitleValuesSheet = async (sheetIdNum) => {
        await googleSheetsInstance.spreadsheets
            .batchUpdate({
                auth,
                spreadsheetId: spreadsheetObj.key,
                resource: {
                    requests: {
                        appendCells: {
                            rows: [
                                {
                                    values: [
                                        {
                                            userEnteredValue: { stringValue: "Date" },
                                            userEnteredFormat: { textFormat: { bold: true } },
                                        },
                                        {
                                            userEnteredValue: { stringValue: "Name" },
                                            userEnteredFormat: { textFormat: { bold: true } },
                                        },
                                        {
                                            userEnteredValue: { stringValue: "Email" },
                                            userEnteredFormat: { textFormat: { bold: true } },
                                        },
                                        {
                                            userEnteredValue: { stringValue: "Message" },
                                            userEnteredFormat: { textFormat: { bold: true } },
                                        },
                                    ],
                                },
                            ],
                            sheetId: `${sheetIdNum}`,
                            fields: "userEnteredValue, userEnteredFormat",
                        },
                    },
                },
            })
            .then((response) => {
                appendValue();
            })
            .catch((err) => {
                console.log(err);
                res
                    .status(400)
                    .json("can't add information Contact Support at 111-111-1111");
            });
    };

    const appendValue = async () =>
        await googleSheetsInstance.spreadsheets.values
            .append({
                auth,
                spreadsheetId: spreadsheetObj.key,
                range: `${dateOBJ.getUTCMonth() + 1 + "-" + dateOBJ.getUTCFullYear()}!A:D`,
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: [[date, name, email, message]],
                },
            })
            .then((success) => {
                return res.json("Message Sent, Thank you.");
            })
            .catch((err) => {
                if (err) {
                    switch (err.message) {
                        case `Unable to parse range: ${dateOBJ.getUTCMonth() + 1 + "-" +  dateOBJ.getUTCFullYear()}!A:D`:
                            addNewSheet();
                            break;
                        default:
                            res.status(500).json(err.message);
                            break;
                    }
                }
            });

    await appendValue();
});

module.exports = router;
