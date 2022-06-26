import Link from "next/link";
import Faq from "../components/faq";

export default function Home() {
	return (
		<>
			<div className="min-h-screen pt-10 bg-black/95 text-neutral-400">
				{/* <p className="font-medium">Nothing is here yet xd</p> */}
				<Link href="/team">
					<div className="relative group w-fit h-fit mx-auto">
						<div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-700 to-pink-600 blur opacity-60 group-hover:opacity-[100] transition"></div>
						<button className="relative m-auto px-3 py-2 rounded-lg bg-gray-900 font-inter font-medium">Meet Our Team &rarr;</button>
					</div>
				</Link>
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
		</>
	);
}
