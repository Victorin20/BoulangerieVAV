const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var currentPage = window.location.pathname;
let path = "";
switch(currentPage)
{
  case '/projet/gateauSurCommande.php':
    var imageFiles = ['20220721_191040.jpg','20220810_101905.jpg', '20221015_141553.jpg', '20221104_130802.jpg','20221127_100007.jpg','20221127_131245.jpg','20221210_113942.jpg', '20221211_102313.jpg', '20230221_105133.jpg','20230304_111209.jpg'];
    path = "gateauxSurCommande/";
    break;

    case '/projet/gateauChiffre.php':
      var imageFiles = ['20200613_180207.jpg', '20200824_131415.jpg', '20210305_171521.jpg',
    '20210314_105950.jpg', '20210502_080914.jpg','20220521_142911.jpg','20221020_170902.jpg', '20221117_132021.jpg', '20221118_183604.jpg', 'FB_IMG_1684401951537.jpg'];
      path = "chiffre/";
      break;

    case '/projet/gateauBapteme.php':
      var imageFiles = ['20200216_125348.jpg', '20201018_081227.jpg', '20201023_085906.jpg', '20220521_124730.jpg', '20220525_160828.jpg', '20220604_161241.jpg' ];
      path = "bapteme/";
      break;
    
    case '/projet/index.html':
      var imageFiles = ['20201018_081227.jpg', '20201023_085906.jpg', '20210314_105950.jpg', '20220521_142911.jpg', '20220827_092004.jpg',
    '20221016_111410.jpg', '20221115_132529.jpg', '20221116_171816.jpg', '20221117_132021.jpg', '20221126_100146.jpg', '20221211_112310.jpg', '20230107_113806.jpg', '20230114_170841.jpg', 'FB_IMG_1684401979327.jpg', 'FB_IMG_1684401992686.jpg'];
      path = "accueil/";
      break;

      case '/projet/gateauAnniversaire.php':
        var imageFiles = ['20200818_210252.jpg', '20210724_175935.jpg', '20210802_180928.jpg', '20221016_111404.jpg', '20221016_111410.jpg', '20221116_171816.jpg', '20221126_100146.jpg', '20221126_170940.jpg', '20221203_154914.jpg', '20221209_090002.jpg', '20221211_103519.jpg', '20221231_121431.jpg', '20230115_083803.jpg', '20230305_144250.jpg', 'FB_IMG_1670953491315.jpg', 'FB_IMG_1684401924215.jpg', 'FB_IMG_1684401970777.jpg', 'FB_IMG_1684402012455.jpg'];
        path ="anniversaire/"
        break;
        case '/projet/':
      var imageFiles = ['20201018_081227.jpg', '20201023_085906.jpg', '20210314_105950.jpg', '20220521_142911.jpg', '20220827_092004.jpg',
    '20221016_111410.jpg', '20221115_132529.jpg', '20221116_171816.jpg', '20221117_132021.jpg', '20221126_100146.jpg', '20221211_112310.jpg', '20230107_113806.jpg', '20230114_170841.jpg', 'FB_IMG_1684401979327.jpg', 'FB_IMG_1684401992686.jpg'];
      path = "accueil/";
      break;

      default:
        var imageFiles = [];
        break;
}

// Reference to the image container element
var imageContainer = document.getElementById('image-container');

  // Loop through the image files and create <img> elements
  imageFiles.forEach(function(image) {
    var img = document.createElement('img');
    img.src = 'assets/photos/'+path + image;
    img.className = 'image-item';
    
    // Append the <img> element to the image container
  imageContainer.appendChild(img);
});

  