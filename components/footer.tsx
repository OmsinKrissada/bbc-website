import Image from "next/image";

export default function Footer() {
	return (
		<footer className="flex flex-col md:flex-row-reverse md:justify-evenly items-center space-y-5 md:space-y-0 px-5 py-10 text-white bg-black font-inter">
			<div className="flex items-center space-x-5">
				<a href="https://facebook.com">
					{/* <Image src="/line-icon.svg" alt="facebook_icon" layout="fill" className="text-white fill-white" /> */}
					<div className="rounded-lg hover:bg-white transition">
						<svg
							width="3rem"
							height="3rem"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							data-name="Layer 1"
							stroke="currentColor"
							strokeWidth="0.1"
							fill="currentColor"
							className="hover:fill-[#00b900] transition"
						>
							<path d="M13.78,9.46h0a.38.38,0,0,0-.38.38v1.67L12,9.65a.4.4,0,0,0-.33-.19h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h0a.38.38,0,0,0,.38-.38V11l1.39,1.91,0,0h0a.27.27,0,0,0,.15.11.32.32,0,0,0,.14,0h0A.33.33,0,0,0,14,13l.1-.07h0a.39.39,0,0,0,.11-.27V9.84A.38.38,0,0,0,13.78,9.46ZM9.2,12.27H8.14V9.84a.38.38,0,0,0-.38-.38h0a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38H9.2a.39.39,0,0,0,.39-.38v0A.39.39,0,0,0,9.2,12.27Zm1.11-2.81h0a.39.39,0,0,0-.39.38v2.84a.39.39,0,0,0,.39.38h0a.38.38,0,0,0,.38-.38V9.84A.38.38,0,0,0,10.31,9.46ZM17.91,2H6.09A4.1,4.1,0,0,0,2,6.09V17.91A4.1,4.1,0,0,0,6.09,22H17.91A4.1,4.1,0,0,0,22,17.91V6.09A4.1,4.1,0,0,0,17.91,2Zm.31,12.28a1.55,1.55,0,0,1-.13.17h0a5.5,5.5,0,0,1-.8.8c-2,1.87-5.36,4.11-5.81,3.76s.64-1.76-.53-2a1,1,0,0,1-.25,0h0c-3.44-.48-6-2.89-6-5.78,0-3.25,3.29-5.88,7.34-5.88s7.34,2.63,7.34,5.88A5,5,0,0,1,18.22,14.28ZM16.51,9.47H15a.38.38,0,0,0-.38.38v2.84a.38.38,0,0,0,.38.38h1.48a.38.38,0,0,0,.38-.38v0a.38.38,0,0,0-.38-.38H15.45v-.6h1.06a.39.39,0,0,0,.38-.39v0a.38.38,0,0,0-.38-.38H15.45v-.61h1.06a.38.38,0,0,0,.38-.38v0A.38.38,0,0,0,16.51,9.47Z" />
						</svg>
					</div>
				</a>
				<a href="https://www.facebook.com/Bigblackcloth_Team-105307738906210" target="_blank" rel="noreferrer">
					<div className="rounded-3xl p-[-2px] hover:bg-white transition">
						<svg className="hover:fill-[#1977f3] transition" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="3rem" height="3rem">
							<path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
						</svg>
					</div>
				</a>
			</div>
			<p>
				&copy; 2022
				<span className="font-cabin"> Big Black Cloth Team.</span>
			</p>
		</footer>
	);
}
