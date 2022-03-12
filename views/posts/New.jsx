const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render(){
        return(
            <DefaultLayout>
                <div>
                    <nav>
                        <a href="/posts">Back</a>
                    </nav>
                    <form action="/posts" method="POST">
                        Title: <input name="title" type="text" /><br/>
                        Date: <input name="date" type="date"></input><br/>
                        Entry: <input name="entry"  type="textarea"/><br/>
                        <input type="submit" value="Create New Post" />
                    </form>
                </div>
            </DefaultLayout>
        
        )
    }
};

module.exports = New;