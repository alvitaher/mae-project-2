const React = require('react');

class Edit extends React.Component {
    render() {
        const { _id, name, flavor, readyToAdd} = this.props.menu;
        return (
            <Default>
            <div>
                <h1>Edit Page</h1>
                {/* url - /menu/id_of_coffee? parameter to indicate the request */}
                <form action={`/menu/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={name}/> <br/>
                    Flavor: <input type="text" name="flavor" defaultValue={flavor}/> <br/>
                    Is Ready to Order: 
                    <input type="checkbox" name="readyToAdd" checked={readyToAdd}/>
                    <br/>
                    <input type="submit" name="" value="Submit Changes"/>
                </form>
            </div>
            </Default>
        )
    }
}

module.exports = Edit;