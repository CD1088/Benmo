# Code Citations

## License: unknown
https://github.com/Ehrlacker/Brookfield/tree/ec61d454c1e740714ab5b02562af6a87d8fa9aa5/src/hooks/UseLocalStorage.tsx

```
T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    /
```

