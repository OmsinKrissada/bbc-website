import Link from "next/link";
import Image from "next/image";
import Faq from "../components/faq";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { NextPage } from "next";

const Home: NextPage = () => {

	const texts = ['ELEGANT', 'UNIQUE', 'LEGENDARY', 'PRICELESS'];
	let [adjective, setAdjective] = useState<string>('ELEGANT');
	let [nextAdjective, setNextAdjective] = useState<string>('ELEGANT');
	let [adjectiveStyle, setAdjectiveFilter] = useState({});
	let [nextAdjectiveStyle, setNextAdjectiveFilter] = useState({});

	const morphTime = 1;
	const cooldownTime = 3;

	let textIndex = texts.length - 1;
	let time = new Date();
	let morph = 0;
	let cooldown = cooldownTime;

	// setAdjective(texts[textIndex % texts.length]);
	// setNextAdjective(texts[(textIndex + 1) % texts.length]);

	function doMorph() {
		morph -= cooldown;
		cooldown = 0;

		let fraction = morph / morphTime;

		if (fraction > 1) {
			cooldown = cooldownTime;
			fraction = 1;
		}

		setMorph(fraction);
	}

	function setMorph(fraction: number) {
		setNextAdjectiveFilter({
			filter: `blur(${Math.min(8 / fraction - 8, 100)}px)`,
			opacity: `${Math.pow(fraction, 0.4) * 100}%`
		});

		fraction = 1 - fraction;

		setAdjectiveFilter({
			filter: `blur(${Math.min(8 / fraction - 8, 100)}px)`,
			opacity: `${Math.pow(fraction, 0.4) * 100}%`
		});

		setAdjective(texts[textIndex % texts.length]);
		setNextAdjective(texts[(textIndex + 1) % texts.length]);
	}

	function doCooldown() {
		morph = 0;

		setNextAdjectiveFilter({
			filter: '',
			opacity: '100%'
		});

		setAdjectiveFilter({
			filter: '',
			opacity: '0%'
		});
	}

	function animate() {
		requestAnimationFrame(animate);

		let newTime = new Date();
		let shouldIncrementIndex = cooldown > 0;
		let dt = (newTime.valueOf() - time.valueOf()) / 1000;
		time = newTime;

		cooldown -= dt;

		if (cooldown <= 0) {
			if (shouldIncrementIndex) {
				textIndex++;
			}

			doMorph();
		} else {
			doCooldown();
		}
	}


	useEffect(() => {
		animate();
		// setInterval(() => {
		// 	setAdjective(adjs[Math.floor(Math.random() * adjs.length)]);
		// }, 3000);
	}, []);

	return (
		<Layout>
			<div className="pt-10 pb-20 bg-black/95 text-neutral-400 overflow-x-hidden">
				{/* <p className="font-medium">Nothing is here yet xd</p> */}
				<Link href="/team">
					<div className="relative group w-fit h-fit mx-auto">
						<div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-700 to-pink-600 blur opacity-80 group-hover:opacity-100 group-hover:brightness-150 transition"></div>
						<button className="relative m-auto px-3 py-2 rounded-lg bg-gray-900 font-inter font-medium">Meet Our Team &rarr;</button>
					</div>
				</Link>

				<div className="flex flex-col md:flex-row justify-evenly items-center mt-10">
					<h3 className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 text-5xl font-playfair">
						<div className="">ONE</div>
						<div className="relative w-[10ch] h-12">
							<span className="absolute left-0 w-full md:text-center font-bold" style={nextAdjectiveStyle}> {nextAdjective} </span>
							<span className="absolute left-0 w-full md:text-center font-bold" style={adjectiveStyle}> {adjective} </span>
						</div>
						<div>STYLE</div>
					</h3>
					<div className="p-20" style={{ background: 'radial-gradient(circle closest-side, hsl(255, 100%, 70%), transparent)' }}>
						<div className="relative w-96 h-96">
							<Image src="/first-design.png" layout="fill" />
						</div>
					</div>
				</div>
				{/* <Link href="/team" className="mx-auto"> */}
				{/* <button className="mx-auto px-2 py-1 ring-1 ring-teal-400 rounded-md font-inter font-bold text-white hover:text-teal-600 hover:bg-white transition">Our Team &rarr;</button> */}
				{/* </Link> */}
			</div>
			<div className="bg-slate-200 md:p-32 py-20">
				<h2 className="w-fit mx-5 mb-10 px-5 py-3 bg-black text-center md:text-left text-3xl text-white font-prompt font-bold">
					{/* <span className="text-black/30 hidden md:inline">| </span> */}
					คุณอาจสงสัย
				</h2>
				<div className="bg-slate-100">
					<Faq />
				</div>
			</div>
		</Layout>
	);
};
export default Home;