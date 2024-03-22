import "../style/card.css";

export function Card() {
  return (
    <>
      <article id="card-container">
        <article id="card">
          <article className="side" id="side-front">
            <article className="icon">
              <div id="img"></div>
              <h4>Lucas Julien</h4>
              <h4>Developpeur full-stack</h4>
            </article>
          </article>
          <article className="side" id="side-back">
            <p>
              <a href="mailto:lucasdevweb12100@gmail.com">
                lucasdevweb12100@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+33637373034">06-37-37-30-34</a>
            </p>
            <p>
              <button>
                <a href="lucas_cv.pdf"></a>telecharger
              </button>
            </p>
          </article>
        </article>
      </article>
    </>
  );
}
