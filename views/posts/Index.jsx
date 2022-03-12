const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render(){
        const { posts } = this.props;
        return(
            <DefaultLayout>
                <a href="/posts/new"><button>Create A New Post</button></a>
                <div>
                    {
                        posts.map((post) => (
                            <article>
                                <a href={`/posts/${post._id}`}>
                                    <h2>
                                        {post.title}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;