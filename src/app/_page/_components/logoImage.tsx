/* eslint-disable @next/next/no-img-element */

const LogoImage = () => (
  <div className="relative order-2 lg:order-1">
    <div className="absolute left-5 top-0 h-full w-full animate-wiggle-more rounded-full border-b-[30px] border-l-[3px] border-r-[20px] border-t-[3px] border-stone-900 blur-md animate-duration-[50000ms]"></div>
    <div className="relative h-[175px] w-[175px] sm:h-[215px] sm:w-[215px] md:ml-8 md:h-[250px] md:w-[250px]">
      <img height={250} width={250} alt="" src="logo-250x250.png" />
    </div>
  </div>
)

export { LogoImage }
