import Head from "next/head";
export default function Team() {
	return (
		<>
			<Head>
				<title>Big Black Cloth - Our Team</title>
				<meta property="og:title" content="Big Black Cloth | Our Team" key="title" />
			</Head>
			<div className="min-h-screen pt-10 bg-black/95 text-neutral-400">
				<h2 className="font-nanum font-bold text-3xl text-center text-white">Meet Our Team</h2>
				<p className="m-5 font-prompt text-center text-xl">ว่าถ่ายรูปแยกแต่ละคนมาดีมะ จะเสียเวลาป่าว</p>
			</div>
		</>
	);
}
