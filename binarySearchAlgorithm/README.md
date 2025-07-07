### BINARY SEARCH

## 1st Version
- When you have to search for specific index

```
while(l<=r) {
    l = m + 1
    r = m - 1
}
```

## 2nd Version
- When you have to consider middle element in next window.

```
while(l<r) {
    l = m + 1
    r = m
}
```

## 3rd Version

```
while(l < r-1) or (l+1 < r) {
    l = m
    r = m
}
```