let signIn=()=>{
    return` 
<!--     make main div-->
    <div class="mainDiv">
    <div class="photo">
    <img src="../images/Place%20Your%20Image%20Here%20(Double%20Click%20to%20Edit)1.png" alt="sign-in">
</div>
    <div class="signIn">
   <form method="post">
<!--    <img src="../images/Logo.png" alt="logo">-->
    <input type="text" name="userName" placeholder="Phone number,username,or email">
    <input type="password" name="password" placeholder="Password">
    <input type="submit" name="submit" value="Log In">
    <a href="/">Forgot password?</a>
</form>
<div class="second">
<span>Don't have an account?</span><a href="/">Sign up</a>
</div>
</div>
<img src="../images/videoWrapper-leafes/Leaf%201.png" alt="leaf">
<img src="../images/our-select/Leaf%202.png" alt="leaf">

</div>
<!--    end make main div-->
    `
}
export default signIn