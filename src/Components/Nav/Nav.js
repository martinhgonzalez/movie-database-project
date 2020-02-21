import React from "react";
import { getGenresFromAPI } from "../../Services/API";
import './nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    console.log('POR', props);
    this.state = {
      genres: []
    };
  }

  setStateToGenres() {
    getGenresFromAPI()
      .then(genres => {
        this.setState({ genres: genres });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.setStateToGenres();
  }

  render() {
    const {
      onHandleSubmit,
      onClickedFilter,
      onClickedGenreFilter
    } = this.props;
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <form onSubmit={onHandleSubmit}>  
                  <input id="first_name2" type="text" className="validate #bcaaa4 brown lighten-3" placeholder="Search"/>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </li>
              
              <li><a onClick={() => { onClickedFilter("all"); }} href="#"> All </a> </li>
              <li><a onClick={() => { onClickedFilter("new"); }} href="#"> Latest </a></li>
              <li><a onClick={() => { onClickedFilter("fav"); }} href="#"> Favorite </a> </li>

              {/*     
        <a className='dropdown-trigger btn' href='#' data-target='dropdown1'>Drop Me!</a>

        <ul id='dropdown1' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider" tabindex="-1"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
        </ul> */}

              <li>|</li>
              <li>
                <a
                  onClick={() => {
                    onClickedGenreFilter("drama");
                  }}
                  href="#"
                >
                  Drama
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    onClickedGenreFilter("comedy");
                  }}
                  href="#"
                >
                  Comedy
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    onClickedGenreFilter("horror");
                  }}
                  href="#"
                >
                  Terror
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
