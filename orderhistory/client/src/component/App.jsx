import React from 'react';

import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName : null,
            order : null
        }
    }
    componentDidMount(){
        let name = location.href.split('/')[3];
        axios.get(`/${name}/orderHistory/order`)
        .then((data) => {
            this.setState({
                userName : name,
                order: data.data.order
            })
           console.log(data.data.order)
        })
        .catch((err) => console.log(err))
        
    }
 
        
    render(){
        // if(this.state.order) {
        //     var orders = this.state.order
        //     var
        // }
      
        
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="../../">BOBS</a>
                   
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="../order">Order<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="story">Story</a>
                        </li>
                        {this.state.userName ?
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.userName}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href='../orderHistory'>Order History</a>
                                    <a class="dropdown-item" href='../orderHistory/logout'>Log Out</a>
                                </div>
                            </li> :
                            <li class="nav-item">
                                <a class="nav-link" href="story">Log In</a>
                            </li>
                        }
                        </ul>
                    </div>
                </nav> 
                {(this.state.order  && this.state.order.length>0) ?
                    <div class="content">
                    {this.state.order.map(od=>
                        <table class="table table-light">
                            <thead class="thead-light">
                            <tr>
                                <th scope="col">Order ID:</th>
                                <th scope="col">{od['order_id']}</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                                {Object.keys(od.items).map((item,i)=>
                                    <tr>
                                        <td scope="row" width="20%">{i+1}</td>
                                        <td width="50%">{item}</td>
                                        <td width="15%">${od.items[item].price}</td>
                                        <td width="15%">x{od.items[item].qty}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )} 
                    </div> :
                    <div class="content">
                        <table class="table table-light">
                            <thead class="thead-light">
                            <tr>
                                <th scope="col">Order ID:</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td width="50%">No Order In Record</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                }
                
            </div>
            
                
                 
                
                
            
        )
    }
}

export default App;