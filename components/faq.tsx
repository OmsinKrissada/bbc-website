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
			<Accordion.Item label="พวกเรามาจากไหน">
				ทีม Big Black Cloth เป็นโครงงานจำลองบริษัทจิ๋วของกลุ่มนักเรียนระดับชั้น ม.6/1 โรงเรียนอัสสัมชัญ เพื่อเป็นส่วนหนึ่งของรายวิชาการงานอาชีพ
			</Accordion.Item>

			{/* <Accordion.Item label="เราผลิตอะไร">We make the worst possible shit shirt ever existed in our universe.</Accordion.Item> */}

			{/* <Accordion.Item label="ใช้เวลาสั่งทำนานไหม?">Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Item> */}

			<Accordion.Item label="วิธีการชำระเงิน">
				<p>1. จ่างเงินสดในวันขาย (จะประกาศวันในภายหลัง)</p>
				<p>
					2. แสกน QR Code หรือกดลิงค์นี้{" "}
					<a className="text-indigo-600 hover:underline" href="https://google.com">
						https://idk.com
					</a>
				</p>
			</Accordion.Item>
		</Accordion>
	);
}
