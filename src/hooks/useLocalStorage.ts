function useLocalStorage(key: string) {
    const getItem = (): string | undefined => {
        return localStorage.getItem(key) ?? undefined;
    };

    const setItem = (value: string | undefined) => {
        if (!value) {
            localStorage.removeItem(key);
            return;
        }

        localStorage.setItem(key, value);
    };

    return { getItem, setItem };
}

export default useLocalStorage;
