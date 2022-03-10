const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render(){
        return(
        <DefaultLayout>
            <form action="/posts" method="post">
                <fieldset>
                <legend>Create a New Post</legend>
                <label>
                    Title:<input type="text" name="title" placeholder="enter title" />
                </label>
                <label>
                    Entry:<input type="text" name="entry" placeholder="blog entry" />
                </label>
                </fieldset>
                <input type="submit" value="create new post" />
            </form>
        </DefaultLayout>
        )
    }
}

module.exports = New;