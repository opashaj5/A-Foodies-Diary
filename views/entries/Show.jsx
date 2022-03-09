const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render(){
        const { entry } = this.props
        return(
            <DefaultLayout>
            <div>
              <article>
                <h2>
                  {entry.name}
                </h2>
                <a href={`/entries/${ entry._id }/edit`}><button>Edit</button></a>
                <form action={`/entries/${ entry._id }?_method=DELETE`} method="POST">
                  <input type="submit" value="Delete" />
                </form>
                <a href="/entries/"><button>Back to Main</button></a>
              </article>
            </div>
          </DefaultLayout>
        )
    }
}

module.exports = Show;