import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EmptyLayout from '../components/emptylayout';

const QrHub: NextPage = () => {
	return (
		<EmptyLayout>
			<Head>
				<title>Social Media Portal</title>
				<meta property="og:title" content="Social Media Portal" key="title" />
			</Head>
			<div className='grid grid-cols-1 md:grid-cols-2 min-h-screen md:p-60 bg-black text-neutral-400 font-inter'>
				<Link href="/">
					<a className='px-5 py-2 bg-white rounded-xl m-3 text-black text-4xl flex justify-center items-center'>Website</a>
				</Link>
				<a href="https://www.facebook.com/Bigblackcloth_Team-105307738906210" className='px-5 py-2 bg-white rounded-xl m-3 text-black text-4xl flex justify-center items-center'>Facebook</a>
				<a href="https://www.facebook.com/Bigblackcloth_Team-105307738906210" className='px-5 py-2 bg-white rounded-xl m-3 text-black text-4xl flex justify-center items-center'>Instagram (soon)</a>
				<a href="https://www.facebook.com/Bigblackcloth_Team-105307738906210" className='px-5 py-2 bg-white rounded-xl m-3 text-black text-4xl flex justify-center items-center'>Line</a>
			</div>
		</EmptyLayout>
	);
};
export default QrHub;