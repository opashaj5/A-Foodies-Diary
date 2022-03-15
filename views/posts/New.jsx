const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="new-post">
                    <h2>Create a New Post</h2>
                    <form action="/" method="POST">
                        Recipe Name: <input className="input-style" name="title" type="text" /><br />
                        Image URL: <input className="input-style" name="img" type="url" /><br />
                        Entry: <textarea className="entry-style" name="entry" /><br />
                        <input id="btn" type="submit" value="Submit" />
                    </form>
                    <a href="/users/home"><button>Back To Main Page</button></a>
                </div>
            </DefaultLayout>
        )
    }
};

module.exports = New;