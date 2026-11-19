```js quickadd
const includeSource = await this.quickAddApi.yesNoPrompt(
    "Include source link?",
    "Add a link to the note you started from?"
);

if (!includeSource) return "";

return await this.quickAddApi.format(
    "Sourced from {{LINKCURRENT}}"
);
```
