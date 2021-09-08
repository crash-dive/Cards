import { parse, ParseResult, ParseMeta } from 'papaparse';
import Tabulator from 'tabulator-tables';

const table = document.getElementById('table') as HTMLTableElement;
const url = table.dataset['url'];

parse(url, {
	download: true,
    header: true,
	complete: (results: ParseResult<Object[]>, file) => {
		if (results.errors.length === 0) {
			console.log('Parsing complete:', results, file);

            const tablulator = new Tabulator(table, {
                data: results.data,
                height: '100%',
                layout: layout(),
                responsiveLayout: 'hide',
                headerFilterPlaceholder: 'Filter',
                placeholder: "No Results",
                initialFilter: [{
                    field: 'Col',
                    type: '=',
                    value: false
                }],
                groupBy: groupBy(results.meta.fields),
                groupToggleElement: 'header',
                columns: columns(results.meta.fields)
            });

            enableFilter(tablulator);
            enableDownload(tablulator);
		}
	}
});

function layout(): 'fitData' | 'fitColumns' {
    if (window.innerWidth >= 1024) {
        return 'fitColumns';
    }
    else {
        return 'fitData';
    }
}

function groupBy(fields: string[]): string {
    if (fields.includes('Set')) {
        return 'Set';
    }
    else
    {
        return undefined;
    }
}

function columns(fields: string[]): Tabulator.ColumnDefinition[] {
    const columns: Tabulator.ColumnDefinition[] = [];
    
    for (const field of fields) {
        if (
            field === 'Set #' ||
            field === 'Price Estimate' ||
            field === 'Notes'
        ) {
            continue;
        }
        else {
            columns.push(column(field));
        }
    }

    return columns;
}

function column(field: string): Tabulator.ColumnDefinition {
    switch (field) {
        case 'Set':
            return {
                title: field,
                field: field,
                headerTooltip: 'The set that the card belongs to',
                responsive: 100,
                widthGrow: 1,
                headerFilter: 'select',
                headerFilterParams: {
                    values: true,
                    sortValuesList: 'asc'
                }
            };
    
        case 'Card #':
            return {
                title: '#',
                field: field,
                headerTooltip: 'The card\'s number',
                responsive: 0,
                widthGrow: 0.5,
                headerFilter: 'input',
            };

        case 'Card':
            return {
                title: field,
                field: field,
                headerTooltip: 'The card\'s name',
                responsive: 0,
                widthGrow: 3,
                headerFilter: 'input',
            };

        case 'Type':
        case 'Subtype':
        case 'Colour':
        case 'Side':
        case 'Civilization':
        case 'Nationality':
        case 'Zone':
        case 'Border':
        case 'Phase':
        case 'World':
        case 'Pantheon':
        case 'School':
        case 'Faction':
            return {
                title: field,
                field: field,
                headerTooltip: 'The type or catagory of the card',
                responsive: 50,
                widthGrow: 1,
                headerFilter: 'select',
                headerFilterParams: {
                    values: true,
                    sortValuesList: 'asc'
                }
            };

        case 'Rarity':
            return {
                title: field,
                field: field,
                headerTooltip: 'The rarity of the card',
                responsive: 10,
                widthGrow: 1,
                headerFilter: 'select',
                headerFilterParams: {
                    values: true,
                    sortValuesList: 'asc'
                }
            };

        case 'Col':
            return {
                title: 'Have',
                field: field,
                headerTooltip: 'If I have the card or not',
                responsive: 0,
                widthGrow: 0.5,
                headerFilter: 'tickCross',
                formatter: 'tickCross',
                hozAlign: 'center',
                visible: false,
                mutator: value => {
                    switch (value) {
                        case 'x': /* Own */
                        case 'X': /* Own */
                        case 'XX': /* Own */
                        case 'XXX': /* Own */
                        case 'XXXX': /* Own */
                        case 'b': /* Bought */
                        case 'B': /* Bought */
                            return true;

                        case 'o': /* Want */
                        case 'O': /* Want */
                        case '0': /* Want */
                            return false;

                        default:
                            return null;
                    }
                }
            };

        case 'Dup':
            return {
                title: 'Stock',
                field: field,
                headerTooltip: 'The number of cards I have available to trade',
                responsive: 0,
                widthGrow: 0.5,
                visible: false
            };

        case 'Cube':
            return {
                title: field,
                field: field,
                headerTooltip: 'The number of cards I have available to trade',
                responsive: 0,
                widthGrow: 0.5,
                visible: false
            };
    }
}

function enableFilter(tablulator: Tabulator): void {
    const want = document.getElementById('filter-want') as HTMLInputElement;
    const trade = document.getElementById('filter-trade') as HTMLInputElement;
    const have = document.getElementById('filter-have') as HTMLInputElement;
    const all = document.getElementById('filter-all') as HTMLInputElement;

    want.addEventListener('change', () => {
        tablulator.clearFilter(/* includeHeaderFilters: */ false);
        tablulator.setFilter("Col", "=", false)
        tablulator.hideColumn('Col');
        tablulator.hideColumn('Dup');
        tablulator.redraw();
    });

    trade.addEventListener('change', () => {
        tablulator.clearFilter(/* includeHeaderFilters: */ false);
        tablulator.setFilter("Dup", ">", 0)
        tablulator.hideColumn('Col');
        tablulator.showColumn('Dup');
        tablulator.redraw();
    });

    have.addEventListener('change', () => {
        tablulator.clearFilter(/* includeHeaderFilters: */ false);
        tablulator.setFilter("Col", "=", true)
        tablulator.hideColumn('Col');
        tablulator.hideColumn('Dup');
        tablulator.redraw();
    });
    
    all.addEventListener('change', () => {
        tablulator.clearFilter(/* includeHeaderFilters: */ false);
        tablulator.showColumn('Col');
        tablulator.showColumn('Dup');
        tablulator.redraw();
    });

    want.disabled = false;
    trade.disabled = false;
    have.disabled = false;
    all.disabled = false;
}

function enableDownload(tablulator: Tabulator): void {
    const download = document.getElementById('download') as HTMLButtonElement;
    
    download.addEventListener('click', () => {
        tablulator.download("csv", downloadFileName());
    });

    download.disabled = false;
}

function downloadFileName(): string {
    const name = document.getElementById('game-name').innerText;
    const selectedList = (document.querySelector('#filter input:checked + label') as HTMLLabelElement).innerText;

    return `Crash Dive - ${selectedList} (${name}).csv`;
}
