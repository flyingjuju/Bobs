import React from 'react';

class Order extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currCategory: 'fruit',
            orders: {
                "Matcha Latte":{p:"$5.5",q:0},
                "Matcha Affogato":{p:"$6.0",q:0},
                "Matcha Macchiato":{p:"$5.5",q:0},
                "Lemon Black Tea":{p:"$4.5",q:0},
                "Kemon Jasmine Green Tea":{p:"$5.0",q:0},
                "Mango Green Tea":{p:"$4.5",q:0},
                "QQ Passion Fruit Tea":{p:"$5.0",q:0},
                "HK Milk Tea":{p:"$4.5",q:0},
                "Grass Jelly Milk Tea":{p:"$5.0",q:0},
                "Milk Foam Oolong Tea":{p:"$5.5",q:0},
                "Fresh Milk Earl Grey Tea":{p:"$5.5",q:0},
                "Ginger Honey":{p:"$5.0",q:0},
                "Mint Green Tea":{p:"$4.5",q:0},
                "Hojicha Tea":{p:"$4.5",q:0},
                "Chamomile Tea":{p:"$4.5",q:0}
            }
        }
    }
    fruitMenu(){
        this.setState({
            currCategory: 'fruit'
        })
    }
    matchaMenu(){
        this.setState({
            currCategory: 'matcha'
        })
    }
    milkteaMenu(){
        this.setState({
            currCategory: 'milktea'
        })
    }
    herbalteaMenu(){
        this.setState({
            currCategory: 'herbal'
        })
    }
    orderDrink(e){
        // console.log("here",e.target.innerText)
       this.props.updateOrders(e.target.innerText)
    }
    render(){
        var currentCategory = this.state.currCategory;
        
        return(
            <div class="order">
               <div class="category">
                    <ul>
                        <li onClick={this.fruitMenu.bind(this)}>FRUIT TEA</li>
                        <li onClick={this.matchaMenu.bind(this)}>MATCHA TEA</li>
                        <li onClick={this.milkteaMenu.bind(this)}>MILK TEA</li>
                        <li onClick={this.herbalteaMenu.bind(this)}>HERBAL TEA</li>
                    </ul>
               </div>
               <div class="items">
                    {"matcha".includes(currentCategory) &&
                        <div class="item matcha" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc"  >
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Matcha Latte
                                </div>
                                <div class="price">$5.5</div>
                            </div>
                        </div>
                    }
                    {"matcha".includes(currentCategory) &&
                        <div class="item matcha" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Matcha Affogato
                                </div>
                                <div class="price">$6.0</div>
                            </div>
                        </div> 
                    }
                    {"matcha".includes(currentCategory) &&
                        <div class="item matcha" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Matcha Macchiato
                                </div>
                                <div class="price">$5.5</div>
                            </div>
                        </div> 
                    }
                    {"fruit".includes(currentCategory) &&
                        <div class="item fruit" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Lemon Black Tea
                                </div>
                                <div class="price">$4.5</div>
                            </div>
                        </div>
                    }
                    {"fruit".includes(currentCategory) &&
                        <div class="item fruit" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Kemon Jasmine Green Tea
                                </div>
                                <div class="price">$5.0</div>
                            </div>
                        </div>
                    }
                    {"fruit".includes(currentCategory) &&
                        <div class="item fruit" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Mango Green Tea
                                </div>
                                <div class="price">$4.5</div>
                            </div>
                        </div>
                    }
                    {"fruit".includes(currentCategory) &&
                        <div class="item fruit" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    QQ Passion Fruit Tea
                                </div>
                                <div class="price">$5.0</div>
                            </div>
                        </div>
                    }
                    {"milktea".includes(currentCategory) &&
                        <div class="item milktea" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    HK Milk Tea
                                </div>
                                <div class="price">$4.5</div>
                            </div>
                        </div>
                    }
                    {"milktea".includes(currentCategory) &&
                        <div class="item milktea" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Grass Jelly Milk Tea
                                </div>
                                <div class="price">$5.0</div>
                            </div>
                        </div>
                    }
                    {"milktea".includes(currentCategory) &&
                        <div class="item milktea" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Milk Foam Oolong Tea
                                </div>
                                <div class="price">$5.5</div>
                            </div>
                        </div>
                    }
                    {"milktea".includes(currentCategory) &&
                        <div class="item milktea" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Fresh Milk Earl Grey Tea
                                </div>
                                <div class="price">$5.5</div>
                            </div>
                        </div>
                    }
                    {"herbal".includes(currentCategory) &&
                        <div class="item herbal" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Ginger Honey
                                </div>
                                <div class="price">$5.0</div>
                            </div>
                        </div>
                    }
                    {"herbal".includes(currentCategory) &&
                        <div class="item herbal" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Mint Green Tea
                                </div>
                                <div class="price">$4.5</div>
                            </div>
                        </div>
                    }
                    {"herbal".includes(currentCategory) &&
                        <div class="item herbal" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Hojicha Tea
                                </div>
                                <div class="price">$4.5</div>
                            </div>
                        </div>
                    }
                    {"herbal".includes(currentCategory) &&
                        <div class="item herbal" onClick={e=>{this.orderDrink(e)}}>
                            <div class="item-desc">
                                <div>
                                    <img src='https://milktea.s3-us-west-1.amazonaws.com/boba.png'></img>
                                    Chamomile Tea
                                </div>
                                <div class="price">$4.5</div>
                            </div>
                        </div>
                    }
               </div>
            </div>
        )
    }
}
    

    

export default Order;