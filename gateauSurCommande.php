<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="assets/css/styles.css">
      <script src="script.js" defer></script>
      <title>Boulangerie V.A.V</title>
    </head>
    <body>
      <nav class="navbar">
        <a href="#" class="navbar-logo">
          <img src="assets/sprites/cake.png" width="128" height="128" alt="logo"></a>
        <div class="brand-title">Gateaux sur commande</div>
        <a href="#" class="toggle-button">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div class="navbar-links">
          <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="gateauAnniversaire.php">Gâteau Anniversaire</a></li>
            <li><a href="gateauChiffre.php">Gâteau chiffre</a></li>
            <li><a href="gateauBapteme.php">Gâteau baptême</a></li>
            <li><a href="contact.php">Contact</a></li>
            
          </ul>
        </div>
      </nav>
      <div id="image-container"></div>
      <?php require "footer.html"?>
    </body>
</html>
