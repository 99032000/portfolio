import Header from "@/src/module/Header/Header";
import LiquidEther from "@/src/components/Background/Background";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full bg-white dark:bg-black relative">
        <Header />
        <div className="w-full h-screen absolute">
          <LiquidEther
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={32}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.8}
            takeoverDuration={0.25}
            autoResumeDelay={500}
            autoRampDuration={0.6}
          />
        </div>
        <section className="w-full h-screen flex items-center justify-center">
          <h1 className="text-4xl text-white mix-blend-lighten">Hello</h1>
        </section>{" "}
        <section className="w-full h-screen flex items-center justify-center">
          <h1 className="text-4xl text-white">Hello</h1>
        </section>
      </main>
    </div>
  );
}
