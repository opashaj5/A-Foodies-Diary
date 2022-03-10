const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { post } = this.props;
        return (
            <DefaultLayout>
                <form action={`/posts/${post._id}?_method=PUT`} method="POST">
                    <fieldset>
                    <legend>Edit {post.name}</legend>
                    <label>Title:<input type="text" name="title" placeholder="enter title" defaultValue={post.name}/>
                    </label>
                    <label>Entry:<input type="text" name="entry" placeholder="blog entry" defaultValue={post.entry}/>
                    </label>
                    </fieldset>
                    <input type="submit" value={`Edit ${post.name}`} />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;