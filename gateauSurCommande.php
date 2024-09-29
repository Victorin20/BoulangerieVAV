<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="assets/css/styles.css?v=1.0">
      <script src="script.js" defer></script>
      <title>Boulangerie V.A.V</title>
      <link rel="icon" type="image/svg+xml" href="assets/sprites/boulangerie.svg">
    </head>
    <body>
      <main>

        <nav class="navbar">
          <a href="index.html" class="navbar-logo">
            <img src="assets/sprites/cake.png" width="128" height="128" alt="logo"></a>
            <div class="brand-title">Boulangerie de la Mairie V.A.V</div>
            <a href="#" class="toggle-button">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </a>
            <div class="navbar-links">
              <ul>
                <li><a href="index.html">Accueil</a></li>
                <div class="dropdown">
                 
                  <li><a href="#">Gateaux sur commande</a></li>
                  <div class="dropdown-content">
                    <li><a href="gateauChiffre.php">Gateaux chiffre</a></li>
                    <li><a href="gateauBapteme.php">Gateaux bapteme</a></li>
                    <li><a href="gateauAnniversaire.php">Gateaux Anniversaire</a></li>
                    <li><a href="autres.php">Autres Gateaux</a></li>
                  </div>
              </div>
                <li><a href="ImpressionAlimentaire.php">Impression alimentaire</a></li>
                <li><a href="contact.php">Contact</a></li>
                
              </ul>
              
            </div>
          </nav>
          <div id="image-container"></div>
          
        </main>
       <?php require_once('./footer.html'); ?>
    </body>
</html>