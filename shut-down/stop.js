const AWS = require('aws-sdk');

module.exports = (instanceIdentifier) => {
    return new Promise((resolve, reject) => {
        const rds = new AWS.RDS();
        const params = {
            DBClusterIdentifier: instanceIdentifier,
        };
        rds.stopDBCluster(params, (err, data)=> {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
