<?php

/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\CustomManager;

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
        return $this->twig->render('Custom/custom.html.twig');
    }
    public function saveConfig()
    {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $item = array_map('trim', $_POST);
            $config = new CustomManager();
            $configs = $config->insertConfig($item);
            return $this->twig->render('Custom/custom.html.twig', ['configs' => $configs]);
        }
    }
}
