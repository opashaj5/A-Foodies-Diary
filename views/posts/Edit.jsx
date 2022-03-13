const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { post } = this.props;
        return (
            <DefaultLayout>
                <form action={`/posts/${post._id}?_method=PUT`} method="POST">
                    Recipe Name: <input name="name" type="text"/><br/>
                    Image URL: <input name="img"  type="url"/><br/>
                    Entry: <input name="entry"  type="textarea"/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;