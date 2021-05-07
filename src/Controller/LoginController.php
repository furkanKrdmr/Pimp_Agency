<?php

/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\LoginManager;

class LoginController extends AbstractController
{
    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function login()
    {
        if (isset($_SESSION['id']) && $_SESSION['id'] > 0) {
            header('Location: /Home/index');
            return $this->twig->render('Home/index.html.twig', ['isConnected' => true]);
        } else {
            return $this->twig->render('Connection/login.html.twig');
        }
    }


    public function signUp()
    {
        $errors  = [];
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $data = array_map('trim', $_POST);
            $email = htmlentities($data['email']);
            $password = htmlentities($data['password']);

            if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                $errors['email'] = "Votre adresse mail n'est pas valide";
            }

            if (empty($_POST['password'])) {
                $errors['password'] = "Vous devez saisir un mode de passse valide";
            }
            if (empty($errors)) {
                $loginManager = new LoginManager();
                $signUper = $loginManager->logIn($email, $password);
                if ($signUper == -1) {
                    return "Mauvais identifiants: adresse mail ou mot de passe";
                } else {
                    $_SESSION['firstname'] = $signUper['firstname'];
                    $_SESSION['id'] = $signUper['id'];
                }

                if (isset($_SESSION['id']) && isset($_SESSION['firstname'])) {
                    return $this->twig->render(
                        'Home/index.html.twig',
                        ['isConnected' => true, 'errors' => $errors]
                    );
                }
            }
        }
        return 'impossible de se connecter avec ces identifiants';
    }

    public function deconnect()
    {
        if (isset($_SESSION['id'])) {
            session_destroy();
        }
        return $this->twig->render('Home/index.html.twig');
    }
}
