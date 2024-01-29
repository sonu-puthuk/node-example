import express from "express";

const app = express();
const PORT = process.env.PORT || 8081;

app.post('/transactions', (req, res) => {
    const responseData = {
        "status": "success",
        "data": {
            "walletId": "8be77454-cf2d-48d3-8703-a144de90bc58",
            "assetType": "BTC",
            "cryptoAmount": 0.000002,
            "address": "0xF845f557b16F2399b9807129f40773F5c804fcf8",
            "fromAddress": "0xF845f557b16F2399b9807129f40773F5c804fcf8",
            "fee": "50",
            "feeLimit": 100,
            "description": "",
            "memo": "The quick brown fox jumps over a lazy dog",
            "operation": "0xF845f557b16F2399b9807129f40773F5c804fcf8",
            "queued": false,
            "feeAddress": "bc1eieieiee",
            "spenderAddress": "bc1eieieiee",
            "changeAddress": "bc1eieieiee",
            "changeAddressType": "segwit",
            "subAccountId": "1922-j223",
            "customerId": "1922-j223"
        }
    };
    const prettyData = JSON.stringify(responseData, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(prettyData);
});

app.post('/generate-address', (req, res) => {
    const responseData = {
        "statusCode": 200,
        "data": {
            "coin": "BTC",
            "address": "bc1q0uq3j998my8nsl6j9w43pdd6knyzqsyy53qwfw",
            "legacyaddress": "1CaY8ekUkt4HF7piz4FuWH5jm81UUuhVz5",
            "status": "completed",
            "tag": "",
            "name": "Bitcoin",
            "dmin": 0.0005,
            "dmax": 100000,
            "deposit": true,
            "dfee": 0
        },
        "message": "Request successfully completed",
        "statusText": "SUCCESS",
        "timestamp": "2023-06-06T07:36:50.701Z"
    };
    const prettyData = JSON.stringify(responseData, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(prettyData);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});