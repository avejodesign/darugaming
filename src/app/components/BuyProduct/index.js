"use client"

import { useState } from "react";

import Image from "next/image";

import StarSVG from "@/assets/star.svg";
import LightningSVG from "@/assets/lightning.svg";
import SupportAgentSVG from "@/assets/support-agent.svg";
import GlobalSVG from "@/assets/global.svg";
import PcSVG from "@/assets/pc.svg";
import ChevronSVG from "@/assets/chevron.svg";
import TagSVG from "@/assets/tag.svg";
import CartSVG from "@/assets/cart.svg";
import UserGuestSVG from "@/assets/user-guest.svg";
import WishHeartSVG from "@/assets/wish-heart.svg";
import WhatsappSVG from "@/assets/whatsapp.svg";

import LogoPayments01 from "@/assets/logo-payments-01.png"
import LogoPayments02 from "@/assets/logo-payments-02.png"
import LogoPayments03 from "@/assets/logo-payments-03.png"
import LogoPayments04 from "@/assets/logo-payments-04.png"
import LogoPayments05 from "@/assets/logo-payments-05.png"
import LogoPayments06 from "@/assets/logo-payments-06.png"
import LogoPayments07 from "@/assets/logo-payments-07.png"
import LogoPayments08 from "@/assets/logo-payments-08.png"

export default function BuyProduct() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownItems = ["Standand", "Champions Edition"];
    const [selectOption, setSelectOption] = useState(dropdownItems[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const onOptionClicked = (value) => {
        setSelectOption(value);
        setIsOpen(false);
    }

    return (
        <div className="w-full md:p-8 p-5 backdrop-blur-md" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
            <div className="flex gap-x-4 mb-6">
                <span className="md:text-md text-sm py-2 px-4 font-semibold text-black" style={{ background: "linear-gradient(259deg, #0BC4E5 -24.82%, #67E8FF 18.51%, rgba(22, 220, 255, 0.82) 108.82%)" }}>Pré-venda</span>
                <span className="md:text-md text-sm py-2 px-4 border border-gray-400">Lançamento: 03/04/2024</span>
            </div>
            <div className="flex items-center gap-x-2 mb-2">
                <StarSVG />
                <StarSVG />
                <StarSVG />
                <StarSVG />
                <StarSVG />
                <span>(5)</span>
            </div>
            <h1 className="md:text-2xl text-xl font-semibold mb-2">Marvel's Spider-Man 2 Steam Offline</h1>
            <p className="md:text-lg text-sm text-gray-100 mb-6">Spider-Man 2 traz ação intensa, mundo aberto e vilões épicos. Viva a experiência do Homem-Aranha em Nova York!</p>
            <div
                className="flex py-3 2xl:px-6 md:px-4 px-2 justify-between gap-4 mb-6"
                style={{ background: "linear-gradient(85deg, rgba(11, 196, 229, 0.24) 11.1%, rgba(0, 216, 255, 0.50) 70.51%, #02D9FF 113.22%)" }}
            >
                <div className="flex-1 flex justify-center items-center font-medium md:text-sm text-xs"><LightningSVG className="mr-2" /><span>Entrega <br />Instantânea</span></div>
                <div className="whitespace-nowrap px-2 flex-auto flex justify-center items-center font-medium md:text-sm text-xs border border-t-0 border-b-0 border-[#0BC4E5]"><SupportAgentSVG className="mr-2" /><span>Suporte das<br /> 14h às 23h.</span></div>
                <div className="flex-1 flex justify-center items-center font-medium md:text-sm text-xs"><GlobalSVG className="mr-2" /><span>Region <br />Global</span></div>
            </div>
            <p className="text-base font-medium mb-4 ">Selecione as opções do Período de aluguel:</p>
            <div className="border border-white mb-5 ">
                <div className="flex">
                    <div className="border border-t-0 border-l-0 border-b-0 border-white/20 py-5 px-6 flex gap-2 ">
                        <PcSVG />
                        PC
                    </div>
                    <div className="relative w-full z-10 ">
                        <button
                            className="flex justify-between cursor-pointer hover:bg-white/10 transition w-full font-medium py-5 px-6 rounded inline-flex items-center"
                            onClick={toggleDropdown}
                        >
                            {selectOption} 
                            <ChevronSVG />
                        </button>
                        <ul className={`absolute ${isOpen ? 'block' : 'hidden'} w-full border bg-[#2A2F37] text-white pt-1 custom-dropdown`}>
                            {dropdownItems.map((item, index) => (
                            <li key={index} className="hover:bg-white/20 cursor-pointer py-3 px-6" onClick={() => onOptionClicked(item)}>
                                {item} 
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex md:mb-6 mb-8">
                <p className="flex items-center md:text-xl text-lg text-gray-200 mr-4 line-through"><TagSVG className="mr-2" />R$ 49,99</p>
                <h2 className="md:text-4xl text-2xl font-semibold flex items-center">R$ 47,49 <span className="text-sm font-semibold bg-[#0BC4E5] py-1 px-2 rounded-full ml-4">-33%</span></h2>
            </div>
            <div className="flex flex-col gap-3">
                <div className="box-shape">
                    <button className="w-full bg-[#0BC4E5]  cursor-pointer h-14 shape button-product font-semibold text-black gap-2"><CartSVG />Compre agora mesmo</button>
                </div>
                <div className="box-shape">
                    <button className="w-full bg-[#0BC4E5]  cursor-pointer h-14 shape-outline button-product font-semibold text-[#00D8FF] gap-2"><UserGuestSVG />Comprar como convidado</button>
                </div>
                <div className="box-shape wish">
                    <button className="w-full bg-[#0BC4E5]  cursor-pointer h-14 shape normal button-product font-medium gap-2"><WishHeartSVG />Para a lista de desejos</button>
                </div>
            </div>
            <div className="border border-white opacity-20 my-8"></div>
            <div className="box-shape whatsapp">
                <button className="w-full bg-[#0BC4E5] cursor-pointer h-14 shape whatsapp font-medium font-semibold text-black gap-2"><WhatsappSVG />Para a lista de desejos</button>
            </div>
            <p className="text-base font-medium py-4">Checkout seguro garantido.</p>
            <div className="flex flex-wrap gap-2 mr-10">
                <Image src={LogoPayments01} alt="stripe" />
                <Image src={LogoPayments02} alt="mastercard" />
                <Image src={LogoPayments03} alt="visa" />
                <Image src={LogoPayments04} alt="pix" />
                <Image src={LogoPayments05} alt="google pay" />
                <Image src={LogoPayments06} alt="bitcoin" />
                <Image src={LogoPayments07} alt="ethereum" />
                <Image src={LogoPayments08} alt="mercado pago" />
            </div>
        </div>
    )
}
