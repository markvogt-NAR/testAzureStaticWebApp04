module.exports = async function (context, req) {
    context.res.json({
        text: " the API endpoint '/message' got auto-called on page load, which returns this Hello MARK from the API"
    });
};