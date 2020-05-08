const React = require('react');

class Show extends React.Component {
    render() {
        const { name, flavor, readyToAdd } = this.props.coffee;
        return (
            <Default>
            <div>
                <h1>New Coffee Items</h1>
                <p>The {name} is {flavor} </p>
                <p>{readyToAdd ? `It is ready to drink` : `Is not ready to drink`}</p>
            </div>
            </Default>
        )
    }
}

module.exports = Show;