const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Peas in a Pod</title>
                    {/* Milligram CSS for Some Default Styling */}
                    {/* Google Fonts */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic" />
                    {/* CSS Reset */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
                    {/* Milligram CSS */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
                    {/* Jquery */}
                    <script
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                        crossOrigin="anonymous">
                    </script>
                    {/* Font Awesome */}
                    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
                    {/* Github Button */}
                    <script async defer src="https://buttons.github.io/buttons.js"></script>
                    {/* Our CSS, Bootstrap and JS */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
                        crossorigin="anonymous" />
                    <link rel="stylesheet" href="/css/style.css" />
                    <script src="/server.js" defer></script>
                </head>
                <body>
                    <nav>
                        <ul class="nav nav-pills nav-justified" role="tablist">
                            <li class="nav-item"><a class="nav-link" href="/users/home">HOME</a></li>
                            <li class="nav-item"><a class="nav-link" href="/users/about">ABOUT</a></li>
                            <li class="nav-item"><a class="nav-link" href="/users/contact">CONTACT</a></li>
                            <li class="nav-item"><a class="nav-link" href="/users/login">LOGIN</a></li>
                        </ul>
                    </nav>
                    <header class="header text-center">
                        <img class="img-fluid" src="https://i.imgur.com/GuiSbvm.png" />
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer class="footer text-center">
                        <div class="content">
                            <p class="footer">Created By Ornela Pashaj</p>
                            <span style={{ fontSize: "150%" }}>
                                <a class="footer-btn" href="https://github.com/opashaj5" target="_blank"><i class="fab fa-github-square"></i></a>
                                <a class="footer-btn" href="https://www.linkedin.com/in/ornelapashaj/" target="_blank"><i class="fab fa-linkedin"></i></a>
                            </span>
                        </div>
                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;