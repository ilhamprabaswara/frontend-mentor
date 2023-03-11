import Head from "next/head";

export default function ProductCard() {
    return (
        <>
            <Head>
                <title>Product Card</title>
            </Head>
            <div className="bg-[hsl(30,38%,92%)] h-screen w-screen flex justify-center items-center">
                <div className="cards w-[343px] h-[611px] bg-[hsl(0,0%,100%)] rounded-[10px] overflow-hidden md:flex md:h-[450px] md:w-[600px]">
                    <div className="card1 md:w-[300px]">
                        <img className="md:hidden" src="/images/ProductCard/image-product-mobile.jpg" />
                        <img className="hidden md:block " src="/images/ProductCard/image-product-desktop.jpg"/>
                    </div>
                    <div className="card2 p-[24px] md:w-[300px] md:p-[32px]">
                        <p className="mb-[12px] font-[Montserrat] text-[12px] tracking-[0.42em] text-[hsl(212,21%,14%)] md:mb-[20px]">PERFUME</p>
                        <h1 className="mb-[16px] font-[Fraunces] text-[hsl(212,21%,14%)] text-[32px] leading-[32px] md:mb-[24px]">Gabrielle Essence Eau De Parfum</h1>
                        <p className="mb-[15px] font-[Montserrat] text-[hsl(228,12%,48%)] text-[14px] leading-[23px] md:mb-[26px]">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                        <div className="price flex items-center gap-[19px] mb-[15px] font-[Fraunces]">
                            <p className="text-[32px] text-[hsl(158,36%,37%)]">$149.99</p>
                            <strike className="font-[Montserrat] text-[14px] text-[hsl(212,21%,14%)]">$169.99</strike>
                        </div>
                        <button className="flex gap-[11px] bg-[hsl(158,36%,37%)] justify-center items-center w-full py-[13px] rounded-[8px]">
                            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z" fill="#FFF" /></svg>
                            <p className="font-[Montserrat] font-bold text-[14px] text-[hsl(0,0%,100%)]">
                                Add to Cart
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}