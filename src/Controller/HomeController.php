<?php

/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

class HomeController extends AbstractController
{
    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index()
    {
        $isConnected = false;
        if (isset($_SESSION['connexion']) and $_SESSION['connexion'] === true) {
            $isConnected = true;
        }

        return $this->twig->render('Home/index.html.twig', ['isConnected' => $isConnected]);
    }

    public function cgv()
    {
        return $this->twig->render('Home/cgv.html.twig');
    }

    public function legal()
    {
        return $this->twig->render('Home/legal_properties.html.twig');
    }
}
