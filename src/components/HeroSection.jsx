

const HeroSection = () => {
    return (

        <div className="mt-12">
            <h2 className="text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-violet-500 ">About</h2>
            <section className=" flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
                <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                    <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
                        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">Take your business to the next level.</h1>
                        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                            Track and improve the growth of your business. Send the right customers your way with this tool
                        </p>
                        <div className="flex space-x-4 items-center">
                            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
                                Get Started
                            </button>
                            {/* <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
                            Learn More
                        </button> */}
                            <div className=" inline-flex items-center justify-center group relative mx-auto my-14 h-10 w-max cursor-pointer">
                                <button className="rounded-md border border-[#0EA5E9] bg-slate-900 px-3 py-2 text-[#0EA5E9]">Hover on me</button>
                                {/* Hover Text */}
                                <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                                    <p className="h-fit shadow-[0px_0px_10px_0px_#0EA5E9] rounded-md bg-[#0EA5E9] px-3 py-2 text-white">I am Dipongkar Roy B.sc in CSE</p>
                                    <span className="absolute shadow-[0px_0px_10px_0px_#0EA5E9] -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9]"></span>
                                </div>
                                {/* Hover button */}
                            </div>
                        </div>


                    </div>
                    <div className="relative mt-5">
                        <img src="https://i.ibb.co/Pz2MW6t/xx-1-removebg-preview.png" className="relative md:h-[600px]  sm:h-[550px] h-[450px]  w-[500px] border-rose-300 border-4 rounded-t-full object-cover" alt="hero navigate ui" />
                    </div>
                </div>
            </section>
        </div>

    );
};

export default HeroSection;



