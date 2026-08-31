import getDevice from '@/functions/getDevice';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion.tsx';
import { WHATSAPP_URL } from '@/config/site';

function Contact() {
    const isMobile = getDevice();

    return (
        <>
            {!isMobile ? (
                <>
                    <h3 className="text-left text-base font-bold uppercase tracking-wide text-white">Contato</h3>
                    <div className="mb-0 mt-3 flex flex-col gap-2.5 text-left text-sm leading-normal text-white/95 sm:text-base">
                        <a href={WHATSAPP_URL} className="m-0 p-0 hover:underline" title="Chamar no WhatsApp">
                            WhatsApp: (47) 99112-0742
                        </a>
                    </div>
                    <div className="mt-5 flex items-center justify-start gap-3">
                        <a
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 hover:opacity-80"
                            href="https://www.instagram.com/tcodesolucoes/"
                            title="Instagram TCode"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsInstagram className="h-5 w-5 text-black" />
                        </a>
                        <a
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 hover:opacity-80"
                            href="https://br.linkedin.com/company/t-code-solucoes-tecnologicas"
                            title="Linkedin TCode"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="h-5 w-5 text-black" />
                        </a>
                        <a
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 hover:opacity-80"
                            href={WHATSAPP_URL}
                            title="Chamar no WhatsApp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsWhatsapp className="h-5 w-5 text-black" />
                        </a>
                    </div>
                </>
            ) : (
                <Accordion type="single" collapsible className="w-full text-left">
                    <AccordionItem value="item" className="border-white/20">
                        <AccordionTrigger className="text-left text-base font-bold uppercase tracking-wide text-white">
                            Contato
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-col gap-1 text-white/95">
                                <a href={WHATSAPP_URL} title="Chamar no WhatsApp">
                                    <b>WhatsApp:</b> (47) 99112-0742
                                </a>
                            </div>
                            <div className="mt-4 flex items-center justify-start gap-2">
                                <a
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 hover:opacity-80"
                                    href="https://www.instagram.com/tcodesolucoes/"
                                    title="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsInstagram className="h-5 w-5 text-black" />
                                </a>
                                <a
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 hover:opacity-80"
                                    href="https://br.linkedin.com/company/t-code-solucoes-tecnologicas"
                                    title="Linkedin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="h-5 w-5 text-black" />
                                </a>
                                <a
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white p-1 hover:opacity-80"
                                    href={WHATSAPP_URL}
                                    title="Chamar no WhatsApp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <BsWhatsapp className="h-5 w-5 text-black" />
                                </a>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )}
        </>
    );
}

export default Contact;
