import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  return (
    <div className="grid-container">
        <header className= "header">
            <div className="brand">
                <a href="index.html">Shad Kothan</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a> 
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <main className= "main">
          <div>
            <a href="https://www.shadkothan.com"> <img className="logo" src="/images/shad_kothan_01.png" alt="Logo" /></a>
            <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">Categories <i class="fa fa-caret-down" aria-hidden="true"></i></button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#rice">Rice Entrees</a>
                <a href="#desserts">Desserts</a>
                <a href="#appetizers">Appetizers</a>
              </div>
            </div>
          </div>
          <div className= "content">
            <ul className= "products">
              <li>
                <div className="product">
                  <a href= "product.html"><img className="product-image" src="/images/ilish_polao.jpg" alt="Ilish polao" /> </a>
                  <div className= "product-name"> <a href="product.html">Hilisha Polao (Pilaf)</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice2jpg.jpg" alt="Chicken chili Rice" /></a>
                  <div className= "product-name"> <a href="product.html">Chicken chili Rice</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice3.jpg" alt="Mutton Biryani" /></a>
                  <div className= "product-name"> <a href="product.html">Mutton Biryani</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice4.jpg" alt="Shrimp Polao" /></a>
                  <div className= "product-name"> <a href="product.html">Shrimp Polao (Pilaf)</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice1.jpg" alt="Chicken Tandoori Biryani"></img></a>
                  <div className= "product-name"> <a href="product.html">Chicken Tandoori Biryani</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice5.jpg" alt="Beef Biryani"></img></a>
                  <div className= "product-name"> <a href="product.html">Beef Biryani</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice6.jpg" alt="Vegitable Fried Rice"></img></a>
                  <div className= "product-name"> <a href="product.html">Vegitable Fried Rice</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice7.jpg" alt="Chicken Khichuri"></img></a>
                  <div className= "product-name"> <a href="product.html">Chicken Khichuri</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice8.jpg" alt="Chicken Biryani"></img></a>
                  <div className= "product-name"> <a href="product.html">Chicken Biryani</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice9.jpg" alt="Vegitable Polao"></img></a>
                  <div className= "product-name"> <a href="product.html">Vegitable Polao (Pilaf)</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice10.jpg" alt="Keema Polao (Pilaf)"></img></a>
                  <div className= "product-name"> <a href="product.html">Keema Polao (Pilaf)</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice11.jpg" alt="Moti Kabab Polao"></img></a>
                  <div className= "product-name"> <a href="product.html">Moti Kabab Polao (Pilaf)</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice12.jpg" alt="Kacchi Biryani"></img></a>
                  <div className= "product-name"> <a href="product.html">Kacchi Biryani</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice13.jpg" alt="Hilsha Khichuri"></img></a>
                  <div className= "product-name"> <a href="product.html">Hilsha Khichuri</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice14.jpg" alt="Achari Chicken Khichuri"></img></a>
                  <div className= "product-name"> <a href="product.html">Achari Chicken Khichuri</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
              <li>
                <div className="product">
                <a href= "product.html"><img className="product-image" src="/images/rice15.jpg" alt="Hariyali Chicken Biryani"></img></a>
                  <div className= "product-name"> <a href="product.html">Hariyali Chicken Biryani</a></div>
                  <div className="product-ingredient">Ingredient: Basmati rice, Biryani masala (spices), Chicken, and Ghee </div>
                  <div className="product-price">Price: $20.00</div>
                  <div className="product-rating">4.5 Stars (10 Reviews)</div>
                </div>
              </li>
            </ul>
          </div>        
        </main>
        
    </div>

  );
}

export default App;
