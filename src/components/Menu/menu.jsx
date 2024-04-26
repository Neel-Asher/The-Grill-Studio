import React from "react";
import { forwardRef } from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div className="Menu" id="Menu">
      <h1 id="heading">Menu</h1> <br />
      <br />
      <div id="content">
        <div id="box1">
          <div id="text1">
            <h2 className="menu-header">Appetizers</h2>
            <br />
            <br />
            <h4>Grilled Shrimp Skewers - 549</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corrupti ratione nulla. Doloremque ea et quae
              beatae laboriosam nesciunt exercitationem nisi, qui officiis.
            </p>
            <br />
            <br />
            <h4>Grilled Chicken Platter - 479 </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, fugit. Sunt nobis quidem fugit odio eveniet ex sequi?
            </p>
            <br />
            <br />
            <h4>Grilled Vegetable Platter - 429</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ullam ratione perferendis. Nihil aliquid, rerum non
              molestias quaerat id tempore beatae. Cupiditate.
            </p>
            <br />
            <br />
          </div>
          <div>
            <img src="images/Menu_images/image1.jpg" id="image1" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="box2">
          <div id="text2">
            <h2 className="menu-header">Soups & Salads</h2>
            <br />
            <br />
            <h4>Chicken Caesar Salad - 449</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corrupti ratione nulla. Doloremque ea et quae
              beatae laboriosam nesciunt exercitationem nisi, qui officiis.
            </p>
            <br />
            <br />
            <h4>Grilled Veggie Salad - 399 </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, fugit. Sunt nobis quidem fugit odio eveniet ex sequi?
            </p>
            <br />
            <br />
            <h4>Grilled Corn Chowder - 349</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ullam ratione perferendis. Nihil aliquid, rerum non
              molestias quaerat id tempore beatae. Cupiditate.
            </p>
            <br />
            <br />
          </div>
          <div>
            <img src="images/Menu_images/image2.jpg" id="image2" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="box3">
          <div id="text3">
            <h2 className="menu-header">Main Course</h2>
            <br />
            <br />
            <h4>Grilled Chicken Steak - 799</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corrupti ratione nulla. Doloremque ea et quae
              beatae laboriosam nesciunt exercitationem nisi, qui officiis.
            </p>
            <br />
            <br />
            <h4>Grilled Salmon Fillet - 849 </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, fugit. Sunt nobis quidem fugit odio eveniet ex sequi?
            </p>
            <br />
            <br />
            <h4>Portobello Mushroom Burger - 649</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ullam ratione perferendis. Nihil aliquid, rerum non
              molestias quaerat id tempore beatae. Cupiditate.
            </p>
            <br />
            <br />
          </div>
          <div>
            <img src="images/Menu_images/image3.jpg" id="image3" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="box4">
          <div id="text4">
            <h2 className="menu-header">Sides</h2>
            <br />
            <br />
            <h4>Garlic Parmesan Potato Wedges - 249</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corrupti ratione nulla. Doloremque ea et quae
              beatae laboriosam nesciunt exercitationem nisi, qui officiis.
            </p>
            <br />
            <br />
            <h4>Grilled Asparagus Spears - 299 </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, fugit. Sunt nobis quidem fugit odio eveniet ex sequi?
            </p>
            <br />
            <br />
            <h4>Corn on the Cob - 229</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ullam ratione perferendis. Nihil aliquid, rerum non
              molestias quaerat id tempore beatae. Cupiditate.
            </p>
            <br />
            <br />
          </div>
          <div>
            <img src="images/Menu_images/image4.jpg" id="image4" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="box5">
          <div id="text5">
            <h2 className="menu-header">Dessert</h2>
            <br />
            <br />
            <h4>Pineapple Sundae - 339</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corrupti ratione nulla. Doloremque ea et quae
              beatae laboriosam nesciunt exercitationem nisi, qui officiis.
            </p>
            <br />
            <br />
            <h4>Peach Cobbler - 419 </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, fugit. Sunt nobis quidem fugit odio eveniet ex sequi?
            </p>
            <br />
            <br />
            <h4>Banana Split - 299 </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ullam ratione perferendis. Nihil aliquid, rerum non
              molestias quaerat id tempore beatae. Cupiditate.
            </p>
            <br />
            <br />
          </div>
          <div>
            <img src="images/Menu_images/image5.jpg" id="image5" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div id="box6">
          <div id="text6">
            <h2 className="menu-header">Beverages</h2>
            <br />
            <br />
            <h4>Mango Lassi - 249</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem corrupti ratione nulla. Doloremque ea et quae
              beatae laboriosam nesciunt exercitationem nisi, qui officiis.
            </p>
            <br />
            <br />
            <h4>Berry Lemonade - 299 </h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, fugit. Sunt nobis quidem fugit odio eveniet ex sequi?
            </p>
            <br />
            <br />
            <h4>Coconut Mojito - 249</h4>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto ullam ratione perferendis. Nihil aliquid, rerum non
              molestias quaerat id tempore beatae. Cupiditate.
            </p>
            <br />
            <br />
          </div>
          <div>
            <img src="images/Menu_images/image6.jpg" id="image6" />
          </div>
        </div>
        <br />
        <br />
        <p id="last">
          *Menu items are subject to change based on seasonal availability.
        </p>
      </div>
    </div>
  );
};

export default Menu;