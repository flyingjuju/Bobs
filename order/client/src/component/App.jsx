import React from 'react';
import Order from  './Order';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName : null,
            orders: {
                "Matcha Latte":{'p':"$5.5",'q':0},
                "Matcha Affogato":{'p':"$6.0",'q':0},
                "Matcha Macchiato":{'p':"$5.5",'q':0},
                "Lemon Black Tea":{'p':"$4.5",'q':0},
                "Kemon Jasmine Green Tea":{'p':"$5.0",'q':0},
                "Mango Green Tea":{'p':"$4.5",'q':0},
                "QQ Passion Fruit Tea":{'p':"$5.0",'q':0},
                "HK Milk Tea":{'p':"$4.5",'q':0},
                "Grass Jelly Milk Tea":{'p':"$5.0",'q':0},
                "Milk Foam Oolong Tea":{'p':"$5.5",'q':0},
                "Fresh Milk Earl Grey Tea":{'p':"$5.5",'q':0},
                "Ginger Honey":{'p':"$5.0",'q':0},
                "Mint Green Tea":{'p':"$4.5",'q':0},
                "Hojicha Tea":{'p':"$4.5",'q':0},
                "Chamomile Tea":{'p':"$4.5",'q':0}
            }
        }
    }
    componentDidMount(){
        let name = location.href.split('/')[3];
        if(name === 'order'){
            axios.get(`/order`)
            .then(() => {})
            .catch((err) => console.log(err))
        } else {
            axios.get(`/${name}/order`)
            .then(() => {
                this.setState({
                    userName: name
                })
            })
            .catch((err) => console.log(err))
        }
    }
    updateOrders(newItem){
        var newOrders = JSON.parse(JSON.stringify(this.state.orders));
        newOrders[newItem].q ++;
        this.setState({
            orders: newOrders
        })
    }
        
    render(){
        console.log('state',this.state.orders)
        var curOrders = []
        var orderOptions = Object.keys(this.state.orders)
        for(var i=0; i<orderOptions.length; i++){
            if(this.state.orders[orderOptions[i]].q>0){
                curOrders.push([orderOptions[i],this.state.orders[orderOptions[i]]])
            }           
        }
        // console.log('cur',curOrders)
        return(
            <div class="bkg">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/../">BOBS</a>
                   
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="">Order<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="story">Story</a>
                        </li>
                        <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cart
                                </a>
                                {curOrders.length>0 ?
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {curOrders.map(order=>
                                        <a class="dropdown-item" ><span>{order[0]}</span><span>{order[1].p}</span><span>x{order[1].q}</span></a>
                                    )}
                                    </div> :
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" ><span>0 item</span></a>
                                    </div>

                                }
                                
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
                                <a class="nav-link" href="/../user">Log In</a>
                            </li>

                        }
                        </ul>
                    </div>
                </nav> 
                
                <Order updateOrders={this.updateOrders.bind(this)} />
            </div>
        )
    }
}

export default App;