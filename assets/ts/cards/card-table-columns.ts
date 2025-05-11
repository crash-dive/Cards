import type { FilterSettings } from './card-table-filter'
import type { ColumnDefinition, ColumnComponent, CellComponent, RowComponent } from 'tabulator-tables';

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

export function definition(fields: string[], filter: FilterSettings): ColumnDefinition[] {
    const columns: ColumnDefinition[] = [{
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
            field === 'Have' ||
            field === 'Want'

        ) {
            continue;
        }
        else {
            columns.push(column(fields, field, filter));
        }
    }

    columns.push({
        title: 'Need',
        field: 'Need',
        download: true,
        headerTooltip: 'How many I want of that card',
        responsive: 0,
        widthGrow: 0.5,
        visible: visible('Need', filter),
        headerFilter: 'list',
        headerFilterParams: {
            values: ['Yes', 'No']
        },
        sorter: 'alphanum',
        mutator: (value: any, data: any) =>  data['Have'] < data['Want'] ? 'Yes' : 'No'
    });

    return columns;
}

export function column(fields: string[], field: string, filter: FilterSettings): ColumnDefinition {
    switch (field) {
        case 'Set':
            return {
                title: field,
                field: field,
                download: true,
                headerTooltip: 'The set that the card belongs to',
                responsive: 100,
                widthGrow: 1,
                visible: visible(field, filter),
                headerFilter: 'list',
                headerFilterParams: {
                    sort: 'asc',
                    valuesLookup: 'all'
                },
                sorter: (a, b, aRow, bRow, column, dir, sorterParams) => aRow.getData()['Set #'] - bRow.getData()['Set #']
            };
    
        case 'Card #':
            return {
                title: '#',
                field: field,
                titleDownload: field,
                download: true,
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
                download: true,
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
                download: true,
                headerTooltip: 'The type or catagory of the card',
                responsive: 50,
                widthGrow: 1,
                visible: visible(field, filter),
                headerFilter: 'list',
                headerFilterParams: {
                    sort: 'asc',
                    valuesLookup: 'all'
                },
            };

        case 'Rarity':
            return {
                title: field,
                field: field,
                download: true,
                headerTooltip: 'The rarity of the card',
                responsive: 10,
                widthGrow: 1,
                visible: visible(field, filter),
                headerFilter: 'list',
                headerFilterParams: {
                    sort: 'asc',
                    valuesLookup: 'all'
                }
            };

        case 'Trade':
            return {
                title: field,
                field: field,
                download: true,
                headerTooltip: 'The number of cards I have available to trade',
                responsive: 5,
                widthGrow: 0.5,
                visible: visible(field, filter),
                headerFilter: 'list',
                headerFilterParams: {
                    sort: 'asc',
                    valuesLookup: 'all'
                },
            };
    }
}

function cardNumberFormater(cell: CellComponent): string {
    return cell.getData()['Printed #'];
}

function cardNumberAccessor(
    value: any,
    data: any,
    type: 'data' | 'download' | 'clipboard',
    accessorParams: any,
    column?: ColumnComponent,
    row?: RowComponent,
): string {
    return data['Printed #'];
}

function visible(field: string, filter: FilterSettings): boolean {
    return !filter.hide.includes(field);
}
