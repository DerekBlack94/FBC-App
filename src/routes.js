import React from 'react'
import {Route} from 'react-router'
import App from './components/dashboard'
import About from './components/about';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,FormGroup,Label, Jumbotron, Container } from 'reactstrap';
const IndexPage = () => {

    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center', 
        backgroundColor: "gray", 
    }
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center', 
    }

    return <div style={divStyle}>
        <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Family Bike Chain</h1>
          <p style={centerStyle} className="lead">Welcome to Family Bike Chain repair and task tracker</p>
        <a style={centerStyle} href="/story/1">Task App</a>
        <br/>
        <a style={centerStyle} href="https://www.familybikechain.com/">FBC website</a>
        </Container>
      </Jumbotron>
        </div>
}
const NotFoundPage = () => {

    return <div><h2>Not Found</h2><br/><a href="/story/1">Homepage</a></div>
}
export default(
    <Route>
        <Route path='/story/:id' exact component={App}/>
        <Route path='/about' exact component={About}/>
        <Route exact path="/" component={IndexPage} />
        <Route path='*' exact component={NotFoundPage}/>
    </Route>
)