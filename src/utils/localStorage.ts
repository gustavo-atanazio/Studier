import IQuiz from 'types/IQuiz';

function getFromLocalStorage(key: string) {
    const items = localStorage.getItem(key);
    
    if (items) return JSON.parse(items);
    else return;
}

function updateLocalStorage(key: string, value: IQuiz[]) {
    localStorage.setItem(key, JSON.stringify(value));
}

export { getFromLocalStorage, updateLocalStorage };