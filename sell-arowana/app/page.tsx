import Image from "next/image";

const navItems = ["Home", "Arowana", "Care Guide", "Contact"];

const fishCards = [
  {
    src: "/superred-arowana-removebg-preview.png",
    alt: "Super red arowana",
    name: "Super Red",
    detail: "สีแดงเข้ม ทรงสง่า เหมาะกับตู้โชว์",
  },
  {
    src: "/rtg-arowana-removebg-preview.png",
    alt: "RTG arowana",
    name: "RTG Arowana",
    detail: "เกล็ดทองไล่ระดับ แข็งแรง เลี้ยงง่าย",
  },
  {
    src: "/gold-arowana-removebg-preview.png",
    alt: "Gold arowana",
    name: "Gold Arowana",
    detail: "ประกายทองชัด ฟอร์มสวย คัดเกรด",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/55" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/25 backdrop-blur-md">
        <div className="relative mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white">
              A
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold">Arowana House</span>
              <span className="mt-1 text-xs font-medium uppercase text-white/60">
                Premium fish store
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-white/75 transition hover:text-amber-300"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="hidden h-11 items-center rounded-full bg-amber-500 px-5 text-sm font-semibold text-white transition hover:bg-amber-400 md:flex"
          >
            Shop now
          </a>

          <details className="group md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur [&::-webkit-details-marker]:hidden"
            >
              <span className="h-0.5 w-5 rounded-full bg-white transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 w-5 rounded-full bg-white transition group-open:opacity-0" />
              <span className="h-0.5 w-5 rounded-full bg-white transition group-open:-translate-y-2 group-open:-rotate-45" />
            </summary>
            <div className="absolute left-5 right-5 top-24 rounded-lg border border-white/10 bg-slate-950/95 p-4 shadow-lg">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="rounded-md px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-amber-300"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  className="mt-2 flex h-11 items-center justify-center rounded-full bg-amber-500 px-5 text-sm font-semibold text-white transition hover:bg-amber-400"
                >
                  Shop now
                </a>
              </div>
            </div>
          </details>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-14 sm:px-8 lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:items-center lg:py-20">
        <section className="flex flex-1 flex-col gap-6">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">
            Super red / RTG / Gold Arowana
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            จำหน่ายปลาอโรวาน่าคัดเกรด สำหรับตู้เลี้ยงระดับพรีเมียม
          </h1>
          <p className="max-w-xl text-lg leading-8 text-white/75">
            เลือกสายพันธุ์สวย สุขภาพดี พร้อมคำแนะนำการดูแลก่อนและหลังรับปลา
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#featured-arowana"
              className="flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-bold text-white transition hover:bg-amber-400"
            >
              ดูปลาแนะนำ
            </a>
            <a
              href="#"
              className="flex h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-bold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              ติดต่อร้าน
            </a>
          </div>
        </section>

        <section
          
          className="flex flex-1 flex-col gap-5"
          
        >
          <div className=" relative min-h-[280px] overflow-hidden rounded-lg   backdrop-blur-sm sm:min-h-[360px]">
            {fishCards.map((fish) => (
              <article
                key={fish.name}
                
               
              >
                <Image
                  src={fish.src}
                  alt={fish.alt}
                  width={520}
                  height={280}
                  className="h-44 w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] sm:h-64"
                  
                />
                <div className= "flex h-12 items-center justify-center gap-5 p-6 ">
                  <h2 className="text-2xl font-bold text-white">{fish.name}</h2>
                  <p className="mt-2 text-sm text-white/70">{fish.detail}</p>
                </div>
              </article>
            ))}
          </div>

          
        </section>
      </main>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-14 sm:px-8 ">
        <div className="arowana-slideshow relative min-h-[280px] overflow-hidden rounded-lg border border-white/15 bg-black/25 shadow-2xl backdrop-blur-sm sm:min-h-[360px]">
            {fishCards.map((fish, index) => (
              <article
                key={fish.name}
                className="arowana-slide absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center"
                style={{ animationDelay: `${index * 4}s` }}
              >
                <Image
                  src={fish.src}
                  alt={fish.alt}
                  width={520}
                  height={280}
                  className="h-44 w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] sm:h-64"
                  priority={index === 0}
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">{fish.name}</h2>
                  <p className="mt-2 text-sm text-white/70">{fish.detail}</p>
                </div>
              </article>
            ))}
          </div>
      </main>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-14 sm:px-8 lg:min-h-[calc(100vh-5rem)] lg:flex-row lg:items-center lg:py-20">
        <section  className=" flex flex-1 flex-col gap-5"
        >
          <div className=" relative min-h-[280px] overflow-hidden rounded-lg   backdrop-blur-sm sm:min-h-[360px] ">
            <img src="arowana-shop.png" width="520" height="280" alt="หน้าร้านขายปลาอโรวาน่า"  />
          </div>
        </section>
        <section className="flex flex-1 flex-col gap-5  ">
          <h1 className="text-sm font-bold uppercase tracking-[0.18em] text-amber-300 ">
            ศาสตร์แห่งความมั่งคั่ง: บุก "The Golden Scales" อาณาจักรปลามังกรเกรดพรีเมียม
          </h1>
          <p>
            ในแวดวงผู้เลี้ยงปลาสวยงาม คงไม่มีใครปฏิเสธได้ว่า "ปลาอโรวาน่า" (Arowana) หรือที่รู้จักกันในนาม "ปลามังกร" คือสุดยอดปรารถนาของเหล่านักสะสม ไม่ใช่เพียงเพราะท่วงท่าการว่ายที่สง่างามดุจสัตว์ในตำนานเท่านั้น แต่ยังมีความเชื่อเรื่องการเสริมฮวงจุ้ย โชคลาภ และบารมีให้แก่ผู้ครอบครองอีกด้วย วันนี้เราจะพาทุกท่านไปทำความรู้จักกับร้านจำหน่ายปลามังกรระดับแถวหน้าของเมืองไทย ที่เหล่านักเลี้ยงปลาต้องหาโอกาสไปเยือนสักครั้ง
          </p>
        </section>
      </main>

    </div>
  );
}
