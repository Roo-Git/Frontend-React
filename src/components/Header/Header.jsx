import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import Button from '../Button/Button';
import Submit from '../Submit/Submit'
import './Header.css';
import logoBussines from '../../assets/Icons/logoBussines.jpg';
import { LOGOUT } from '../../redux/Types/customerType.js';

const Header = (props) => {

  let history = useHistory();

  //procedemos a borrar los datos de usuario 
  //de RDX y así conseguiremos el logOut

  const logOut =  () => {

    props.dispatch({ type: LOGOUT, payload : {}});

    setTimeout(()=> {
        history.push('/Home');
    },300);
  };
  console.log("SOY PROPS CUSTOMER",props.customer)
  if(props.customer.jwt?.customer?.firstName){
    console.log("EL IIIIIIIIIIIIIIIIF")
    
      // Vista Normal
      return (
          <div className="header">
    
          <div className="spaceRow1"></div>
    
          <div className="containerLogoBussines">
            <p><Link to="/Home"><img className="logoBussines"src={logoBussines} alt=""/></Link></p>
          </div>
            
          <div className="containerTitle">
            <div className="title1">Doc.</div>
            <div className="title2">La Muela</div>
          </div>
    
          <div className="spaceRow2"></div>
          <div className="containerButtons">
            <div className="customerName">
                Hola {props.customer.jwt?.customer?.firstName}
            </div>
              <Submit type="submit" name="submit" title="logout" onClick={() => logOut()}/>
          </div>
        </div>
      )
    
     
    ///////

    } else {
      console.log("Soy el ELSE")

      return (

        // Vista Normal
      
        <div className="header">
    
          <div className="spaceRow1"></div>
    
          <div className="containerLogoBussines">
            <p><Link to="/Home"><img className="logoBussines"src={logoBussines} alt=""/></Link></p>
          </div>
            
          <div className="containerTitle">
            <div className="title1">Doc.</div>
            <div className="title2">La Muela</div>
          </div>
    
          <div className="spaceRow2"></div>
          <div className="containerButtons">
              <Button name="Iniciar Sesión" destiny='login'/>
              <Button name="Registrate" destiny='register'/>
          </div>
        </div>
      )
    }
      //////

};

const mapStateToProps = state => {
  return {
      customer : state.customerReducer.customer
  }
};


export default connect(mapStateToProps)(Header);

