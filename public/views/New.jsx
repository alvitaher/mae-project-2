const React = require('react');
const Default = require('./Default.jsx');
class New extends React.Component {
    render() {
      return (
        <Default>
          
          <div>
              <h1>Welcome to the Coffee Shop</h1>
              {/* <img src="/image/coffee.jpg" alt="coffee"/> */}
              <form action="/menu" method="POST">
                  Hot/Iced: <input type="text" name="name" /><br/> <br/>
                  Flavor: <input type="text" name="flavor" /><br/> <br/>
                  Add to the menu: <input type="checkbox" name="readyToAdd" /><br/> <br/>
                  <input type="submit" name="" value="Create Coffee"/>
               </form>
          </div>
          
          </Default>)
          
    }
  }
  
  module.exports = New;