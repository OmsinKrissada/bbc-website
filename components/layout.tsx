import Navbar from "./navbar";
import Head from "next/head";
// import Footer from './footer'

interface LayoutProps {
	children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<meta property="og:image" content="/logo.png" />
				<meta name="description" content="Big Black Cloth is a shirt company that makes custom shirts for you. We make shirts that are made to fit your needs." />
				<meta name="og:description" content="Big Black Cloth is a shirt company that makes custom shirts for you. We make shirts that are made to fit your needs." />
			</Head>
			<Navbar />
			<main>{children}</main>
			{/* <Footer /> */}
		</>
	);
}