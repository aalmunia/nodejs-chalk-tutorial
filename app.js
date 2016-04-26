var oBrushes = require('./brushes.js');
var express = require('express');
var oApp = express();


oApp.post('/ruta_ok', function(oRequest, oResponse) {
    console.log(oBrushes.GREEN('TODO OK EN RUTA /ruta_ok'));
    oResponse.write('Todo OK');
    oResponse.end();
})

oApp.post('/ruta_ko', function(oRequest, oResponse) {
    console.log(oBrushes.RED('ERROR EN RUTA /ruta_ko'));
    oResponse.write('¡¡ Error !!');
    oResponse.end();        
});

oApp.listen(9022, function() {
    console.log(oBrushes.GREEN_BOLD('Escuchando en puerto 9022'));    
});