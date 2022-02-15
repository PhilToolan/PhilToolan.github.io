<?php include 'includes/head.php'; ?>
<body>
    <!-- HEADER -->
    <?php include 'includes/header.php'; ?>

    <!-- MAIN -->
    <main>
        <div class="container-responsive principal-margin">
            <div class="project-cover">
                <img src="images/white-isologo.png" alt="VIVI's isologo">
            </div>
            <div class="project-cover" data-aos="fade-up" data-aos-duration="600">
                <h1 id="project-title"></h1>
                <div class="title">
                    <div class="line"></div>
                    <h5 id="project-date"></h5>
                </div>
            </div>
            <div class="project-summary" data-aos="fade-up" data-aos-duration="600">
                <div class="project-details">
                    <div class="project-detail">
                        <p>Author</p>
                        <p id="project-author"></p>
                    </div>
                    <div class="project-detail">
                        <p id="project-client-title"></p>
                        <a class="project-link" id="project-client"></a>
                    </div>
                    <div class="project-detail">
                        <p id="project-awards-title"></p>
                        <p class="project-link" id="project-awards"></p>
                    </div>
                </div>
                <hr>
                <div class="project-description">
                    <p>Project description</p>
                    <p id="project-long-description"></p>
                    <div id="project-buttons">
                    </div>
                </div>
            </div>
            <div class="project-role" data-aos="fade-up" data-aos-duration="600">
                <div class="project-what">
                    <p>What did I do?</p>
                    <p id="project-role"></p>
                </div>
            <div id="project-img-cover"></div>
            </div>
            <div id="project-images" data-aos="fade-up" data-aos-duration="600">
            </div>
            <a class="link" href="index.php#projects" data-aos="fade-up" data-aos-duration="600">< Back to projects</a>
        </div>
    </main>
    <!-- SCRIPT PROJECTS -->
    <script src='js/project-info.js' async></script>
    <!-- FOOTER -->
    <?php include 'includes/footer.php'; ?>
    <!-- HEADER END -->
    <?php include 'includes/head-end.php'; ?>
</body>
