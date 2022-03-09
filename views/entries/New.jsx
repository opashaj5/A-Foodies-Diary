const React = require('react');
const Default = require('./layout/Default.jsx');

class New extends React.Component {
    render(){
        return(
            <Default>
                <div>
                    <h1>A Foodies Diary</h1>
                    <nav>
                        <a href="/entries">Back</a>
                    </nav>
                    <form action="/entries" method="POST">
                        Title: <input name="title" type="text" /><br/>
                        Date: <input name="date" type="date"></input><br/>
                        Entry: <input name="entry"  type="textarea"/><br/>
                        <input type="submit" value="Create New Entry" />
                    </form>
                </div>
            </Default>
        
        )
    }
};

module.exports = New;