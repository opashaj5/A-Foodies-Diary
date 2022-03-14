const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { post } = this.props;
        return (
            <DefaultLayout>
                <form action={`/posts/${post._id}?_method=PUT`} method="POST">
                    Recipe Name: <input defaultValue={post.title} name="title" type="text"/><br/>
                    Image URL: <input defaultValue={post.img} name="img" type="url"/><br/>
                    Entry: <textarea defaultValue={post.entry} name="entry"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </DefaultLayout>
        )
    }
};

module.exports = Edit;