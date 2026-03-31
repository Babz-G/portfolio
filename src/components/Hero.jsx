function Hero() {
  return (
    <article className="main-article">
      <div className="text">
        <h2>Photographer</h2>
        <h2>Graphic Designer</h2>
        <h2>Aspiring UX/UI Designer</h2>
        <h1>Babz G.</h1>
        <p>
          As an artist transitioning into web development, I bring a unique
          creative perspective to the technical realm. Currently in coding
          bootcamp, I'm passionate about merging my artistic foundation with
          technical skills to craft visually captivating, user-focused web
          experiences. My journey represents the intersection of art and
          technology where{" "}
          <a href="https://www.instagram.com/babz_g" target="_blank">
            creativity meets code
          </a>
          .
        </p>
        <ul className="icons">
          <li>
            <a
              href="https://bsky.app/profile/babz-g.bsky.social"
              target="_blank"
            >
              Bluesky
            </a>
          </li>
          <li>
            <a href="https://github.com/Babz-G" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/babzgaynor" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:barbaramgaynor@gmail.com">Email</a>
          </li>
        </ul>
      </div>
      <img src="https://i.ibb.co/zhRf5n0c/babz.jpg" alt="Babz" />
    </article>
  );
}

export default Hero;
