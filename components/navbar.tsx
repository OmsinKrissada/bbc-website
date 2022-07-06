import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [shouldExpand, setShouldExpand] = useState(false);
	setTimeout(() => {
		setShouldExpand(true);
	}, 1000);
	return (
		<div className="relative flex items-center justify-center py-5 bg-black shadow-lg shadow-gray-500/50">
			<Link href="/">
				<h1 className="relative group text-2xl tracking-[0.15em] text-center text-white font-cabin cursor-pointer">
					<span className="px-2 ml-3 mr-1 rounded bg-white font-extrabold text-black tracking-normal">B</span>
					<span className={`inline-block max-w-fit ease-in-out origin-left ${shouldExpand ? "w-full scale-100 duration-500" : "w-[0%] scale-0"}`}>IG</span>

					<span className="px-2 ml-3 mr-1 rounded bg-white font-extrabold text-black tracking-normal">B</span>
					<span className={`inline-block max-w-fit ease-in-out origin-left delay-500 ${shouldExpand ? "w-full scale-100 duration-500" : "w-[0%] scale-0"}`}>LACK</span>

					<span className="px-2 ml-3 mr-1 rounded bg-white font-extrabold text-black tracking-normal">C</span>
					<span className={`inline-block max-w-fit ease-in-out origin-left delay-[1000ms] ${shouldExpand ? "w-full scale-100 duration-500" : "w-[0%] scale-0"}`}>LOTH</span>
				</h1>
			</Link>
		</div>
	);
}
