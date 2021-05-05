<?php

/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\CustomManager;
use App\Controller\LoginController;

class CustomController extends AbstractController
{
    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function custom()
    {
        if (isset($_SESSION['connexion']) and $_SESSION['connexion'] === false) {
            return $this->twig->render('Custom/custom.html.twig');
        }
        return $this->twig->render('Login/login.html.twig');
    }
    public function saveConfig()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $item = array_map('trim', $_POST);
            $config = new CustomManager();
            $configs = $config->insertConfig($item);
            return $this->twig->render('Custom/custom.html.twig', ['configs', $configs]);
        }
    }
}
