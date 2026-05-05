import Image from "next/image";


const navItems = ["Home", "Arowana", "Care Guide", "Contact"];

const fishCards = [
  {
    src: "/superred-arowana-removebg-preview.png",
    alt: "Super red arowana",
    name: "Super Red",
  },
  {
    src: "/rtg-arowana-removebg-preview.png",
    alt: "RTG arowana",
    name: "RTG Arowana",
  },
  {
    src: "/gold-arowana-removebg-preview.png",
    alt: "Gold arowana",
    name: "Gold Arowana",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 ">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src="/background.png" // ใส่ชื่อไฟล์ภาพพื้นหลังของคุณ
          alt="Background"
          fill
          className="object-cover" // ทำให้ภาพคลุมพื้นที่ทั้งหมดโดยไม่เสียสัดส่วน
          priority
        />
        {/* เพิ่ม Overlay เพื่อให้ตัวอักษรอ่านง่ายขึ้น */}
        <div className="absolute inset-0 bg-slate-950/40" /> 
      </div>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="relative mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white">
              A
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold">Arowana House</span>
              <span className="mt-1 text-xs font-medium uppercase text-slate-500">
                Premium fish store
              </span>
              
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-slate-600 transition hover:text-amber-600"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="hidden h-11 items-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-amber-600 md:flex"
          >
            Shop now
          </a>

          <details className="group md:hidden">
            <summary
              aria-label="Open navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white [&::-webkit-details-marker]:hidden"
            >
              <span className="h-0.5 w-5 rounded-full bg-slate-950 transition group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 w-5 rounded-full bg-slate-950 transition group-open:opacity-0" />
              <span className="h-0.5 w-5 rounded-full bg-slate-950 transition group-open:-translate-y-2 group-open:-rotate-45" />
            </summary>
            <div className="absolute left-5 right-5 top-24 rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-amber-600"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  className="mt-2 flex h-11 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-amber-600"
                >
                  Shop now
                </a>
              </div>
            </div>
          </details>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:py-20">
        <section className="flex flex-1 flex-col gap-6">
          <p className="text-sm font-bold uppercase text-amber-600">
            Super red / RTG / Gold Arowana
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            จำหน่ายปลาอโรวาน่าคัดเกรด สำหรับตู้เลี้ยงระดับพรีเมียม
          </h1>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            เลือกสายพันธุ์สวย สุขภาพดี พร้อมคำแนะนำการดูแลก่อนและหลังรับปลา
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-bold text-white transition hover:bg-amber-600"
            >
              ดูปลาแนะนำ
            </a>
            <a
              href="#"
              className="flex h-12 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-bold text-slate-800 transition hover:border-amber-500 hover:text-amber-600"
            >
              ติดต่อร้าน
            </a>
          </div>
        </section>

        <section className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {fishCards.map((fish) => (
            <article
              key={fish.name}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div>
                <h2 className="text-lg font-bold">{fish.name}</h2>
                <p className="mt-1 text-sm text-slate-500">พร้อมจัดส่ง</p>
              </div>
              <Image
                src={fish.src}
                alt={fish.alt}
                width={150}
                height={80}
                className="h-20 w-36 object-contain"
                priority
              />
            </article>
          ))}
        </section>
      </main>
      <main>
        <section className="flex w-full snap-x snap-mandatory overflow-x-auto gap-5 pb-6 lg:grid lg:grid-cols-1 lg:overflow-visible">
          {fishCards.map((fish) => (
            <article
              key={fish.name}
              className="min-w-[85%] snap-center flex-shrink-0 flex items-center justify-between rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:min-w-[300px] lg:min-w-full"
            >
              
                <Image
                  src={fish.src}
                  alt={fish.alt}
                  width={150}
                  height={80}
                  className="h-20 w-36 "
                />
            </article>
          ))}
        </section>
        
      </main>
    </div>
  );
}
