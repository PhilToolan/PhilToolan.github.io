<?php

switch ($_SERVER["SCRIPT_NAME"]) {
    case "/index.php":
        $CURRENT_PAGE = "Index";
        break;
    case "/about.php":
        $CURRENT_PAGE = "About";
        break;
    case "/contact.php":
        $CURRENT_PAGE = "Contact";
        break;
    default:
        $CURRENT_PAGE = "Other";
        break;
}
?>

<header class="mobile-header">
    <div class="logo">
        <a href="index.php"><img src="images/orange-logoH.png" alt="vivi's logo"></a>
    </div>
    <nav class="burger-menu">
        <input id="burger-check" type="checkbox" />
        <label class="burger-button" for="burger-check">
            <span></span>
        </label>
        <div class="burger-box">
            <div class="logo">
                <a href="index.php"><img src="images/orange-logoH.png" alt="vivi's logo"></a>
            </div>
            <ul>
                <li>
                    <a class="<?php if ($CURRENT_PAGE == 'Index') { ?>active<?php } ?>" href="index.php"><p>Home</p></a>
                </li>
                <li>
                    <a class="<?php if ($CURRENT_PAGE == 'About') { ?>active<?php } ?>" href="about.php"><p>About</p></a>
                </li>
                <li>
                    <a class="<?php if ($CURRENT_PAGE == 'Contact') { ?>active<?php } ?>" href="contact.php"><p>Contact</p></a>
                </li>
            </ul>
        </div>
    </nav>
    <div id="up-button-container" class="hide">
        <a href="#">
            <span class="icon-up"></span>
        </a>
    </div>
</header>

<header class="desktop-header">
    <div class="container-responsive">
        <div class="flex-container">
            <div class="logo">
                <a href="index.php"><img src="images/orange-logoH.png" alt="vivi's logo"></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="index.php"><p class="<?php if ($CURRENT_PAGE == 'Index') { ?>active<?php } ?>">Home</p></a>
                    </li>
                    <li>
                        <a href="about.php"><p class="<?php if ($CURRENT_PAGE == 'About') { ?>active<?php } ?>">About</p></a>
                    </li>
                    <li>
                        <a href="contact.php"><p class="<?php if ($CURRENT_PAGE == 'Contact') { ?>active<?php } ?>">Contact</p></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <div id="up-button-container" class="hide">
        <a href="#">
            <span class="icon-up"></span>
        </a>
    </div>
</header>

<?php include 'includes/load.php'; ?>