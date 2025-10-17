import React from 'react';

interface SearchComponentProps {
  onClick?: () => void;
}

const SearchComponent = ({ onClick }: SearchComponentProps) => {
  return (
    <div className="relative flex items-center justify-center cursor-pointer" onClick={onClick}>
      <div className="absolute z-[-1] w-full h-min-screen"></div>
      <div id="poda" className="relative flex items-center justify-center group scale-75">
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[50px] max-w-[240px] rounded-xl blur-[3px]
                        before:absolute before:content-[''] before:z-[-2] before:w-[999px] before:h-[999px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                        before:bg-[conic-gradient(hsl(var(--background)),hsl(var(--accent))_5%,hsl(var(--background))_38%,hsl(var(--background))_50%,hsl(var(--primary))_60%,hsl(var(--background))_87%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-120deg] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[48px] max-w-[238px] rounded-xl blur-[3px]
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),hsl(var(--accent)/0.8),rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,hsl(var(--primary)/0.6),rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[48px] max-w-[238px] rounded-xl blur-[3px]
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),hsl(var(--accent)/0.8),rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,hsl(var(--primary)/0.6),rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
        </div>
        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[48px] max-w-[238px] rounded-xl blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),hsl(var(--accent)/0.8),rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,hsl(var(--primary)/0.6),rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]">
        </div>

        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[46px] max-w-[234px] rounded-lg blur-[2px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0)_0%,hsl(var(--accent)/0.7),rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,hsl(var(--primary)/0.5),rgba(0,0,0,0)_58%)] before:brightness-140
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg] group-focus-within:before:rotate-[443deg] group-focus-within:before:duration-[4000ms]">
        </div>

        <div className="absolute z-[-1] overflow-hidden h-full w-full max-h-[44px] max-w-[230px] rounded-xl blur-[0.5px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                        before:bg-[conic-gradient(hsl(var(--background)),hsl(var(--accent))_5%,hsl(var(--background))_14%,hsl(var(--background))_50%,hsl(var(--primary))_60%,hsl(var(--background))_64%)] before:brightness-130
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms]">
        </div>

        <div id="main" className="relative group pointer-events-none">
          <input 
            placeholder="Pesquisar..." 
            type="text" 
            name="text" 
            readOnly
            className="bg-background border border-border/20 w-[230px] h-[42px] rounded-lg text-foreground px-[45px] text-sm focus:outline-none placeholder-muted-foreground focus:border-accent/50 transition-colors" 
          />
          <div id="input-mask" className="pointer-events-none w-[80px] h-[16px] absolute bg-gradient-to-r from-transparent to-background top-[13px] left-[55px] group-focus-within:hidden"></div>
          <div id="pink-mask" className="pointer-events-none w-[24px] h-[16px] absolute bg-accent top-[8px] left-[4px] blur-2xl opacity-80 transition-all duration-2000 group-hover:opacity-0"></div>
          <div className="absolute h-[32px] w-[32px] overflow-hidden top-[5px] right-[5px] rounded-lg
                          before:absolute before:content-[''] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90
                          before:bg-[conic-gradient(rgba(0,0,0,0),hsl(var(--muted)),rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,hsl(var(--muted)),rgba(0,0,0,0)_100%)]
                          before:brightness-135 before:animate-spin-slow">
          </div>
          <div id="filter-icon" className="absolute top-1.5 right-1.5 flex items-center justify-center z-[2] max-h-8 max-w-[30px] h-full w-full [isolation:isolate] overflow-hidden rounded-lg bg-gradient-to-b from-muted via-background to-muted border border-border/30">
            <svg preserveAspectRatio="none" height="20" width="20" viewBox="4.8 4.56 14.832 15.408" fill="none">
              <path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70"></path>
            </svg>
          </div>
          <div id="search-icon" className="absolute left-4 top-[11px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" height="20" fill="none" className="feather feather-search">
              <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
              <line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22"></line>
              <defs>
                <linearGradient gradientTransform="rotate(50)" id="search">
                  <stop stopColor="hsl(var(--accent))" offset="0%"></stop>
                  <stop stopColor="hsl(var(--muted-foreground))" offset="50%"></stop>
                </linearGradient>
                <linearGradient id="searchl">
                  <stop stopColor="hsl(var(--muted-foreground))" offset="0%"></stop>
                  <stop stopColor="hsl(var(--foreground)/0.6)" offset="50%"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;