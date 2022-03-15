const React = require('react');
const DefaultLayout = require('../Default.jsx');

class About extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div className="about-page">
                    <h2>The Creator</h2>
                    <article>
                        <div className="about-card">
                            <img className="card-img-top" src={img} alt="card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Ornela Pashaj</h5>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </article><br></br>

                    <a href="/contact"><button>Contact Me</button></a>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = About;