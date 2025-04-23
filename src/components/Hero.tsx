
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

// Checklist items for right side
const checklist = [
  { text: "Buyer and seller agree on terms", checked: true },
  { text: "Buyer pays AstroEscrow", checked: true },
  { text: "Seller transfers the digital asset", checked: false },
  { text: "Buyer approves delivery", checked: false },
  { text: "AstroEscrow releases funds", checked: false },
];

export function Hero() {
  // Selling type for the select
  const [sellingType, setSellingType] = useState("Digital Assets");
  const [amount, setAmount] = useState("500");

  return (
    <section 
      className="relative w-full overflow-hidden min-h-[80vh] flex items-center justify-center px-4 sm:px-8 py-16 md:py-28 bg-gradient-to-bl from-[#184076] via-[#2B72B8] to-[#584EFF]"
      style={{
        background: "radial-gradient(circle at 60% 40%, #205BAC 45%, #152544 100%)",
      }}
    >
      {/* Large purple accent circle, like .com logo */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-0">
        <div className="relative mr-10">
          <div style={{
            width: 230,
            height: 230,
            background: "radial-gradient(circle, #FAE67B 55%, #FBE873 90%)",
            borderRadius: "100%",
            boxShadow: "0 10px 68px 0 rgba(246,213,86,0.26)",
            opacity: 0.95,
          }}>
          </div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono font-black text-[56px] text-[#DAB02C] select-none"
            style={{
              letterSpacing: "-2px",
              textShadow: "0 3px 15px #fceb8b90,0 1px 3px #d3af38"
            }}
          >
            .com
          </div>
        </div>
      </div>
      {/* HERO CONTENT */}
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between relative z-10">
        {/* Left - Main Slogan section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heming font-extrabold leading-snug md:leading-tight tracking-tight text-white glow-text liquid-text">
            Never buy or sell online <br className="hidden sm:inline" /> without using <span className="text-[#FBE873]">AstroEscrow</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl font-inter text-white/90 mt-4 mb-7 md:mb-12 font-medium drop-shadow-sm">
            With AstroEscrow you can buy and sell anything digital safely, without the risk of chargebacks. Truly secure, transparent payments for the future of online trade.
          </p>
          <div className="w-full max-w-lg flex gap-3 flex-col md:flex-row items-center mb-7">
            <div className="flex rounded-md shadow overflow-hidden border-[1.5px] border-white bg-white/80 min-w-[210px] font-inter">
              <select
                className="px-3 py-2 focus:outline-none text-gray-800 text-base font-semibold bg-transparent"
                value={sellingType}
                onChange={(e) => setSellingType(e.target.value)}
                aria-label="Select Selling Type"
              >
                <option>Digital Assets</option>
                <option>Domains</option>
                <option>Services</option>
                <option>Websites</option>
                <option>NFTs</option>
              </select>
              <input
                type="text"
                className="px-3 py-2 border-l border-gray-300 focus:outline-none bg-transparent text-base font-medium text-gray-700 grow"
                placeholder="Asset name"
                aria-label="Asset Name"
              />
            </div>
            <div className="flex rounded-md shadow overflow-hidden border-[1.5px] border-white bg-white/80 min-w-[130px] max-w-[150px] font-inter">
              <span className="py-2 px-2 text-gray-700 font-semibold bg-transparent">$</span>
              <input
                type="number"
                className="px-1 py-2 w-20 focus:outline-none text-gray-900 font-medium bg-transparent"
                value={amount}
                min={20}
                max={1000000}
                onChange={e => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
                aria-label="Amount"
              />
            </div>
            <Button
              className="flex-grow md:w-auto whitespace-nowrap rounded-md px-5 py-3 font-extrabold text-lg text-white bg-gradient-to-tr from-[#6C44D7] via-[#A259FF] to-[#9b87f5] shadow-lg hover-slide-right hover:bg-[#8E4DFB] transition-all duration-300"
              size="sm"
              asChild
            >
              <Link to="/signup" className="flex items-center gap-1">
                Get started now <ArrowRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Right - Checklist column */}
        <div className="hidden md:flex flex-col items-center justify-center md:w-1/2 relative z-2">
          <div className="max-w-sm w-full bg-white/10 px-8 py-7 rounded-2xl shadow-lg border border-white/15 ml-16 backdrop-blur-md">
            <h4 className="font-heming font-semibold text-xl text-white mb-4 text-left">
              Buy or sell digital assets securely
            </h4>
            <ul className="space-y-3 mt-3">
              {checklist.map((item, idx) => (
                <li key={idx} className={`flex items-center gap-2 text-base font-inter font-[500] ${item.checked ? "text-[#A259FF]" : "text-white/80"}`}>
                  <span className={`w-[22px] h-[22px] flex items-center justify-center rounded-full border-2 ${item.checked ? "border-[#A259FF] bg-[#a259ff24]" : "border-white/40"}`}>
                    {item.checked ? <Check size={18} className="text-[#A259FF]" /> : <span className="block w-2 h-2 bg-white/60 rounded-full" />}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-white/60">
              Used by creators to trade everything from domains to websites & NFTs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
