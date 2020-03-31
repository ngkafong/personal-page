import { Activity } from './activity';

export const ACTIVITIES: Activity[] = [

	{
		title: 'Challenging Exco Year in CSESS',
		image: '../assets/images/img-02-01.jpg',
		date: '23-03-2020',
		content: `<p>After the annual election and the general meeting,
							the year CometS comes to an end. Thank you for all
							member's support throughout this special year.</p>

							<p>It has been a challenging year that on-campus teaching
							are interrupted by social activities and the pandemic.
							Unexpected events were occuring frequently and andling
							these special circumstances requires adaptability.
							I am especially grateful to my cabinet members and other
							active members who have paid lots of effort to maintain
							good operations of this society under emergence situations.
							</p>

							<p>It is heart-teaching to see participants enjoy our function,
							 like our farewell dinner, welcome day or orientation camp. Throughout
							 these functions held, I have made lots of friends with participants who
							 have greatly facilitated my academic life and personal development.</p>

							 <p> Wish all the best to our next session, Cipers.</p>
							 <img src = '../assets/images/img-02-02.jpg' width=40%>`

	},

	{
		title: 'Mini-Stock Predictor',
		image: '../assets/images/img-01-01.png',
		date: '10-01-2020',
		content:
		`<p>Check out the project on <a href="https://github.com/ngkafong/kNN-stock-predictor">Github</a></p>
		<p>This is a self-proposed project as a requirement by the Honor OOP course COMP2012H.
		It is a very content-rich course that requires every student to create their own C++ programme,
		either games or utility softwares. For me, I decide to combine my
		interest in data program to this course, so this tiny stock predictor is created.</p>
		<p>This project uses Qt framework to provide functionalities like file downloads
		, chart representation and GUI. A csv file containing daily stock data is downloaded
		from the AlphaVantage API. It is preproccessed to obtain input attributes for the module
		 before being passed to some self-define kNN function to generate
		the result array. Finally, it is shown and plotted by Qt chart module.</p>
		<img src = '../assets/images/img-01-02.gif', width=100%>

		`

	},

	{
		title: 'Dijkstra Visualizer',
		image: '../assets/images/img-04-01.png',
		date: '28-12-2019',
		content: `<p>Check out the project on <a href="https://github.com/ngkafong/dijkstra-visualizer">Github</a></p>
		<p>As this is the final assignment of the OOP course, this project is built
		from scratch accoding to a pre-set requirement with no skeleton code provided.</p>
		<p>This program provide step-to-step visualization to the Dijkstra shortest path algorithm.
		A canvas is in the GUI for the drawing of a network, containing nodes, edges and respective weight.
		After the drawing is finished, press Start to choose the start node and it proceed step by step while
		pressing Step. Color is given to nodes and the color differs by the status of the node, whether it is being
		processed, updated or not updated.</p>
		<img src = '../assets/images/img-04-02.gif' width = 90% >  `

	},

	{
		title: 'Thank you, 9th FMSHK',
		image: '../assets/images/img-03-01.jpg',
		date: '18-12-2019',
		content: `<p>With the formation of the next session, my  journey with FMSHK turns to a new page.
		Thank you for the efforts from all my fellow committee member, supports from our active participants.</p>

		<p>Being an exco in FMSHK has offered me precious opportunities.
		I have learnt some formal administrative procedures through managing documents and communicating with official department.
		With partial sponsors from the higher education fundings, we organized study trip in Singapore in this summer.</p>

		<p>During this study trip in Singpaore, we watched exhibition
		on see how Singapore incorporate technology with their life and the
		development of the city. I also met with students in NUS and have a conversation
		with them.
		</p>
		<p>Thank you for all the opportunities that being an exco in FMSHK have offered me.
		Wish next session the best. </p>

		<img src = '../assets/images/img-03-02.jpg' width = 90% > 

`
	}
]
