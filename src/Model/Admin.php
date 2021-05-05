<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <link rel="stylesheet" type="text/css" href="../app/css/main.css">
</head>
<body>
    <header>
        <h2>E-site</h2>


        <nav>
           <ul>
              <li><a href='#'>Accueil</a></li>
              <li><a href='#'>Produits</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Forum</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
    </header>
    <section class="slider">
        <div class="box">
             <h3 class="title">Espace Administrateur</h3>
             <span class="logo"></span>
             <?php include_once ""?>
             <form action="" method="post">
                 <input class="lastname" type="text" name="lastname" placeholder="lastname">
                 <input class="lastname" type="password" name="password" placeholder="passworld">
                 <button type="submit" name="submit">Se connecter </button>
            </form>
    
</body>
</html>