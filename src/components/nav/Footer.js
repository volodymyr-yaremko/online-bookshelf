import React, { useContext } from "react";
import styled from "./Footer.module.css";
import Container from "../../helpers/wrapper/Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const Footer = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  const auth = isSignedIn && currentUser.email;

  return (
    <footer className={styled["footer-container"]}>
      <Container className={styled.footer}>
        <article className={styled.bookmark}>
          <h2>BookMark</h2>
          <p className={`para ${styled.para}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio
            porro sed nisi magni, exercitationem saepe quisquam illo molestias
            aperiam!
          </p>
        </article>

        <article className={styled.useful}>
          <h2>Useful Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>

            {auth && (
              <li>
                <Link to="/library">Library</Link>
              </li>
            )}

            {auth && (
              <li>
                <Link to="/shelves">Shelves</Link>
              </li>
            )}
          </ul>
        </article>

        <article className={styled.help}>
          <h2>Help</h2>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/instructions">How To Use</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
          </ul>
        </article>
      </Container>
      <p className={styled.copyright}>&copy; 2020 BookMark</p>
    </footer>
  );
};

export default Footer;
