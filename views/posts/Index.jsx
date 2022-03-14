const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            <DefaultLayout>
                <h1 class="header text-center">Welcome!</h1><br></br>
                <div className="anchor-wrapper">
                    <a href="/posts/new"><button id="create-btn">Create A New Post</button></a>
                </div>
                <div className="container">
                    <div className="card-wrapper">
                        {
                            posts.map((post) => (
                                <div className="card" style={{ width: 18 + "rem" }}>
                                    <img className="card-img-top" src={post.img} alt="card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.entry}</p>
                                        <a href={`/posts/${post._id}`} className="btn btn-info">View Full Recipe</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </DefaultLayout>
        )
    }
};

module.exports = Index;