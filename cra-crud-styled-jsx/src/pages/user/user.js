import React, { Component } from 'react';

//style
import style from './user.module.css'

class User extends Component {
    render() {
        return (
            <div>
                <section className={`${style.hero} ${style.isPrimary} hero is-primary`}>
                    <div className="hero-body">
                        <div className="columns">
                            <div className="column is-12">
                                <div className="container content">
                                    <i className="is-large fab fa-discord"></i>
                                    <i className="is-large fas fa-code"></i>
                                    <h1 className="title">Code <em>All</em> The Things</h1>
                                    <h3 className="subtitle">
                                        Collection of code goodies for next-level dev
                                    </h3>
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="button is-primary is-large">
                                        <span className="icon">
                                            <i className="fab fa-github"></i>
                                        </span>
                                        <span>Github</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-3">
                                <aside className="is-medium menu">
                                    <p className="menu-label">
                                        categories
          </p>
                                    <ul className="menu-list">
                                        <li className="is-right"><a href="const" className="is-active"><i className="fab fa-css3-alt"></i> CSS</a></li>
                                        <li className={`${style.li}`}><a href="let" className="is-active"><i className="fab fa-js"></i> JS</a></li>
                                        <li className={`${style.li}`}><a href="let" className="is-active"><i className="fab fa-html5"></i> HTML</a></li>
                                    </ul>
                                    <p className="menu-label">
                                        More to come...
              </p>
                                    <ul className="menu-list">
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Lorem</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Ipsum</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Dolor</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Animi</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Eximi</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Nullius</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Oxipi</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Vultus</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Voluptatis</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Exomarphis</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Finimi</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Aenigma</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Arkham</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Blue</span></li>
                                        <li className={`${style.li}`}><span className="tag is-white is-medium">Medium</span></li>
                                    </ul>
                                </aside>
                            </div>
                            <div className="column is-9">
                                <div className="content is-medium">
                                    <h3 className="title is-3">Snippets ¯\_(ツ)_/¯</h3>
                                    <div className={`${style.box} box`}>
                                        <h4 id="const" className="title is-3">const</h4>
                                        <article className={`${style.message} is-primary`}>
                                            <span className="icon has-text-primary">
                                                <i className="fab fa-js"></i>
                                            </span>
                                            <div className="message-body">
                                                Block-scoped. Cannot be re-assigned. Not immutable.
                  </div>
                                        </article>
                                        <pre className={style.pre}><code className="language-javascript">const test = 'test';</code></pre>
                                    </div>
                                    <div className={`${style.box} box`}>
                                        <h4 id="let" className="title is-3">let</h4>
                                        <article className={`${style.message} is-primary`}>
                                            <span className="icon has-text-primary">
                                                <i className="fas fa-info-circle"></i>
                                            </span>
                                            <div className="message-body">
                                                Block-scoped. Can be re-assigned.
                </div>
                                        </article>
                                        <pre className={style.pre}><code className="language-javascript">let i = 0;</code></pre>
                                    </div>
                                    <h3 className="title is-3">More to Come...</h3>
                                    <div className={`${style.box} box`}>
                                        <h4 id="lorem" className="title is-4">More to come...</h4>
                                        <article className={`${style.message} is-primary`}>
                                            <span className={`${style.span} ${style.icon} has-text-primary`}>
                                                <i className="fas fa-info-circle"></i>
                                            </span>
                                            <div className="message-body">
                                                Lorem ipsum dolor sit amet, mea ne viderer veritus menandri, id scaevola gloriatur instructior sit.
              </div>
                                        </article>
                                        <pre className={style.pre}><code className="language-javascript">let i = 0;</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <section className="section">
                        <div className="container">
                            <div className="columns is-multiline">
                                <div className="column is-one-third">
                                    <article className="notification media has-background-white">
                                        <figure className="media-left">
                                            <span className="icon">
                                                <i className="has-text-warning fas fa-columns fa-lg"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Columns</h1>
                                                <p className="is-size-5 subtitle">
                                                    The power of <strong>Flexbox</strong> in a simple interface
              </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-info">
                                                <i className="fab fa-lg fa-wpforms"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Form</h1>
                                                <p className="is-size-5 subtitle">
                                                    The indispensable <strong>form controls</strong>, designed for maximum clarity
              </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fas fa-lg fa-cubes"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Components</h1>
                                                <p className="is-size-5 subtitle">
                                                    Advanced multi-part components with lots of possibilities
              </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-grey">
                                                <i className="fas fa-lg fa-cogs"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Modifiers</h1>
                                                <p className="is-size-5 subtitle">
                                                    An <strong>easy-to-read</strong> naming system designed for humans
              </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-primary">
                                                <i className="fas fa-lg fa-warehouse"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Layout</h1>
                                                <p className="is-size-5 subtitle">
                                                    Design the <strong>structure</strong> of your webpage with these CSS classes
              </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                <div className="column is-one-third">
                                    <article className="notification has-background-white media">
                                        <figure className="media-left">
                                            <span className="icon has-text-danger">
                                                <i className="fas fa-lg fa-cube"></i>
                                            </span>
                                        </figure>
                                        <div className="media-content">
                                            <div className="content">
                                                <h1 className="title is-size-4">Elements</h1>
                                                <p className="is-size-5 subtitle">
                                                    Essential interface elements that only require a <strong>single CSS class</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <hr />
                    <div className="columns is-mobile is-centered">
                        <div className="field is-grouped is-grouped-multiline">
                            <div className="control">
                                <div className="tags has-addons"><a className="tag is-link" href="https://github.com/dansup/bulma-templates">Bulma Templates</a>
                                    <span className="tag is-info">MIT license</span>
                                </div>
                            </div>
                            <div className="control">
                                <div className="tags has-addons">
                                    <span className="tag is-dark">based on a pen</span>
                                    <span className="tag has-addons is-warning"><a href="https://codepen.io/melanieseltzer/pen/odOXWM"><i className="fab fa-lg fa-codepen"></i></a></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>

                <style jsx>{`
                    body,
                    html {
                        background: #f2f2f2;
                    }

                    pre,
                    .message {
                        max-width: 960px;
                    }

                    li {margin: 10px}

                    .hero.is-primary {
                    background: linear-gradient(to top right, #524ad0 10%, #D099FA);
                    }

                    .box {
                    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
                    }

                    .box span.icon {
                    float: right;
                    font-size: 1.7em;
                    padding: 2rem 2rem 0 0;
                    }

                    .is-large.fab {
                    font-size: 7em;
                    }

                    .is-large.fas {
                    font-size: 5em;
                    margin-left: 0.2em;
                    }

                    .menu-list li a:hover {
                    background: #d9d9d9;
                    }

                    .token.number {
                    display: inline;
                    padding: inherit;
                    font-size: inherit;
                    line-height: inherit;
                    text-align: inherit;
                    vertical-align: inherit;
                    border-radius: inherit;
                    font-weight: inherit;
                    white-space: inherit;
                    background: inherit;
                    margin: inherit;
                    }
                    .footer {background-color: white;}
                `}</style>
            </div>
        );
    }
}

export default User;
