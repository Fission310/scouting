export type Options = {
    numTeams: number;
    numMatches: number;
    teamNumColumn: number;
    startRow: number;
    rankingStart: number;
    numComments: number;
    eventCode: string;
    year: string;
    rankingSheet: string;
    formSheet: string;
    auth: string;
    dataColumns: DataColumn[];
    formColumns: FormColumns;
};

export enum API {
    SCOUT,
    EVENTS,
}

export type DataColumn = {
    column: number;
    query: string;
    getData: (data: string) => string;
    type: API;
};

export type FormColumns = Record<string, number>;

export class Scouting {

    NUM_TEAMS: number;
    NUM_MATCHES: number;
    TEAM_NUM_COLUMN: number;
    START_ROW: number;
    RANKING_START: number;
    NUM_COMMENTS: number;
    EVENT_CODE: string;
    RANKINGS_SHEET: GoogleAppsScript.Spreadsheet.Sheet;
    FORM_SHEET: GoogleAppsScript.Spreadsheet.Sheet;
    YEAR: string;
    AUTH: string;

    dataColumns: DataColumn[];
    formColumns: FormColumns;

    constructor(options: Options) {
        this.NUM_TEAMS = options.numTeams;
        this.NUM_MATCHES = options.numMatches;
        this.TEAM_NUM_COLUMN = options.teamNumColumn;
        this.START_ROW = options.startRow;
        this.RANKING_START = options.rankingStart;
        this.NUM_COMMENTS = options.numComments;
        this.EVENT_CODE = options.eventCode;
        this.YEAR = options.year;
        this.AUTH = options.auth;

        this.dataColumns = options.dataColumns;
        this.formColumns = options.formColumns;

        const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        const rankingsSheet = spreadsheet.getSheetByName(options.rankingSheet);
        const formSheet = spreadsheet.getSheetByName(options.formSheet);

        if (rankingsSheet === null || formSheet === null) {
            return;
        }

        this.RANKINGS_SHEET = rankingsSheet;
        this.FORM_SHEET = formSheet;
    }

    load(which: number) {
        if (which == this.dataColumns.length) {
            this.formData();
        } else {
            const data = this.dataColumns[which];
            for (let i = 0; i < this.NUM_TEAMS; i++) {
                const teamNumber = Scouting.getCell(this.RANKINGS_SHEET, i + this.START_ROW, this.TEAM_NUM_COLUMN);
                const query = data.query.replace(/{TEAM_NUMBER}/g, teamNumber).replace(/{EVENT_CODE}/g, this.EVENT_CODE).replace(/{YEAR}/g, this.YEAR);
                switch (data.type) {
                    case API.SCOUT:
                        let response = Scouting.getFTCScout(query);
                        Scouting.setCell(this.RANKINGS_SHEET, i + this.START_ROW, data.column, data.getData(response.getContentText()));
                        break;
                    case API.EVENTS:
                        response = Scouting.getFTCEvents(query, this.AUTH);
                        if (response.getResponseCode() == 200) {
                            Scouting.setCell(this.RANKINGS_SHEET, i + this.START_ROW, data.column, data.getData(response.getContentText()));
                        }
                        break;
                }
            }
        }
    }

    formData() {
        while (Scouting.getCell(this.FORM_SHEET, 2, 1) !== '') {
            const teamNumber = Scouting.getCell(this.FORM_SHEET, 2, 2).split(' - ')[0].trim();
            for (let i = 0; i < this.NUM_TEAMS; i++) {
                if (teamNumber == Scouting.getCell(this.RANKINGS_SHEET, i + this.START_ROW, this.TEAM_NUM_COLUMN)) {
                    const match = parseInt(Scouting.getCell(this.FORM_SHEET, 2, 3));
                    for (let j = 0; j < Object.keys(this.formColumns).length; j++) {
                        const column = this.formColumns[Scouting.getCell(this.FORM_SHEET, 1, j + 4)];
                        Scouting.setCell(this.RANKINGS_SHEET, i + this.START_ROW, column, Scouting.getCell(this.FORM_SHEET, 2, j + 4));
                    }
                    Scouting.setCell(this.RANKINGS_SHEET, i + this.START_ROW, this.RANKING_START + match - 1, Scouting.getCell(this.FORM_SHEET, 2, 4 + this.NUM_COMMENTS + Object.keys(this.formColumns).length));
                    for (let j = 0; j < this.NUM_COMMENTS; j++) {
                        Scouting.setCell(this.RANKINGS_SHEET, i + this.START_ROW, this.RANKING_START + j + this.NUM_MATCHES, Scouting.getCell(this.RANKINGS_SHEET, i + this.START_ROW, this.RANKING_START + j + this.NUM_MATCHES) + 'Match ' + match + ': ' + Scouting.getCell(this.FORM_SHEET, 2, j + 4 + Object.keys(this.formColumns).length) + ' ');
                    }
                    break;
                }
            }

            this.FORM_SHEET.deleteRow(2);
        }
    }

    static setCell(sheet: GoogleAppsScript.Spreadsheet.Sheet, row: number, col: number, value: string) {
        sheet.getRange(row, col).setValue(value);
    }

    static getCell(sheet: GoogleAppsScript.Spreadsheet.Sheet, row: number, col: number) {
        return sheet.getDataRange().getCell(row, col).getValue();
    }

    static getFTCScout(query: string) {
        query = JSON.stringify({ query: query });
        const options = {
            method: 'post',
            headers: {
                Accept: 'application/json',
                Connection: 'keep-alive',
                DNT: '1',
                Origin: 'https://api.ftcscout.org'
            },
            contentType: 'application/json',
            payload: query
        } as GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
        const response = UrlFetchApp.fetch('https://api.ftcscout.org/graphql', options);
        return response;
    }

    static getFTCEvents(url: string, auth: string) {
        const options = {
            method: 'get',
            headers: {
                Accept: 'application/json',
                Authorization: auth,
            },
            contentType: 'application/json'
        } as GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;
        const response = UrlFetchApp.fetch('http://ftc-api.firstinspires.org/v2.0/' + url, options);
        return response;
    }

    static toUrlParams(params: Record<string, string>) {
        let url = '?';
        for (const param of Object.keys(params)) {
            url += param + '=' + params[param] + '&';
        }
        return url;
    }
}
