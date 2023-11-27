const LogoImage = () => (
  <div className="relative order-2 lg:order-1">
    <div className="absolute left-0 top-0 min-h-[175px] min-w-[175px] animate-wiggle-more rounded-full border-b-[30px] border-l-[3px] border-r-[20px] border-t-[3px] border-slate-100 bg-slate-100 blur-md animate-duration-[500ms] sm:min-h-[215px] sm:min-w-[215px] md:left-8  md:min-h-[250px] md:min-w-[250px]"></div>
    <div className="absolute bottom-0 left-0 z-10 h-[200px] w-[176px] animate-spin animate-duration-[120s] sm:h-[220px] sm:w-[192px] md:h-[270px] md:w-[250px] lg:h-[300px] lg:w-[256px]">
      <div className="absolute left-0 top-0 h-2 w-2 animate-bounce rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 animate-duration-[180s]"></div>
    </div>
    <div className="absolute bottom-0 left-2 z-10 h-[200px] w-[140px] animate-spin animate-duration-[60s] sm:h-[220px] sm:w-[144px] md:h-[240px] md:w-[240px] lg:h-[300px] lg:w-[176px]">
      <div className="absolute bottom-0 left-0 h-6 w-6 animate-spin rounded-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-cyan-500  animate-duration-[180s]"></div>
    </div>

    <div className="relative h-[175px] w-[175px] opacity-95 sm:h-[215px] sm:w-[215px] md:ml-8 md:h-[250px] md:w-[250px]">
      <img height={250} width={250} alt="" src="logo-250x250.png" />
    </div>
  </div>
)

export { LogoImage }
