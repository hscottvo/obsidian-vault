module.exports = async ({ quickAddApi, variables }) => {
    variables.link_to_current = await quickAddApi.yesNoPrompt(
        "Include source link?",
        "Add a link to the note you started from?"
    );
};
