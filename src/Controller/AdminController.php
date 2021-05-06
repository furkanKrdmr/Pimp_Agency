 <?php

namespace App\Controller;

use Exception;
use App\Model\CustomManager;

class AdminController extends AbstractController
{
    public function admin()
    {
        $errors = [];
        $CustomManager = new CustomManager();
        $customer = $CustomManager->selectAll();

        if (isset($_SESSION['current_user']) && $_SESSION['firstname']['role_id'] == 1) {
            return $this->customRender('Admin/list.html.twig', ['customer' => $customer]);
        } else {
            $errors = "Accès interdit aux utilisateurs non-admins !";
            return $this->customRender('Home/index.html.twig', ['errors' => $errors]);
        }
    }
}