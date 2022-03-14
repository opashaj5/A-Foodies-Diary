const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
  render() {
    const { post } = this.props
    return (
      <DefaultLayout>
        <div className="show-page">
          <h2>Recipe:</h2>
          <article>
            <div className="show-card">
              <img className="card-img-top" src={post.img} alt="card image cap" />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.entry}</p>
              </div>
            </div>
          </article><br></br>
          <a href={`/posts/${post._id}/edit`}><button id="btn">Edit Post</button></a><br></br>
          <a href="/posts"><button>Back To Main Page</button></a>
        </div>
      </DefaultLayout>
    )
  }
}

module.exports = Show;