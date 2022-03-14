const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="new-post">
                    <h2>Create a New Post</h2>
                    <form action="/posts" method="POST">
                        Recipe Name: <input name="title" type="text" /><br />
                        Image URL: <input name="img" type="url" /><br />
                        Entry: <textarea name="entry" /><br />
                        <input id="submit-btn" type="submit" value="Submit" />
                    </form>
                    <a href="/posts"><button>Back To Main Page</button></a>
                </div>
            </DefaultLayout>
        )
    }
};

module.exports = New;