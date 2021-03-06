import React from 'react';
import Strip from './Strip';
const App = () => {
	return(
		<div>
		<div className="heading">
			<p>π°Welcome to the <span style={{fontWeight:'bold'}}>Slot Machine</span> Lets Playπ°</p>
		</div>
		<div className="machine">
			<Strip emoji1="π" emoji2="π" emoji3="π" slot="1"/>
			<Strip emoji1="π" emoji2="π€©" emoji3="π" slot="2"/>
			<Strip emoji1="π­" emoji2="π" emoji3="π­" slot="3"/>
			<Strip emoji1="π€©" emoji2="π­" emoji3="π" slot="4"/>
			<Strip emoji1="π€£" emoji2="π€£" emoji3="π€£" slot="5"/>
		</div>
		</div>
	);
};

export default App;