<!-- image-gallery.php -->
<?php
$folderPath = '../galleries/costume-contest'; // Replace with the path to your folder
$files = glob($folderPath . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
?>

<div id="imageContainer">
    <?php foreach ($files as $file) : ?>
        <?php
        $imageUrl = $file;
        ?>
        <div class="image-container">
            <img src="<?= $imageUrl ?>" alt="<?= $imageUrl ?>" loading="lazy">
            <a class="download-link" href="<?= $imageUrl ?>" download>Download</a>
        </div>
    <?php endforeach; ?>
</div>
