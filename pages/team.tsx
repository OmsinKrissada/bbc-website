import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
export default function Team() {
	return (
		<Layout>
			<Head>
				<title>Big Black Cloth - Our Team</title>
				<meta property="og:title" content="Big Black Cloth | Our Team" key="title" />
			</Head>
			<div className="min-h-screen pt-10 bg-black/95 text-neutral-400">
				<h2 className="font-nanum font-bold text-3xl text-center text-white">Meet Our Team</h2>
				<p className="m-5 font-prompt text-center text-xl">ทำความรู้จักกับสมาชิกผู้จัดทำ</p>
				{/* <Image src="https://drive.google.com/u/0/uc?id=1Rd8EYN1joVufT7lfgbzMCltilnTJBraT&export=download" layout="fill" /> */}
			</div>
		</Layout>
	);
}
