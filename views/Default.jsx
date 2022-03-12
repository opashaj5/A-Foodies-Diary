const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        const { posts } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Peas in a Pod Blog</title>
                    {/* Milligram CSS for Some Default Styling */}
                    {/* Google Fonts */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
                    {/* CSS Reset */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"/>
                    {/* Milligram CSS */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"/>
                    {/* Jquery */}
                    <script
                    src="https://code.jquery.com/jquery-3.6.0.min.js"
                    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                    crossOrigin="anonymous">
                    </script>
                    {/* OUR CSS AND JS */}
                    <link rel="stylesheet" href="/styles.css"/>
                    <script src="/app.js" defer></script>
                </head>
                <body>
                    <header>
                        <h1>Peas in a Pod</h1>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;