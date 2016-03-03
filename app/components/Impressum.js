import React from "react";
import AddApp from "./AddApp";

class Impressum extends React.Component {

	render() {
		return (
			<div className="weights">

                <h2>Impressum</h2>

                <p>The following information (Impressum) is required under German law.</p>

                <p>Responsible for this site:</p>

    			<p><i>(Authors address currently removed since this website is subject to a scientific paper review)</i></p>
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
