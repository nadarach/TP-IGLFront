import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos' ;

function home()
{
    return(
<div class="homme">



<div class="header" id="myHeader">
     
    	<div class="container">
          <h1>Scolar<span>ESI</span></h1>			
        </div>
		<Todos />
	</div>


<div class="content"> 
	<div class="bg-image"> </div>
   <div class="footer">
	<div class="footer-content">
		<div class="footer-section about">
			<h1 class="logo-text">Scolar<span>ESI</span></h1>
			<p>ScolarESI.com est une plateforme dédiée à l'école nationale supérieure d'informatique, qui réunie l'ensemble des étudiants, enseigants et le service de scolarité.</p>
			<div class="contact">
				<span><i class="fa fa-phone"></i> &nbsp; 023-939-132 </span>
			<span><i class="fa fa-envelope"></i> &nbsp; scolarite@esi.dz  </span>
			</div>
			<div class="socials">
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<a href="https://www.esi.dz/"><i  class="fa fa-facebook"></i></a>
			    <a href="https://twitter.com/ESI_ex_INI"><i  class="fa fa-twitter"></i></a>
			    <a href="https://www.instagram.com/esi_alger/"><i  class="fa fa-instagram"></i></a>
			    <a href="https://www.youtube.com/user/ESICHANNEL"><i  class="fa fa-youtube"></i></a>

			</div>
		</div>
		<div class="footer-section links">
			<h1 class="first">Liens rapides</h1>
			<br></br>
			<ul>
				<a href="#"><li>Site officiel</li></a>
				<a href="#"><li>Tresor ESI</li></a>
				<a href="#"><li>Tice ESI</li></a>
			</ul>
		</div>


		<div class="footer-section contact-form">
			<h1 class="second">Contactez-nous</h1>
			<br></br>
			<form action="test.html" method="post">
				<input type="email" name="email" class="text-input contact-input" placeholder="Your email adress ..." style={{height: 30}}></input>
				<br></br>
				<textarea class="text-input contact-input" name="message" placeholder="Your message..." style={{height: 120}}></textarea>
				<br></br>
				<button type="submit" class="btn btn-big contact-btn">
					<i class="fa fa-envelope"></i>
					Send
				</button>
			</form>
		</div>

</div>
	</div>
    </div>





</div>


    );

}
export default home;