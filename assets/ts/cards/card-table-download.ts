export function enable(tablulator: Tabulator): void {
    const download = document.getElementById('download') as HTMLButtonElement;
    
    download.addEventListener('click', () => {
        tablulator.download("csv", fileName());
    });

    download.disabled = false;
}

function fileName(): string {
    const name = document.getElementById('game-name').innerText;
    const selectedList = (document.querySelector('#filter input:checked + label') as HTMLLabelElement).innerText;

    return `Crash Dive - ${selectedList} List (${name}).csv`;
}
