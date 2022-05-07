var express = require('express');
var router = express.Router();
// simular BD
var tablaLibros = {'id':1 , 'titulo':'el perfume', 'autor': 'Patrik suskind'};
var tablaLibros2 = [
{'id':1 , 'titulo':'el perfume', 'autor': 'Patrik suskind'},
{'id':2 , 'titulo':'hobbit', 'autor': 'Tolkien'},
{'id':3 , 'titulo':'La biblia', 'autor': 'Apostoles'}


];

router.get('/', function(req, res, next) {
//Aqui se regresan los datos de la consulta BD
  res.status(200).json(tablaLibros2);

});

router.get('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1]);

});

router.post('/:idLibro', (req,res,next)=>{
  res.status(400).json({'error':'Operacion no Permitida'})

} );

router.post('/' , (req,res,next)=>{

console.log(req.body);

var libro ={
  'id':tablaLibros2[tablaLibros2.length-1]['id']+1,
  titulo:req.body.titulo,
  autor: req.body.autor

};

//insert en bd del objeto libro
tablaLibros2.push(libro);

// la respuesta bd regresarla a el cliente
res.status(200).json(tablaLibros2[tablaLibros2.length-1]);
});


router.patch('/:idLibro', (req,res ,next)=>{
  var id = req.params.idLibro;
  //tablaLibros2[req.body.id]['titulo']=req.body.titulo;
  tablaLibros2[id-1]['titulo']=req.body.titulo;
  tablaLibros2[id-1]['autor']=req.body.autor;

  res.status(200).json({'mensaje':'Awbo se actualizo la tabla'});
});



module.exports = router;
