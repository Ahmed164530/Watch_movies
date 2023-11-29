<?php
    session_start();

    $_SESSION['user_type'] = 'admin';
    // session_destroy();

    if(isset($_SESSION['user_type']))
    {
        if($_SESSION['user_type'] === 'admin') 
        {
            header('Location: admin/');
            exit;
        }
        else{
            header('Location: user/');
            exit;
        }
    }
    else{
        header('Location: ../');
        exit;
    }


?>