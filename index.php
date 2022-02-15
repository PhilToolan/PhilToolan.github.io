<?php include 'includes/head.php'; ?>
<body>
    <!-- HEADER -->
    <?php include 'includes/header.php'; ?>

    <!-- MAIN -->
    <main>
        <div class="container-responsive principal-margin">
                <div class="cover">
                    <div class="cover-content" data-aos="fade-up" data-aos-duration="600">
                        <div class="cover-hey">
                            <div class="line"></div>
                            <h5>HEY!</h5>
                        </div>
                        <h1>I'M PHILIP TOOLAN</h1>
                        <h4>Creative coder based in Ireland</h4>
                        <div class="cover-links">
                            <a class="button" href="contact.php">Contact me</a>
                            <a class="link" href="files/PhilipToolan-CV.pdf" download>Download my CV</a>
                        </div>
                    </div>
                    <div class="cover-background">
                        <img src="images/white-isologo.png" alt="VIVI's isologo">
                        <video id="cover-video" autoplay loop muted>
                            <source src="images/projects/ansibin-jr.mp4" type="video/mp4">
                        </video>
                    </div>
            </div>
            <div class="featured">
                <div class="title" data-aos="fade-up" data-aos-duration="600">
                    <div class="line"></div>
                    <h5>FEATURED PROJECTS</h5>
                </div>
                <div id="featured-projects" data-aos="fade-up" data-aos-duration="600">
                    
                </div>
            </div>
            <div class="space"></div>
            <div class="projects" id="projects">
                <div class="title" data-aos="fade-up" data-aos-duration="600">
                    <div class="line"></div>
                    <h5>ALL PROJECTS</h5>
                </div>
                <div class="types" data-aos="fade-up" data-aos-duration="600">
                    <div id="all" class="active">
                        <p>All</p>
                    </div>
                    <div id="virtualreality">
                        <p>Virtual Reality</p>
                    </div>
                    <div id="realtime3d">
                        <p>Real Time 3D</p>
                    </div>
                    <div id="3dmodelling">
                        <p>3D Modelling</p>
                    </div>
                    <div id="videogames">
                        <p>Video Games</p>
                    </div>
                    <div id="proceduralgeneration">
                        <p>Procedural Generation</p>
                    </div>
                    <div id="branding">
                        <p>Branding</p>
                    </div>
                </div>
                <div id="all-projects" data-aos="fade-up" data-aos-duration="600">
                    
                </div>
            </div>
        </div>
    </main>

    <!-- SCRIPT PROJECTS -->
    <script src='js/projects.js' async></script>
    <!-- FOOTER -->
    <?php include 'includes/footer.php'; ?>
    <!-- HEADER END -->
    <?php include 'includes/head-end.php'; ?>
</body>
