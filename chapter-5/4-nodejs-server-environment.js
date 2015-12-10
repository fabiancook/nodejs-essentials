/*
   Copyright 2015 Packt Publishing

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var Http = require('http'),
    server_port,
    server_host;

server_port = parseInt(process.env.FOO_SERVER_PORT, 10);
server_host = process.env.FOO_SERVER_HOST;

Http.createServer(function(request, response) {

}).listen(server_port, server_host, function() {
    console.log('Listening on port', server_port, 'and host', server_host);
});