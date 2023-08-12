import "../Styles/Navbar.css";


function Navbar(){
    return(
        <>
         <nav>
        <div class="logo">
        </div>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <ul class="nav-links">
            <li><a href="">Home</a></li>
            <li><a href="">Profile</a></li>
            {/* <li><button class="login-button" href="#">Login</button></li> */}
            {/* <li><button class="join-button" href="#">Join</button></li> */}
        </ul>
    </nav>
        </>
       
    )
}

export default Navbar;