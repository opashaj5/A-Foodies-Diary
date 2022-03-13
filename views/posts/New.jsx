const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render(){
        return(
            <DefaultLayout>
                <div>
                    <h1>Create a New Post</h1>
                    <nav>
                        <a href="/posts">Back</a>
                    </nav>
                    <form action="/posts" method="POST">
                        Recipe Name: <input name="title" type="text"/><br/>
                        Image URL: <input name="img"  type="url"/><br/>
                        Entry: <textarea name="entry"/><br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
};

module.exports = New;