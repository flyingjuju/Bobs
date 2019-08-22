import React from 'react';

var App = (props) => {
    return(
        <div class="bkg">
            <div class="nav">
                <div class="logo">
                    BOBS
                </div>
                <div class='menu'>
                    <ul>
                        <li><a href="order">Order</a></li>
                        <li><a href="gallery">Gallery</a></li>
                        <li><a href="story">Story</a></li>
                        <li><a href="user">Login</a></li>
                    </ul>     
                </div>
            </div>
            <div class="title">
                <div>DRINK</div>
                <div>EAT</div>
                <div>VISIT</div>
            </div>
        </div>
    )
}
    

export default App;