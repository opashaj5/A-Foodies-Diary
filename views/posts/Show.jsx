const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render(){
        const { post } = this.props
        return(
            <DefaultLayout>
            <div>
              <article>
                <h2>
                  {post.title}
                </h2>
                <p>{post.entry}</p>
                <a href={`/posts/${ post._id }/edit`}><button>Edit</button></a>
                <form action={`/posts/${ post._id }?_method=DELETE`} method="POST">
                  <input type="submit" value="Delete" />
                </form>
                <a href="/posts/"><button>Back to Main</button></a>
                <img src={post.img} alt=""/>
              </article>
            </div>
          </DefaultLayout>
        )
    }
}

module.exports = Show;