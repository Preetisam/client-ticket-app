

module.exports = {
    DB_NAME : "crmClient_DB",
    DB_URL: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/crmClient_DB"
    // DB_URL: "mongodb://127.0.0.1:27017/crm123"
}