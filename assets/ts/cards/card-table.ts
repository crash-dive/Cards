import { parse, ParseResult } from 'papaparse';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

import * as columns from './card-table-columns'
import * as filter from './card-table-filter'
import * as download from './card-table-download'

const table = document.getElementById('table') as HTMLTableElement;
const url = table.dataset['url'];

parse(url, {
	download: true,
    header: true,
	complete: (results: ParseResult<Object[]>) => {
		if (results.errors.length === 0) {
            try {
                createTable(table, results);
            } catch {
                parseError(table);
            }
        }
        else {
            downloadError(table);
        }
	}
});

function parseError(table: HTMLTableElement): void {
    table.innerHTML = '<p id="error-message">There has been an error reading the card list from Google Sheets.<br>Please try again later.</p>';
}

function downloadError(table: HTMLTableElement): void {
    table.innerHTML = '<p id="error-message">There has been an error downloading the card list from Google Sheets.<br>Please try again.</p>';
}

function createTable(table: HTMLTableElement, results: ParseResult<Object[]>): void {
    const filterSettings = filter.getSettingsFromQueryString();
    
    const tablulator = new Tabulator(table, {
        data: results.data,
        height: '100%',
        layout: columns.layout(),
        responsiveLayout: 'collapse',
        responsiveLayoutCollapseStartOpen: false,
        placeholder: 'No Results',
        initialFilter: filterSettings.filter as any, //The types and docs do not clearly show that you can pass a function here
        groupBy: columns.groupBy(results.meta.fields),
        groupToggleElement: 'header',
        columns: columns.definition(results.meta.fields, filterSettings),
        columnDefaults: {
            title: '',
            headerFilterPlaceholder: ''
        }
    });

    filter.enable(tablulator, filterSettings);
    download.enable(tablulator);
}
