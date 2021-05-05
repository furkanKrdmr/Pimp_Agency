<?php

/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\RegistrationManager;

class ConnectionController extends AbstractController
{
    /**
     * Display home page
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */

    public function save(array $data, array $errors): array
    {
        if ($data['password'] != $data['cpwd']) {
            $errors[] = "Le mot de passe n'est pas identique à sa confirmation";
        }


        if (strlen($data['password']) < 7) {
            $errors[] = "Le mot de passe doit faire plus de 6 caractères";
        }

        if (empty($data['firstname'])) {
            $errors[] = "Le prénom est obligatoire";
        }

        if (empty($data['lastname'])) {
            $errors[] = "Le nom est obligatoire";
        }


        if (!empty($data)) {
            $customer = array_map('trim', $data);
            $customer['lastname'] = htmlentities($customer['lastname']);
            $customer['firstname'] = htmlentities($customer['firstname']);
            $customer['address'] = htmlentities($customer['address']);
            $customer['postal_code'] = htmlentities($customer['postal_code']);
            $customer['city'] = htmlentities($customer['city']);
            $customer['phone_number'] = htmlentities($customer['phone_number']);
            $customer['email'] = htmlentities($customer['email']);
            $customer['password'] = ($customer['password']);
            $customer['cpwd'] = $customer['cpwd'];
            return $customer;
        }


        return $errors;
    }

    public function saveRegistration(): string
    {
        $errors = [];
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $customer = $this->save($_POST, $errors);

            $account = new RegistrationManager();
            $accounts = $account->insertCustomer(
                $customer['lastname'],
                $customer['firstname'],
                $customer['address'],
                $customer['postal_code'],
                $customer['city'],
                $customer['phone_number'],
                $customer['email'],
                $customer['password']
            );
            return $this->twig->render(
                'Connection/registration.html.twig',
                ['accounts' => $accounts, 'errors' => $errors]
            );
        }
        return $this->twig->render('Connection/registration.html.twig');
    }

    public function registration()
    {
        return $this->twig->render('Connection/registration.html.twig');
    }
}