import React,{Component} from 'react'
import {Link} from 'react-router'
import AddUser from '../forms/addUser'

class Header extends Component{
    render(){
        return(
                <header>
                  <div className="container containerDashboard">
                    <div className="mainMenu">
                      <ul>
                      <Link to="/story/1" activeClassName="active"><li><i className="fas fa-folder-open"></i><span className="mainMenuText">Homepage</span></li></Link>
                      {/* <Link to="/about" activeClassName="active"><li><i className="fas fa-thumbs-up"/><span className="mainMenuText">About</span></li></Link> */}
                      <a rel="noopener noreferrer" target="_blank" href="https://youtube.com"><li><i className="fab fa-youtube"/><span className="mainMenuText">YouTube</span></li></a>
                      </ul>
                    </div>
                    <div className="profilewidget">
                      <AddUser/>
                    </div>
                  </div>
                  
                </header>
        )
    }
}
export default Header