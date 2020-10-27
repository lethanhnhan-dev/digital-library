import React, { Fragment, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const HomeScreen = () => {
	const [key, setKey] = useState("newArrival");
	return (
		<Fragment>
			<Tabs
				id="tabs-controlled"
				activeKey={key}
				className="tabs-controlled"
				onSelect={(k) => setKey(k)}
			>
				<Tab eventKey="newArrival" title="Mới nhất">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ullam, repellendus nemo facilis porro natus repellat cumque
					ut quisquam culpa dolore iusto mollitia ea soluta maiores
					omnis dicta eos architecto vitae?
				</Tab>
				<Tab eventKey="mostSeen" title="Xem nhiều">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Ipsam, laboriosam. Accusantium sequi consequatur nihil eius
					asperiores a tempora nemo omnis! At quis perspiciatis
					deleniti quos autem officiis aliquid omnis accusantium!
				</Tab>
				<Tab eventKey="mostDownloaded" title="Download nhiều">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Adipisci ex quaerat earum cum neque possimus quis
					perspiciatis, architecto inventore iusto ut eos nisi ipsam
					quia. Odio mollitia quia amet optio?
				</Tab>
			</Tabs>
		</Fragment>
	);
};

export default HomeScreen;
