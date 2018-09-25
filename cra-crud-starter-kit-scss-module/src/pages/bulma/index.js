import React, { Component } from 'react';
import style from '../../assets/style-global.scss';

class BulmaPage extends Component {
    render() {
        return (
            <div>
                <h1 className={style.title}>
                    Bulma
                </h1>

                <p className={style.subtitle}>
                    Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
                </p>

                <div className={style.field}>
                    <div className={style.control}>
                        <input className={style.input} type="text" placeholder="Input" />
                    </div>
                </div>

                <div className={style.field}>
                    <p className={style.control}>
                        <span className={style.select}>
                            <select>
                                <option>Select dropdown</option>
                            </select>
                        </span>
                    </p>
                </div>

                <div className={style.buttons}>
                    <a className={`${style.button} ${style.isPrimary}`}
                    >Primary</a>
                    <a className={`${style.button} ${style.isLink}`}>Link</a>
                </div>

            </div>
        );
    }
}

export default BulmaPage;
