import Head from "next/head";

interface LayoutProps {
	children: React.ReactNode;
}

export default function EmptyLayout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Big Black Cloth - A Shirt Junior Company</title>
				<meta property="og:title" content="Big Black Cloth | A Shirt Junior Company" key="title" />
				<meta property="og:image" content="/logo.png" />
				<meta name="description" content="Big Black Cloth is a shirt company. We make shirts that are made to fit your needs." />
				<meta name="og:description" content="Big Black Cloth is a shirt company. We make shirts that are made to fit your needs." />
			</Head>
			<div>{children}</div>
		</>
	);
}
