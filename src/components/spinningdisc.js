const SpinningDisc = ({image}) => {
    return <div className="z-10">
  
              <div className="relative w-full flex justify-center items-center">
                <div className="rounded-full overflow-hidden h-4 w-4 z-20 absolute bg-black" />
                <div className="rounded-full overflow-hidden h-12 w-12 z-10 absolute bg-white/50 border border-2 border-gray-700" />
                <div className="rounded-full overflow-hidden h-48 w-48">
                  <img src={image}
                    class="rotating" />
                </div>
                
              </div>
  
            </div>
  }

export default SpinningDisc