const defaultTemplateContent = `<?
$h1				 = "Title";
$title			= "Title";
$desc			 = "Title - ";
$key				= "uuuuuuuuuu, jjjjjjjjjjjj, lllllllllll";
$var				= "Title";
include("inc/head.php");
?>
<!--STARTSCRIPTSHEADER-->
<!--ENDSCRIPTSHEADER-->
</head>

<body>
  <?php include("inc/topo.php"); ?>
  <main>
    <div class="content">
      <section>
        <?= $autoBreadcrumb ?>
        <!--STARTCOMPONENTS-->
        <div class="container">
          <div class="wrapper">
            <h2>Saiba mais sobre <?= $h1 ?></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
          <div class="clear"></div>
        </div>
        <!--ENDCOMPONENTS-->
      </section>
    </div>
  </main>
  <?php include("inc/footer.php"); ?>
  <!--STARTSCRIPTSFOOTER-->
  <!--ENDSCRIPTSFOOTER-->
</body>

</html>`;

export default defaultTemplateContent;

