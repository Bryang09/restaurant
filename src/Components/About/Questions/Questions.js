import React, { Component } from "react";

import "./Questions.css";

class Questions extends Component {
  state = {
    question: "Ask Us Anything!",
    answer: null
  };
  onOpen = () => {
    this.setState({
      question: "When We Opened",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam minima quisquam, et similique odio repellat perspiciatis non nam vero, inventore adipisci corporis unde numquam. Necessitatibus tenetur dolore minus est dolorem.Inventore iste eum, error natus quam veritatis atque nesciunt nulla aliquam nostrum possimus iusto quidem corporis. Eos hic inventore doloribus provident odio rerum nostrum, corporis, labore dolorum quisquam corrupti libero?"
    });
  };

  onSpecialty = () => {
    this.setState({
      question: "Our Specialty",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sint? Eius quasi nihil consequuntur a ab inventore magnam iusto est, at sint exercitationem minus, distinctio aperiam ducimus. Veniam, doloribus voluptate.Reprehenderit suscipit tempora id nemo unde totam cupiditate soluta, voluptates assumenda modi voluptatum. Voluptas, dolor! Sit mollitia officia blanditiis. Suscipit eaque inventore tempore. A voluptas iusto suscipit et! Ratione, ipsa."
    });
  };
  onCharity = () => {
    this.setState({
      question: "How We Help",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi mollitia sed facilis iure ea vero aspernatur ducimus maiores deleniti, illum similique, aliquam molestias veniam dignissimos? Amet dignissimos voluptatem neque corporis.Repudiandae modi quis aperiam tenetur deserunt culpa iure nulla, consectetur facilis reprehenderit obcaecati libero itaque distinctio officia incidunt nobis rem magni corrupti animi neque voluptatem pariatur unde rerum! Id, alias. "
    });
  };
  onBest = () => {
    this.setState({
      question: "Why We're The Best",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit assumenda similique, rem, nam doloremque est voluptate officia eveniet corporis accusamus eum vitae? Quisquam fuga rem hic quasi deleniti in sit!Nemo, dicta nobis mollitia, eaque voluptatibus quod aperiam natus vitae quisquam voluptates magni aliquid vero tempore iusto incidunt, similique nihil eos tempora dignissimos architecto! Ratione labore id illum nobis et."
    });
  };
  onStrive = () => {
    this.setState({
      question: "What Strives Us",
      answer:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque modi obcaecati assumenda quas libero eveniet, aut maxime quaerat, fuga itaque distinctio molestiae cupiditate accusamus at enim beatae omnis quos.Ullam ad maiores autem cupiditate praesentium ut nulla earum quaerat, nisi molestias obcaecati aperiam, ex corrupti hic facere qui blanditiis soluta illum necessitatibus, accusamus labore adipisci vitae. Necessitatibus, quidem voluptatibus."
    });
  };
  onChef = () => {
    this.setState({
      question: "Our World Renowned Chef",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda itaque illo dolorem, voluptatum voluptate tempore perferendis sed cum laborum harum facere eligendi at amet natus ea dolor veniam voluptatem vitae.Numquam recusandae, aliquid, doloremque distinctio ad necessitatibus facere aspernatur deleniti atque odio laboriosam, magni totam debitis asperiores? Quos, dicta reprehenderit velit asperiores sapiente iure sint at, perferendis placeat dolorum doloribus. "
    });
  };

  render() {
    return (
      <div className="Questions">
        <div className="questionContainer">
          <div className="questionColumn">
            <ul>
              <li onClick={this.onOpen}>When Did We Open?</li>
              <li onClick={this.onSpecialty}>Whats Our Specialty?</li>
              <li onClick={this.onCharity}>How Do We Help our Comunity?</li>
              <li onClick={this.onBest}>How Are We The Best?</li>
              <li onClick={this.onStrive}>How Do We Strive to </li>
              <li onClick={this.onChef}>About The Chef</li>
            </ul>
          </div>
          <div className="questionContent">
            {this.state.answer ? (
              <div className="questions">
                <h2 style={{ marginTop: "5vh" }}>{this.state.question}</h2>
                <hr />
                <p>{this.state.answer}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
