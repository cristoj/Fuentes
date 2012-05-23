<html xml:lang="es" lang="es">
 <head>  
	<title>Creador de Cabeceras y párrafos</title>
  <link rel="stylesheet" type="text/css" href="css/jpicker.css">
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  <link href="http://fonts.googleapis.com/css?family=Alfa+Slab+One|Averia+Sans+Libre|Dosis|Miniver|Lovers+Quarrel|Condiment|Bubblegum+Sans|Voces|Antic+Slab|Average|Crushed|Codystar|Londrina+Solid|Oldenburg|Economica|Rosarivo|Poiret+One|Erica+One|Ropa+Sans|Sail|Bad+Script|Londrina+Sketch|Oleo+Script|Simonetta|Revalia|Jolly+Lodger|PT+Mono|Emblema+One|Allura|Averia+Serif+Libre|Fugaz+One|Shojumaru|Gochi+Hand|Antic+Didone|Crete+Round|Londrina+Outline|Sevillana|Fredoka+One|Unlock|Graduate|Exo|Asap|Great+Vibes|Stint+Ultra+Condensed|Berkshire+Swash|Karla|Italiana|Oxygen|Belleza|Londrina+Shadow|Gorditas|Averia+Gruesa+Libre|Happy+Monkey|Imprima|Chango|Shadows+Into+Light+Two|Pontano+Sans|Germania+One|Titan+One|Seaweed+Script|Plaster|Krona+One|Norican|Advent+Pro|Averia+Libre|Montserrat|Ruda|Metamorphous|Enriqueta|Righteous|Almendra+SC|Basic|Lusitana|Ceviche+One|Electrolize|Mrs+Sheppards|Piedra" rel="stylesheet" type="text/css">
 </head>
 <body id="body">
  <div id="content">
   <a href="#modal" class="css">Mostrar Css</a>
	<div id="modal" style="display:none">
		<?php include('modal.php'); ?>
	</div>
  <div>
     <textarea id="textoH1">Aquí tu texto H1</textarea>     
  </div>
  <div>
     <textarea id="textoP">Aquí tu texto p</textarea>     
  </div>
  <form action="" method="" id="h1">
  <div class="fleft">
	<p>h1</p>
	<?php include('h1.php'); ?>
  </div>
  <div class="fleft">
    <p>p</p>
     <?php include('p.php'); ?>
	</div>
   </form>
  </div>
    <br clear="all" />
	<div class="mbottom">
		<p><a href="http://www.fontsquirrel.com/fontface/generator" target="_blank">Generar @font-face</a></p>
	</div>
  <div> 
  Body-color:
  <span id="BindedB"></span>
  </div>
  </div>
    <script src="js/jquery.js"></script>
	<script src="js/resize.js"></script>
	<script src="js/jpicker.js"></script>
    <script src="js/pageslide.js"></script>
	<script src="js/web.js"></script>
 </body>
</html>