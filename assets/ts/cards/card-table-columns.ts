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

export function definition(fields: string[]): Tabulator.ColumnDefinition[] {
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

export function column(field: string): Tabulator.ColumnDefinition {
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
