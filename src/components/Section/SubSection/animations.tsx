const AnimationBacklightGray900 = () => (
  <>
    <div className="absolute left-0 top-0 -z-10 h-24 w-64 animate-spin animate-duration-[120s]">
      <div className="absolute inset-y-0 h-4 w-4 animate-bounce rounded-full bg-gray-900 blur-sm animate-duration-[80s]"></div>
    </div>
    <div className="absolute bottom-0 left-0 -z-10 h-24 w-24 animate-spin animate-duration-[180s]">
      <div className="absolute left-0 top-0 h-8 w-8 animate-bounce rounded-full bg-slate-600 blur-sm animate-duration-[80s]"></div>
    </div>
  </>
)

const AnimationBacklightRose400 = () => (
  <>
    <div className="w-22 w-26 absolute left-0 top-0 -z-10 h-24 animate-spin animate-duration-[180s]">
      <div className="absolute left-0 top-0 h-4 w-4 animate-bounce rounded-full bg-rose-400 blur-sm animate-duration-[80s]"></div>
    </div>
    <div className="w-22 absolute left-0 top-0 -z-10 h-16 animate-spin animate-duration-[180s]">
      <div className="absolute left-0 top-0 h-8 w-8 animate-bounce rounded-full bg-rose-400 blur-sm animate-duration-[80s]"></div>
    </div>
  </>
)
const AnimationBacklightGreen700 = () => (
  <>
    <div className="absolute left-0 top-0 -z-10 h-16 w-16 animate-spin animate-duration-[120s]">
      <div className="absolute bottom-0 left-0 h-6 w-6 animate-bounce rounded-full bg-green-700 blur-sm animate-duration-[80s]"></div>
    </div>
    <div className="absolute bottom-0 left-0 -z-10 h-16 w-16 animate-spin animate-duration-[180s]">
      <div className="absolute bottom-0 h-4 w-4 animate-bounce rounded-full bg-green-700 blur-sm animate-duration-[80s]"></div>
    </div>
  </>
)

export {
  AnimationBacklightGray900,
  AnimationBacklightRose400,
  AnimationBacklightGreen700,
}
