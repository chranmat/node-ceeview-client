const http  = require('http');
const https = require('https');

class API {
    constructor(host, insecure) {
        this.host = host;
        this.handler = insecure ? http : https;
        this.port = insecure ? 80 : 443;
    }

    post(path, body) {

        return new Promise(async (resolve, reject) => {

            const options = {
                host: this.host,
                port: this.port,
                path: path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const req = this.handler.request(options, res => {

                let response = '';

                res.on('data', data => { 
                    response += data; 
                });
                
                res.on('error', err => { 
                    reject(err); 
                });
                
                res.on('end', ()    => {
                    if(res.statusCode == 200) {
                        resolve(response) 
                    }
                    else {
                        reject(response);
                    }

                });

            });

            req.write(JSON.stringify(body));
            req.end();
        });
    }
}

module.exports = API;