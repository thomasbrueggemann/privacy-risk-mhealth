import React from "react";
import AddApp from "./AddApp";

class Impressum extends React.Component {

	render() {
		return (
			<div className="weights">

                <h2>Impressum</h2>

                <p>The following information (Impressum) is required under German law.</p>

                <p>Responsible for this site:</p>

				<p>
					<span className="reverse">nnameggürB samohT</span><br />
	                <span className="reverse">51 eßartsreliewtdiehcS</span><br />
	                <span className="reverse">nlöK 33905</span><br />
	            </p>

	            <p>
					<span className="reverse">nesnaH leoJ</span><br />
					<span className="reverse">53 .rtsnellepaK</span><br />
	                <span className="reverse">nehcaA 66025</span><br />
	        	</p>

				<p>This website is related to the following research paper <a href="http://link.springer.com/chapter/10.1007%2F978-3-319-44760-5_12" target="_blank">An Information Privacy Risk Index for mHealth Apps</a> by the <a href="http://se.uni-kassel.de/" target="_blank">University of Kassel</a></p>

                <h3>Legal disclaimer</h3>
                <p>The creators of this website cannot assume liability for the timeless accuracy and completeness of the information. This website contains links to external websites. As the contents of these third-party websites are beyond my control, I cannot accept liability for them. ResponsibiIity for the contents of the linked pages is always held by the provider or operator of the pages.</p>

                <h3>Data protection</h3>
                <p>In general, when visiting the website of “Privacy Index for mHealth Apps”, no personal data are saved. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibIy be accessed by third parties.</p>

                <p>&nbsp;</p>
            </div>
		);
	}
}

export default Impressum;
