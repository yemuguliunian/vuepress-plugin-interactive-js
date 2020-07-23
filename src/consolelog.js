module.exports = `
    (function() {
        let codes = []
        console.log = (function(log){
            return function(str) {
                log.call(console, str);
                codes.push(str)
                const codeStr = 
                    '<code>' + codes.map(item => ('> ' + JSON.stringify(item))).join('<br>') + '</code>'
                if (document.getElementById('console')) {
                    document.getElementById('console').innerHTML = codeStr
                }
            }
        })(console.log);
    })()
`;
