<?php
include('cnx.php');

if(isset($_POST['submit'])){
    $marqueExpression = "/^[a-zA-Z]/d+(\s[a-zA-Z0-9]+)?$/";
    $matriculeExpression = "/^[0-9]{4}[A-Z]{2}(0[0-9]|1[0-3])$/";

    $marque = $_POST['marque'];
    $matricule = $_POST['matricule'];

    if (preg_match($marqueExpression, $marque) && preg_match($matriculeExpression, $matricule)) {
        $sql = "insert into vehicule(marque,matricule) values('$marque','$matricule')";

        $conn->query($sql);
        header('location: registred.php');
        die();

    }

    header('location: /compilation/index.php');

    

}