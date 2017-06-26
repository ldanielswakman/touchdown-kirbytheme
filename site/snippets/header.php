<!doctype html>

<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">

  <head>

    <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="author" content="L Daniel Swakman, ldaniel.eu" />
    <meta http-equiv="Cache-control" content="public">

    <meta name="description" content="<?= $site->description()->html() ?>">
    <meta name="keywords" content="">

    <!-- Social share parameters -->
    <meta property="og:image" content="" />
    <meta property="og:title" content="<?= $page->title()->html() ?>" />
    <meta property="og:site_name" content="<?= $site->title()->html() ?>" />
    <meta property="og:description" content="<?= $site->description()->html() ?>" />

    <?
    $js_assets = [
      'assets/js/jquery-2.2.3.min.js',
      'assets/js/jquery.smooth-scroll.min.js',
      'assets/js/sticky-kit.min.js',
      'assets/js/scripts.js'
    ];
    $css_assets = [
      'assets/css/flexboxgrid.min.css',
      'assets/css/style.css'
    ];
    ?>
    
    <?= js($js_assets) ?>
    <?= css($css_assets) ?>

  </head>

  <body>
