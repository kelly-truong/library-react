import React from 'react'
import UndrawBooks from '../assets/undraw_bear.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <section id="landing">
            <div className="header__container">
                <div className="header__description">
                    <h1>United States' most awarded online library platform</h1>
                    <h2>Find your dream book with <span className="pink">Library</span></h2>
                    <Link to="/books">
                        <button className="btn">Browse books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </section>
    )
}

export default Landing