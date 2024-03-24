module.exports = async function (context, req) {
    context.res.json({
        text: " the API endpoint '/returnmessage' got auto-called on page load, which returns this Hello MARK from returnmessage() from the API"
    });
};