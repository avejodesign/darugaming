import Image from "next/image";

import BgStars from "@/assets/background-stars.png";

import BgImageProduct from "@/assets/bg-image-product.png";
import ProductRecommendation01 from "@/assets/product-recommendation-01.png";

import WishHeartSVG from "@/assets/wish-heart.svg";
import TagSVG from "@/assets/tag.svg";
import CartSVG from "@/assets/cart.svg";
import StarOutlineSVG from "@/assets/star-outline.svg";

import BuyProduct from "./components/BuyProduct";
import ProductGallery from "./components/ProductGallery";

export default function Home() {
	return (
		<>
			<div className="w-full fixed">
				<Image src={BgStars} className="w-full "/>
			</div>
			<div className="w-full" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}>
				<Image src={BgImageProduct} alt="bg-product" className="w-full md:h-[800px] h-[400px] object-cover " />
			</div>
			<div className="w-full container mx-auto md:-mt-100 -mt-40 z-10 relative text-white">
				<div className="flex gap-16 w-full">
					<div className="w-full flex-2 flex-col flex md:gap-16 gap-6">
						<div className="w-full " >
							<ProductGallery />
						</div>
						<div className="md:hidden block w-full clip-path-element">
							<BuyProduct />
						</div>
						<div className="md:p-8 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
							<h2 className="md:text-2xl text-xl font-semibold mb-6">Quem viu este produto também comprou</h2>
							<div className="flex flex-col gap-6">
								<div className="flex xl:flex-row flex-col md:p-6 p-5 bg-[#3F434B] clip-path-element">
									<div className="flex xl:gap-8 gap-4 w-full">
										<div className="md:w-96 max-w-60 w-20 md:h-full h-20">
											<Image src={ProductRecommendation01} className="w-full h-full object-cover clip-path-images" alt="product"/>
										</div>
										<div className="flex flex-col justify-between w-full">
											<div className="flex justify-between relative">
												<h4 className="lg:text-lg text-md font-medium mb-2 line-clamp-2 mr-4">Farming Simulator 25 PC Steam Account Offline</h4>
												<WishHeartSVG className="md:relative absolute right-0 "/>
											</div>
											<div className="flex justify-between items-end">
												<div className="flex flex-col">
													<p className="md:flex hidden items-center lg:text-base text-sm  text-gray-200 mr-4 line-through"><TagSVG className="mr-2" />R$ 49,99</p>
													<h2 className="lg:text-xl text-lg font-semibold flex items-center">R$ 47,49 <span className="lg:text-sm text-xs font-semibold bg-[#0BC4E5] py-1 px-2 leading-[14px] rounded-full ml-4">-33%</span></h2>
												</div>
												<div className="xl:block hidden">
													<div className="box-shape">
														<button className="object-contain bg-[#0BC4E5] cursor-pointer h-10 shape font-semibold text-black gap-2 px-8"><CartSVG />Comprar</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="xl:hidden block pt-4">
										<button className="w-full object-contain bg-[#0BC4E5] cursor-pointer h-10 shape font-semibold text-black gap-2 px-8 "><CartSVG />Comprar</button>
									</div>
								</div>
								<div className="flex xl:flex-row flex-col md:p-6 p-5 bg-[#3F434B] clip-path-element">
									<div className="flex xl:gap-8 gap-4 w-full">
										<div className="md:w-96 max-w-60 w-20 md:h-full h-20">
											<Image src={ProductRecommendation01} className="w-full h-full object-cover clip-path-images" alt="product"/>
										</div>
										<div className="flex flex-col justify-between w-full">
											<div className="flex justify-between relative">
												<h4 className="lg:text-lg text-md font-medium mb-2 line-clamp-2 mr-4">Farming Simulator 25 PC Steam Account Offline</h4>
												<WishHeartSVG className="md:relative absolute right-0 "/>
											</div>
											<div className="flex justify-between items-end">
												<div className="flex flex-col">
													<p className="md:flex hidden items-center lg:text-base text-sm  text-gray-200 mr-4 line-through"><TagSVG className="mr-2" />R$ 49,99</p>
													<h2 className="lg:text-xl text-lg font-semibold flex items-center">R$ 47,49 <span className="lg:text-sm text-xs font-semibold bg-[#0BC4E5] py-1 px-2 leading-[14px] rounded-full ml-4">-33%</span></h2>
												</div>
												<div className="xl:block hidden">
													<div className="box-shape">
														<button className="object-contain bg-[#0BC4E5] cursor-pointer h-10 shape font-semibold text-black gap-2 px-8"><CartSVG />Comprar</button>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="xl:hidden block pt-4">
										<button className="w-full object-contain bg-[#0BC4E5] cursor-pointer h-10 shape font-semibold text-black gap-2 px-8 "><CartSVG />Comprar</button>
									</div>
								</div>
							</div>
						</div>
						<div className="md:p-8 p-5 backdrop-blur-md clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
							{/* Sobre o produto */}
							<h2 className="md:text-2xl text-xl font-semibold md:mb-6 mb-2">Sobre</h2>
							<p className="md:text-lg text-sm mb-10">Sentido Aranha alerta... Coloque a máscara para mais aventuras eletrizantes de teia enquanto Marvel’s Spider-Man 2 chega ao PC. Desenvolvido pela Insomniac Games em colaboração com a Marvel e otimizado para PC pela Nixxes Software.<span>Ver mais</span></p>

							{/* Requisitos do sistema */}
							<h2 className="md:text-2xl text-xl  font-semibold mb-6">Requisitos do sistema</h2>
							<div className="md:flex md:gap-20">
								<div className="flex-1 xl:mr-20 md:mb-0 mb-6">
									<h4 className="md:text-lg text-md font-semibold uppercase mb-4">Mínimo</h4>
									<ul className="flex flex-col md:gap-3 gap-2">
										<li className="md:text-lg text-sm font-bold">SO: <span className="text-[#0BC4E5] font-semibold">Windows 10/11 (version 1909+)</span></li>
										<li className="md:text-lg text-sm font-bold">Armazenamento: <span className="text-[#0BC4E5] font-semibold">140 GB</span></li>
										<li className="md:text-lg text-sm font-bold">Processador: <span className="text-[#0BC4E5] font-semibold">Intel Core i3-8100 / AMD Ryzen 3 3100</span></li>
										<li className="md:text-lg text-sm font-bold">Memória: <span className="text-[#0BC4E5] font-semibold">16 GB</span></li>
										<li className="md:text-lg text-sm font-bold">Placa de vídeo: <span className="text-[#0BC4E5] font-semibold">NVIDIA GeForce GTX 1650 / AMD Radeon RX 5500 XT</span></li>
									</ul>
								</div>
								<div className="flex-1 xl:mr-20">
									<h4 className="md:text-lg text-md font-semibold uppercase mb-4">Recomendado</h4>
									<ul className="flex flex-col gap-3">
										<li className="md:text-lg text-sm font-bold">SO: <span className="text-[#0BC4E5] font-semibold">Windows 10/11 (version 1909+)</span></li>
										<li className="md:text-lg text-sm font-bold">Armazenamento: <span className="text-[#0BC4E5] font-semibold">140 GB</span></li>
										<li className="md:text-lg text-sm font-bold">Processador: <span className="text-[#0BC4E5] font-semibold">Intel Core i3-8100 / AMD Ryzen 3 3100</span></li>
										<li className="md:text-lg text-sm font-bold">Memória: <span className="text-[#0BC4E5] font-semibold">16 GB</span></li>
										<li className="md:text-lg text-sm font-bold">Placa de vídeo: <span className="text-[#0BC4E5] font-semibold">NVIDIA GeForce GTX 1650 / AMD Radeon RX 5500 XT</span></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="md:p-8 p-5 backdrop-blur-[12.5px] clip-path-element" style={{ background: "rgba(49, 55, 66, 0.80)" }}>
							{/* Sobre o produto */}
							<h2 className="md:text-2xl text-xl font-semibold mb-6">Avaliação</h2>
							<div className="flex items-center justify-center md:my-18 my-10"><p className="md:text-xl text-md opacity-60">Sem avaliações</p></div>
							<textarea type="text" className="transition border border-white/60 focus:border-white/100 w-full resize-y md:h-56 h-30 p-4 font-medium outline-none focus:bg-white/10" placeholder="Envie uma mensagem"/>
							<p className="md:text-lg text-base mt-4 mb-2">Classificação</p>
							<div className="flex gap-2 md:mb-0 mb-4">
								<StarOutlineSVG />
								<StarOutlineSVG />
								<StarOutlineSVG />
								<StarOutlineSVG />
								<StarOutlineSVG />
							</div>
							<div className="box-shape">
								<button className="ml-auto md:w-fit w-full bg-[#0BC4E5] cursor-pointer h-14 shape button-product font-semibold text-black gap-2 px-10">Enviar avaliação</button>

							</div>
						</div>
					</div>
					<div className="lg:block w-full hidden flex-1 flex-col clip-path-element">
						<BuyProduct />
					</div>
				</div>
			</div>
		</>

	);
}
