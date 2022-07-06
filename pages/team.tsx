import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
export default function Team() {
	const team = [
		// { title: 'CEO', names: ['นายกิตติภณ อมรประเสริฐกิจ'] },
		{ title: 'เลขานุการ', names: ['นายดัสกร ถาวรศุทธิศักดิ์'] },
		{
			title: 'ฝ่ายทรัพยากรบุคคล',
			names: [
				'นายสิรวิช ฐิติภูมิเดชา (หัวหน้าฝ่าย)',
				'นายกันต์พจน์ วัฒนชลสิทธิ์'
			]
		},
		{
			title: 'ฝ่ายการตลาด',
			names: [
				'นายพลวิชญ์ มาตังคะ (หัวหน้าฝ่าย)',
				'นายพศวีร์ เอนกลาภถาวร'
			]
		},
		{
			title: 'ฝ่ายผลิต',
			names: [
				'นายศิรสิทธิ์ สุขอร่าม (หัวหน้าฝ่าย)',
				'นายนุชิต วิจิตรกิจจา',
				'นายสิปปกร ธัญญหาญ'
			]
		},
		{
			title: 'ฝ่ายบัญชี',
			names: [
				'นายสิทธิทรรศน์ กิตติวัฒนเกียรติ (หัวหน้าฝ่าย)',
				'นายจิรพนธ์ วชิรทรัพย์',
				'นายภูริณัฐ ปั้นมีรส'
			]
		},
		{
			title: 'ฝ่ายประชาสัมพันธ์',
			names: [
				'นายปุณยธร ฉลองปรัชญา (หัวหน้าฝ่าย)',
				'นายกฤษฎา สิงหะคเชนทร์',
				'นายวรพล สกุลร่มโพธิ์ชัย'
			]
		},
	];
	return (
		<>
			<Head>
				<title>Big Black Cloth - Our Team</title>
				<meta property="og:title" content="Big Black Cloth | Our Team" key="title" />
			</Head>
			<div className="py-10 text-neutral-400 h-full">
				<h2 className="font-bold text-3xl text-center text-white">Meet Our Team</h2>
				<p className="m-5 text-center text-xl">ทำความรู้จักกับสมาชิกผู้จัดทำ</p>
				{/* <Image src="https://drive.google.com/u/0/uc?id=1Rd8EYN1joVufT7lfgbzMCltilnTJBraT&export=download" layout="fill" /> */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:w-2/3 mt-10 mx-auto">
					<div className="col-span-full mb-5">
						<h3 className="text-center text-white font-bold">CEO</h3>
						<ul className="text-center text-neutral-200">
							นายกิตติภณ อมรประเสริฐกิจ
						</ul>
					</div>
					{
						team.map((t, tIndex) => (
							<div key={tIndex}>
								<h3 className="text-center text-white">{t.title}</h3>
								<ul className="text-center">
									{
										t.names.map((n, nIndex) => (
											<li key={nIndex}>{n}</li>
										))
									}
								</ul>
							</div>
						)
						)
					}
				</div>
			</div>
		</>
	);
}
