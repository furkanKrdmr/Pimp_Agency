<?php
if(isset($_POST['submit'])){

    if(isset($_POST['lastname']) and !empty($_post['lastname'])){
        if(isset(['password']) and !empty($_POST['password'])){

            require "server.php";

            $getUser = $pdo->prepare("SELECT email FROM admin");
            $getUser->execute();
            
            $rows = $getUser->rowCount();

        }else{
            $erreur = "Veuillez saisir un password";
        }
    }else{
        $erreur = "Veuillez saisir un lastname";
    }
}