import React from "react";
import "./addForm.css";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      overview: "",
      releaseDate: "",
      id: "",
      imgUrl: "",
      genres: []
    };
  }

  genreCheckboxDisplay = () => {
    let genres = JSON.parse(localStorage.getItem("genres"));
    return genres.map(genre => {
      return (
        <>
          <p>
            <label>
              <input
                checked={this.isChecked(genre.id)}
                value={genre.id}
                onChange={this.checkedHandler}
                type="checkbox"
              />
              <span>{genre.name}</span>
            </label>
          </p>
        </>
      );
    });
  };

  resetValues() {
    this.setState({
      title: "",
      overview: "",
      releaseDate: "",
      id: "",
      imgUrl: "",
      genres: []
    });
  }

  isChecked = id => {
    console.log(id);
    console.log(this.state.genres);
    console.log(this.state.genres.includes(id));

    return this.state.genres.includes(id);
  };

  checkedHandler = e => {
    let id = parseInt(e.target.value);
    const index = this.state.genres.indexOf(id);
    if (index > -1) {
      //if the id of the clicked is in the list, delete it by splice. Else, add it by push
      let newGenres = this.state.genres;
      newGenres.splice(index, 1);
      this.setState({ genres: newGenres });
    } else {
      let newGenres = this.state.genres;
      newGenres.push(id);
      this.setState({ genres: newGenres });
    }
  };

  inputHandler = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let customMovie = [
      {
        poster_path: this.state.imgUrl,
        id: this.state.id,
        title: this.state.title,
        overview: this.state.overview,
        genre_ids: this.state.genres,
        release_date: this.state.releaseDate
      }
    ];
    this.props.sendMovie(customMovie);
    e.target.reset();
    this.resetValues();
  };

  render() {
    return (
      <>
        <h2>Add your custom Movie:</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="title"
                onChange={this.inputHandler}
                required
                value={this.state.title}
                id="first_name2"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="first_name2">
                Title
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="overview"
                onChange={this.inputHandler}
                required
                value={this.state.overview}
                id="first_name2"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="first_name2">
                Overview
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="releaseDate"
                onChange={this.inputHandler}
                required
                value={this.state.releaseDate}
                id="first_name2"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="first_name2">
                Release Date
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="id"
                onChange={this.inputHandler}
                required
                value={this.state.id}
                id="first_name2"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="first_name2">
                id
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                name="imgUrl"
                onChange={this.inputHandler}
                required
                value={this.state.imgUrl}
                id="first_name2"
                type="text"
                className="validate"
              />
              <label className="active" htmlFor="first_name2">
                Img Url
              </label>
            </div>
          </div>
          <div className="row">
            <p>Genres</p>
            {this.genreCheckboxDisplay()}
          </div>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default AddForm;
