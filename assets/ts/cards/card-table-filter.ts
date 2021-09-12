export type FilterType = 
    'want' |
    'trade' |
    'have' |
    'all';

export type FilterSettings = {
    value: FilterType,
    filter: Tabulator.Filter[];
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
                filter: [{
                    field: 'Col',
                    type: '=',
                    value: false
                }],
                hide: [
                    'Col',
                    'Dup'
                ]
            };

        case 'trade':
            return {
                value: 'trade',
                filter: [{
                    field: 'Dup',
                    type: '>',
                    value: 0
                }],
                hide: [
                    'Col'
                ]
            };

        case 'have':
            return {
                value: 'have',
                filter: [{
                    field: 'Col',
                    type: '=',
                    value: true
                }],
                hide: [
                    'Col',
                    'Dup'
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
                        input.value as FilterType
                    )
                );

                input.checked = input.value === settings.value;
                input.disabled = false;
            });
}

function run(tablulator: Tabulator, filter: FilterType): void {
    const settings = getSettings(filter);

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