import Link from "next/link";

export default function Navbar() {
	return (
		<div className="relative flex items-center justify-center py-5 bg-black shadow-lg shadow-white/50 z-10">
			<Link href="/">
				<h1 className="relative text-2xl tracking-[0.15em] text-white font-cabin cursor-pointer">
					<span className="px-2 ml-3 mr-1 rounded bg-white font-extrabold text-black tracking-normal">B</span>
					IG
					<span className="px-2 ml-3 mr-1 rounded bg-white font-extrabold text-black tracking-normal">B</span>
					LACK
					<span className="px-2 ml-3 mr-1 rounded bg-white font-extrabold text-black tracking-normal">C</span>
					LOTH
				</h1>
			</Link>
		</div>
	);
}
