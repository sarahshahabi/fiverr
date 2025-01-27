import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    function isActive() {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to={"/"} className="link">
                        <span className="text">fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>

                <div className="links">
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img
                                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="profile-picture"
                            />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    {currentUser?.isSeller && (
                                        <>
                                            <Link to={"/mygigs"} className="link">
                                                Gigs
                                            </Link>
                                            <Link to={"/add"} className="link">
                                                Add New Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link to={"/orders"} className="link">
                                        Orders
                                    </Link>
                                    <Link to={"/messages"} className="link">
                                        Messages
                                    </Link>
                                    <Link to={"/"} className="link">
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {active || pathname!== "/" && (
                <>
                    <hr />
                    <div className="menu">
                        <Link to={"/"} className="link">Graphics & Design</Link>
                        <Link to={"/"} className="link">Video & Animation</Link>
                        <Link to={"/"} className="link">Writing & Translation</Link>
                        <Link to={"/"} className="link">AI Services</Link>
                        <Link to={"/"} className="link">Digital Marketing</Link>
                        <Link to={"/"} className="link">Music & Audio</Link>
                        <Link to={"/"} className="link">Programming & Tech</Link>
                        <Link to={"/"} className="link">Bsiness</Link>
                        <Link to={"/"} className="link">Lifestyle</Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    );
}

export default Navbar;
