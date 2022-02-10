import type { FilterSettings } from './card-table-filter'
import type { Tabulator } from 'tabulator-tables';

export function layout(): 'fitData' | 'fitColumns' {
    if (window.innerWidth >= 1024) {
        return 'fitColumns';
    }
    else {
        return 'fitData';
    }
}

export function groupBy(fields: string[]): string {
    if (fields.includes('Set')) {
        return 'Set';
    }
    else
    {
        return undefined;
    }
}

export function definition(fields: string[], filter: FilterSettings): Tabulator.ColumnDefinition[] {
    const columns: Tabulator.ColumnDefinition[] = [{
        title: '',
        formatter:"responsiveCollapse",
        responsive: 0,
        width:30, 
        minWidth:30, 
        hozAlign: "center",
        resizable:false, 
        headerSort:false
    }];


    for (const field of fields) {
        if (
            field === 'Set #' ||
            field === 'Printed #' ||
            field === 'Price Estimate' ||
            field === 'Notes' ||
            field === 'Want'
        ) {
            continue;
        }
        else {
            columns.push(column(fields, field, filter));
        }
    }

    return columns;
}

export function column(fields: string[], field: string, filter: FilterSettings): Tabulator.ColumnDefinition {
    switch (field) {
        case 'Set':
            return {
                title: field,
                field: field,
                headerTooltip: 'The set that the card belongs to',
                responsive: 100,
                widthGrow: 1,
                visible: visible(field, filter),
                headerFilter: 'select',
                headerFilterParams: {
                    values: true,
                    sortValuesList: 'asc'
                },
                sorter: function(a, b, aRow, bRow, column, dir, sorterParams){
                    return aRow.getData()['Set #'] - bRow.getData()['Set #'];
                }
            };
    
        case 'Card #':
            return {
                title: '#',
                titleDownload: field,
                field: field,
                headerTooltip: 'The number of the card',
                responsive: 0,
                widthGrow: 0.5,
                visible: visible(field, filter),
                headerFilter: 'input',
                formatter: fields.includes("Printed #") ? cardNumberFormater : 'plaintext',
                accessor: fields.includes("Printed #") ? cardNumberAccessor : undefined
            };

        case 'Card':
            return {
                title: field,
                field: field,
                headerTooltip: 'The card\'s name',
                responsive: 0,
                widthGrow: 3,
                visible: visible(field, filter),
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
                visible: visible(field, filter),
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
                visible: visible(field, filter),
                headerFilter: 'select',
                headerFilterParams: {
                    values: true,
                    sortValuesList: 'asc'
                }
            };

        case 'Have':
            return {
                title: field,
                field: field,
                headerTooltip: 'The number of cards have in my collection',
                responsive: 0,
                widthGrow: 0.5,
                visible: visible(field, filter),
                headerFilter: 'select',
                headerFilterParams: {
                    values: true,
                    sortValuesList: 'asc'
                },
                formatter: cell => haveParser(cell.getData()),
                accessor: (value, data, type, accessorParams, column, row) => haveParser(data)
            };

        case 'Trade':
            return {
                title: field,
                field: field,
                headerTooltip: 'The number of cards I have available to trade',
                responsive: 0,
                widthGrow: 0.5,
                visible: visible(field, filter)
            };
    }
}

function cardNumberFormater(cell: Tabulator.CellComponent): string {
    return cell.getData()['Printed #'];
}

function cardNumberAccessor(
    value: any,
    data: any,
    type: 'data' | 'download' | 'clipboard',
    accessorParams: any,
    column?: Tabulator.ColumnComponent,
    row?: Tabulator.RowComponent,
): string {
    return data['Printed #'];
}

function haveParser(data: any): string {
    return data['Have'].toString() + ' of ' + data['Want'].toString();
}

function visible(field: string, filter: FilterSettings): boolean {
    return !filter.hide.includes(field);
}
