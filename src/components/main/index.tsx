import { highlightTopic, topics } from "../../data";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import "./index.scss";

const Main = () => {
  return (
    <main className="main">
      <article className="main__highlight">
        <h1 className="main__highlight--title">
          The Journal: Design Resource & Interviews
        </h1>
        <figure className="main__highlight--card">
          <img
            src={highlightTopic.pic}
            className="picture"
            alt="attractive-young-middle-eastern-model-touching-her-pretty-face-with-flawless-skin-smiling"
          />
          <figcaption className="overview">
            <h2 className="overview__title">{highlightTopic.title}</h2>
            <div className="overview__detail">
              <div className="overview__detail--item">
                <p>Written by</p>
                <figure className="writer">
                  <img src={highlightTopic.writerPic} alt="Writer's picture" />
                  <figcaption>{highlightTopic.writer}</figcaption>
                </figure>
              </div>
              <div className="overview__detail--item">
                <p>Published on</p>
                <p>
                  {new Date(highlightTopic.publish)
                    .toDateString()
                    .split(" ")
                    .slice(1, 4)
                    .reduce((prep, curr) => prep.concat(curr, " "), "")}
                </p>
              </div>
              <div className="overview__detail--item">
                <p>File under</p>
                <div>
                  {highlightTopic.file.map((ele, index) => {
                    return <span key={index}>{ele}</span>;
                  })}
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </article>
      <article className="main__topics">
        <section className="main__topics--items">
          {topics.map((ele, index) => {
            return (
              <div key={index} className="item--container">
                <img src={ele.pic} alt={`picture-${index}`} />
                <div className="title">
                  <h3>{ele.title}</h3>
                  <BsArrowUpRight className="arrow" />
                </div>
                <p>{ele.content}</p>
                <div className="file">
                  {ele.file.map((ele, index) => {
                    return <span key={index}>{ele}</span>;
                  })}
                </div>
              </div>
            );
          })}
        </section>
        <section className="main__nav">
          <button type="button" className="main__nav--btn">
            <BsArrowLeft />
            <p>Previous</p>
          </button>
          <p>Page 1 of 8</p>
          <button type="button" className="main__nav--btn">
            <p>Next</p>
            <BsArrowRight />
          </button>
        </section>
      </article>
    </main>
  );
};

export default Main;
