const React = require('react');
const Default = require('./Default.jsx');
class Index extends React.Component {
    render() {
        const { menu } = this.props;
        return (
            <Default>
            <div>
                <h1>Welcome to the Coffee Shop</h1>
                <nav class='title'>
                    <a href="/menu/new">Create a New Item</a>
                </nav>
                <ul>
                    {
                        menu.map((coffee, i) => {
                            return (
                                <li>
                                    Product: <a href={`/menu/${coffee._id}`}>{coffee.name}</a> - {coffee.flavor} <br></br>
                                    {coffee.readyToAdd ? `It is ready to drink` : `It is not ready to drink`}
                                    
                                    <form action={`/menu/${coffee._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                                    {/* Create a link to the edit route /menu/id_of_coffee/edit */}
                                    <a href={`/menu/${coffee._id}/edit`}>Edit</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </Default>
        )
    }
}

module.exports = Index;