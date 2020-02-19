import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav>
          <div class="nav-wrapper">
            <a href="#" className="brand-logo right">
              Logo
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <input
                  value="Search    "
                  id="first_name2"
                  type="text"
                  className="validate"
                />
              </li>
              <li>
                <a href="sass.html">All</a>
              </li>
              <li>
                <a href="badges.html">Latest</a>
              </li>
              <li>
                <a href="collapsible.html">Fav</a>
              </li>
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
                <a href="sass.html">Drama</a>
              </li>
              <li>
                <a href="badges.html">Comedy</a>
              </li>
              <li>
                <a href="collapsible.html">Terror</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
