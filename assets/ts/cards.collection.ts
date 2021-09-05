import { parse, ParseResult, ParseMeta } from 'papaparse';
import Tabulator from 'tabulator-tables';

let table = document.getElementById('card-table') as HTMLTableElement;
let url = table.dataset['url'];

parse(url, {
	download: true,
    header: true,
	complete: (results: ParseResult<Object[]>, file) => {
		if (results.errors.length === 0) {
			console.log('Parsing complete:', results, file);

            new Tabulator(table, {
                data: results.data,
                height: '100%',
                layout:'fitColumns',
                groupBy: groupBy(results.meta.fields),
                columns: columnDefs(results.meta.fields)
            })
		}
	}
});

function groupBy(fields: string[]): string {
    if (fields.includes('Set')) {
        return 'Set';
    }
    else
    {
        return undefined;
    }
}

function columnDefs(fields: string[]): Tabulator.ColumnDefinition[] {
    let columns: Tabulator.ColumnDefinition[] = [];
    
    for (const field of fields) {
        if (field === 'Set #') {
            continue;
        }
        else {
            let column: Tabulator.ColumnDefinition = {
                title: field,
                field: field,
            };

            if (
                field === 'Set' ||
                field === 'Type' ||
                field === 'Rarity'
            ) {
                column.headerFilter = 'select';
                column.headerFilterPlaceholder = 'Filter';
                column.headerFilterParams = {
                    values: true
                };
            }
            else {
                column.headerFilter = 'input';
                column.headerFilterPlaceholder = 'Filter';
            }

            columns.push(column);
        }
    }

    return columns;
}
