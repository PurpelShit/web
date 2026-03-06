import Link from "next/link";
import { Button } from "../ui/Button";
import { WhatsAppIcon } from "../ui/Icons";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12 md:py-16 mt-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

                    {/* BRANDING */}
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-flex mb-6 group">
                            <Image
                                src="/logo.png"
                                alt="The 100 Dinar Company"
                                width={160}
                                height={107}
                                className="h-14 w-auto object-contain brightness-0 invert opacity-80 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
                            />
                        </Link>
                        <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
                            We build fast, beautiful, conversion-focused websites for businesses everywhere — starting at just 100 BHD.
                        </p>
                        <Link href="https://wa.me/918218699398" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="gap-2">
                                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> Chat with us
                            </Button>
                        </Link>
                    </div>

                    {/* QUICKS LINKS */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-500 hover:text-[var(--color-gold)] transition">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-gray-500 hover:text-[var(--color-gold)] transition">Portfolio</Link></li>
                            <li><Link href="/services" className="text-gray-500 hover:text-[var(--color-gold)] transition">Services</Link></li>
                            <li><Link href="/pricing" className="text-gray-500 hover:text-[var(--color-gold)] transition">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
                        <ul className="space-y-3 text-gray-500">
                            <li><Link href="/contact" className="hover:text-[var(--color-gold)] transition">Contact Form</Link></li>
                            <li>New Delhi, India</li>
                            <li><a href="mailto:hello@100dinar.com" className="hover:text-[var(--color-gold)] transition">hello@100dinar.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} The 100 Dinar Company. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gray-600 transition">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gray-600 transition">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
