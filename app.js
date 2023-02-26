const http = require('http')
const port =3000

const server = http.createServer(function(req, res){
    res.write(' mARATHA JaY Shivaray JAI Bahavani ')
    res.end()
})
server.listen (port, function(error){
if (error) {
    console.log('Something went Wrong',error)
}else{
    console.log('Server is listening On port '+port)
}

})
