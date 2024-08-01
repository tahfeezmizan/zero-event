import Link from "next/link";
import { AiOutlineFacebook } from 'react-icons/ai';
import { CiInstagram, CiTwitter } from 'react-icons/ci';

const Footer = () => {
    return (
        <div className="bg-[#333333] py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-7">
                    <div className="col-span-2">
                        <Link href="/" className="text-white text-2xl font-Roboto font-bold">
                            Zero Events
                        </Link>

                        <p className="text-base pb-5 font-Roboto font-medium pt-10">Social Media</p>
                        <div className="flex items-center gap-8 text-xl text-white mb-5">
                            <a href="https://www.facebook.com" className="text-4xl p-2"><AiOutlineFacebook /></a>
                            <a href="https://www.twitter.com" className="text-4xl p-2"><CiTwitter /></a>
                            <a href="https://www.instagram.com" className="text-4xl p-2"><CiInstagram /></a>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <header className="text-base font-Roboto font-medium mt-4 mb-5 uppercase">Shop</header>
                        <div className="flex flex-col space-y-3 text-base font-Poppins font-medium">
                            <Link href="/events">Events</Link>
                            <Link href="/overview">Overview</Link>
                            <Link href="/pricing">Pricing</Link>
                            <Link href="/releases">Releases</Link>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <header className="text-base font-Roboto font-medium mt-4 mb-5 uppercase">Company</header>
                        <div className="flex flex-col space-y-3 text-base font-Poppins font-medium">
                            <Link href="/about">About us</Link>
                            <Link href="/contact">Contact</Link>
                            <Link href="/news">News</Link>
                            <Link href="/support">Support</Link>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <nav className="flex flex-col">
                            <header className="text-base font-Roboto font-medium mt-4 mb-6 uppercase">Stay up to date</header>

                            <div className="">
                                <input type="text" name=""
                                    className='w-48 md:w-60 p-2 rounded-l-md border-black border-2 text-black'
                                    placeholder='Enter your email' id="" />
                                <input type="submit"
                                    className='py-2 px-5 uppercase rounded-r-md text-white bg-black border-2 border-black'
                                    value="Submit" />
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
