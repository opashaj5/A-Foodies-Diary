const React = require('react');
const Default = require('./layout/Default.jsx');

class Index extends React.Component {
    render(){
        const entries = this.props.entries;
        return (
            <Default>
                <div className="entries">
                    <nav>
                        <a href="/entries/new">Back</a>
                    </nav>
                    <ul>
                    {
                        entries.map((entry) => {
                            return (
                                <li key={`${entry._id}`}>
                                    <a href={`/entries/${entry._id}`}>{entry.name}</a> Entry {entry.entry}
                                    <form action={`/entries/${entry._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value={`Delete ${entry.entry}`} />
                                    </form>
                                </li>
                            )
                        })
                    }
                    </ul> 
                </div>
            </Default>
        )
    }
}

module.exports = Index;