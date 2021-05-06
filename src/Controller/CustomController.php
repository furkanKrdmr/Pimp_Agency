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
        if (isset($_SESSION['id']) && $_SESSION['id'] > 0) {
            return $this->twig->render('Custom/custom.html.twig', ['isConnected' => true]);
        }
        return $this->twig->render('Connection/login.html.twig');
    }
    public function saveConfig()
    {
        if (
            $_SERVER['REQUEST_METHOD'] === 'POST'
            && !empty($_POST['prix_moto'])
            && !empty($_POST['prix_retro'])
            && !empty($_POST['prix_selle'])
        ) {
            $item = array_map('trim', $_POST);
            $config = new CustomManager();
            $configs = $config->insertConfig($item, $_SESSION['id']);
            return $this->twig->render('Custom/custom.html.twig', ['configs' => $configs, 'isConnected' => true]);
        } else {
            return 'veuillez selectionner des éléments';
        }
    }

    public function showConfigs()
    {
        return $this->twig->render('Custom/showCustom.html.twig');
    }

    public function showConfigUser()
    {
        if (isset($_SESSION['id']) && $_SESSION['id'] > 0) {
            $listCustom = new CustomManager();
            $listCustoms = $listCustom->showConfigById($_SESSION['id']);

            return $this->twig->render(
                'Custom/showCustom.html.twig',
                ['listCustoms' => $listCustoms, 'isConnected' => true]
            );
        }
    }
}
