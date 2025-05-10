import type { Tabulator, Filter } from 'tabulator-tables';

export type FilterType = 
    'want' |
    'trade' |
    'have' |
    'all';

export type FilterSettings = {
    value: FilterType,
    filter: Filter[] | ((data: any, filterParams: any) => boolean);
    hide: string[];
};

const filterQueryStringParam = 'list';

export function getSettingsFromQueryString(): FilterSettings {
    const params = new URLSearchParams(window.location.search)
    return getSettings(params.get(filterQueryStringParam) as FilterType);
}

export function getSettings(filter: FilterType): FilterSettings {
    switch (filter) {
        default:
        case 'want':
            return {
                value: 'want',
                filter: (data: any, filterParams: any) => data.Have < data.Want,
                hide: [
                    'Trade'
                ]
            };

        case 'trade':
            return {
                value: 'trade',
                filter: (data: any, filterParams: any) => data.Trade > 0,
                hide: [
                    'Need'
                ]
            };

        case 'all':
            return {
                value: 'all',
                filter: [],
                hide: []
            };
    }
}

export function enable(tablulator: Tabulator, settings: FilterSettings): void {
    document.querySelectorAll<HTMLInputElement>('#filter input')
            .forEach(input => {
                input.addEventListener('change', () => 
                    run(
                        tablulator, 
                        getSettings(input.value as FilterType)
                    )
                );

                input.checked = input.value === settings.value;
                input.disabled = false;
            });
}

function run(tablulator: Tabulator, settings: FilterSettings): void {
    //The library has a bug when you mix hidden columns and responsive layouts
    //The responsiveLayout.Update function does not reset this value so we need to
    tablulator.modules.responsiveLayout.index = 0;

    tablulator.blockRedraw();

    tablulator.clearFilter(/* includeHeaderFilters: */ false);

    if (settings.filter !== null) {
        tablulator.setFilter(settings.filter);
    }

    showHideColumns(tablulator, settings)

    updateQueryStringParam(settings);

    tablulator.restoreRedraw();
    tablulator.redraw(true);
}

function showHideColumns(tablulator: Tabulator, settings: FilterSettings): void {
    tablulator.getColumns().forEach(column => {
        const columnName = column.getDefinition().field;

        if (settings.hide.includes(columnName)) {
            column.hide();
        }
        else {
            column.show();
        }
    });
}

function updateQueryStringParam(settings: FilterSettings): void {
    const params = new URLSearchParams(window.location.search);
    params.set(filterQueryStringParam, settings.value);

    const newUrl = window.location.pathname + '?' + params.toString();

    history.replaceState(null, '', newUrl);
}
