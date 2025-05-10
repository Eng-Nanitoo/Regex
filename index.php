<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
</body>
<main>
    <form action="/Compilation/php/upload.php" method="POST" id="form">
        <div>
                <input type="text" placeholder="Marque" name="marque" oninput="checkMarque()" id="marque">
                <p id="marqueError"></p>
            </div>
            <div>
                <input type="text" placeholder="Matricule" name="matricule"  oninput="checkMatricule()" id="matricule">
                <p id="matriculeError"></p>
            </div>
            <div class="submit">
                <button type="submit" name="submit">Enregistrer</button>
            </div>
        </form>
    </main>
    <script src="script.js">
    </script>
</body>
</html>
