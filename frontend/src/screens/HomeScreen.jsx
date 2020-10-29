import React, { Fragment, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const TabElm = ({ eventKey, title, children }) => {
	return (
		<Tab eventKey={eventKey} title={title}>
			{children}
		</Tab>
	);
};

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
				<TabElm eventKey="newArrival" title="Mới nhất">Hello</TabElm>
				<TabElm eventKey="mostSeen" title="Xem nhiều">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Ipsam, laboriosam. Accusantium sequi consequatur nihil eius
					asperiores a tempora nemo omnis! At quis perspiciatis
					deleniti quos autem officiis aliquid omnis accusantium!
				</TabElm>
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
