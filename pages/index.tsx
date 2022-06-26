// import Head from "next/head";

export default function Home() {
	return (
		<div className="bg-black/95 text-neutral-400 min-h-screen">
			<p className="font-medium">Nothing is here yet xd</p>
			<div className="relative group w-fit h-fit mx-auto">
				<div className="absolute -inset-x-1 -inset-y-1 rounded-lg bg-gradient-to-r from-indigo-700 to-pink-600 blur opacity-60 group-hover:opacity-100 transition-all"></div>
				<button className="relative m-auto px-3 py-2 rounded-lg bg-gray-900 font-inter font-medium">Click me and nothing will happen &darr;</button>
			</div>
		</div>
	);
}
