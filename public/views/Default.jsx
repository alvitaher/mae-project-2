const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Coffee Shop</title>
                    <link rel="stylesheet" href="/style.css"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;