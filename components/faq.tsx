import { Accordion } from "@mantine/core";

export default function Faq() {
	return (
		<Accordion
			classNames={{
				item: "your-item-class",
				itemOpened: "your-itemOpened-class",
				itemTitle: "your-itemTitle-class",
				control: "your-control-class",
				label: "font-prompt font-semibold",
				icon: "your-icon-class",
				content: "font-prompt",
				contentInner: "your-contentInner-class",
			}}
		>
			<Accordion.Item label="พวกเราเป็นใคร">พวกเราเป็นนักเรียนอัสสัมชัญระดับชั้น ม.6 บลาๆๆ</Accordion.Item>

			{/* <Accordion.Item label="เราผลิตอะไร">We make the worst possible shit shirt ever existed in our universe.</Accordion.Item> */}

			<Accordion.Item label="ใช้เวลาสั่งทำนานไหม?">Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Item>

			<Accordion.Item label="วิธีการชำระเงิน">With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Item>
		</Accordion>
	);
}
