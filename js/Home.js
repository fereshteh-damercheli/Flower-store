let Home = () => {
    return `
<!--make header-->
     <div class="header">
     <div class="arrangements">
     <img src="../images/Leafs%202.png" alt="leaf2" class="leaf2">
     <img src="../images/Leafs%201.png" alt="leaf1" class="leaf1">
     <div class="headerContents">
       <h1>Flower Arrangements</h1>
<h3>. for all special occasions .</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>
<a href="/">SHOP</a>
<a href="/">READ MORE</a>
</div>
   
</div>
     <div class="photo">
     <img src="../images/woman-picture.png" alt="woman-picture">
</div>

</div>
<!--end make header-->
<!--make statistics-->
<div class="main">
<div>
<p>3000+</p>
<p>Packages sold</p>
</div>
<div>
<p>5000+</p>
<p>Bouquet sold</p>
</div>
<div>
<p>7000+</p>
<p>Happy Clients</p>
</div>
<div>
<p>10+</p>
<p>Years of Experience</p>
</div>
</div>
<!--end make statistics--> 
<!--   make products-->
<div class="products">
<div class="title">
<h1>Our Top Products</h1>
<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
<img src="../images/product's-leafes/Leaf%201.png" alt="leaf">
<img src="../images/product's-leafes/Leaf%202.png" alt="leaf">
</div>
<div  class="productWrapper">
<div  id="product" class="productBar"></div>
</div>
<img src="../images/product's-leafes/Leaf%203.png" alt="leaf">
<img src="../images/product's-leafes/Leaf%204.png" alt="leaf">
</div>
<!--end make products-->
<!--make video content-->
<div class="videoContent">
<h1>How we do it</h1>
<h3>Lorem ipsum dolor sit amet, consectetur.</h3>
<div class="videoWrapper">

<div class="video">
<div class="square1"></div>

<video src="../videos/Pinterest_3.mp4" controls poster=""></video>
<div class="square2"></div>
</div>

</div>
<img src="../images/videoWrapper-leafes/Leaf%201.png" alt="leaf">
<img src="../images/videoWrapper-leafes/Leaf%202.png" alt="leaf">
</div>
<!--end make video content-->
<!--make offer-->
<div class="offer">
<div class="offerContent">
<h3>Special Offer</h3>
<div>
<img src="../images/offer-leafes/Leaf%201.png" alt="leaf">
<h1>20%</h1>
<img src="../images/offer-leafes/Leaf%202.png" alt="leaf">
</div>
<h3>Discount on your first purchase</h3>
</div>
<div class="offerPhoto">
<img src="../images/offer.png" alt="offer-img">
</div>
</div>
<!--end make offer-->


<!--make subscribe-->
<div class="subscribe">
<h1>Subscribe to our
newsletter</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
<form action="subscribe" method="post">
<input type="text" name="fullName" placeholder="your name">
<input type="email" name="email" placeholder="mail">
<textarea name="messages" id="textarea" cols="90" rows="5" placeholder="messages"></textarea>
<input type="submit" value="send message" name="submit">

</form>

</div>
<!--end make subscribe-->
`
}

export default Home



