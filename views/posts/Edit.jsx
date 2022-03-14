const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { post } = this.props;
        return (
            <DefaultLayout>
                <div className="edit-post">
                    <h2>Edit Recipe:</h2>
                    <form action={`/posts/${post._id}?_method=PUT`} method="POST">
                        Recipe Name: <input defaultValue={post.title} name="title" type="text" /><br />
                        Image URL: <input defaultValue={post.img} name="img" type="url" /><br />
                        Entry: <textarea defaultValue={post.entry} name="entry" /><br />
                        <input id="submit-btn" type="submit" value="Submit" />
                    </form>
                    <form action={`/posts/${post._id}?_method=DELETE`} method="POST">
                        <input className="delete-btn" type="submit" value="Delete" />
                    </form>
                    <a href="/posts"><button>Back To Main Page</button></a>
                </div>
            </DefaultLayout>
        )
    }
};

module.exports = Edit;