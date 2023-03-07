export default function ArticlePreview() {
    return (
        <div className="h-screen bg-[hsl(210,46%,95%)]">
            <main className="pt-[74px] md:pt-[260px]">
                <div className="w-[327px] rounded-[10px] overflow-clip md:flex md:w-[730px] mx-auto">
                    <div className="h-[200px] w-[327px] md:h-[280px] md:w-[285px]">
                        <img className="h-full w-full" src="/images/ArticlePreview/drawers.jpg" ></img>
                    </div>
                    <div className="bg-[hsl(0,0%,100%)] pt-[40px] px-[32px] pb-[20px] md:pr-[40px] md:py-[30px] md:w-[445px] md:h-[280px] md:box-padding">
                        <h1 className="text-[hsl(217,19%,35%)] font-bold text-[16px] leading-[24px] tracking-[0.01em] w-[263px] mb-[12px] md:w-full md:text-[20px] md:leading-[28px]">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
                        <p className="text-[hsl(214,17%,51%)] mb-[32px] md:text-[13px]">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-[16px] items-center">
                                <img className="rounded-full h-[40px] w-[40px]" src="/images/ArticlePreview/avatar-michelle.jpg" />
                                <div>
                                    <p>Michelle Appleton</p>
                                    <p className="text-[hsl(212,23%,69%)]">28 Jun 2020</p>
                                </div>
                            </div>
                            <div className="bg-[hsl(210,46%,95%)] p-[15px] rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="hsl(214, 17%, 51%)" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}