# Home

## Inbox

```dataview
TABLE type, created
FROM ""
WHERE status = "inbox"
AND !contains(file.path, "Templates/")
AND !contains(file.path, "Status/")
SORT created DESC
```

## Active Projects

```dataview
TABLE phase
FROM ""
WHERE type = "project"
```
