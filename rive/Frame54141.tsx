import svgPaths from "./svg-l4nkj4hke4";
import imgDigitalVoidBackgroundV25 from "figma:asset/8c272856b8a2e7460c4ccf82ed7ff0017e28b446.png";
import imgChatGptImageApr22026013345Pm1 from "figma:asset/f1f1e1ac9cf3e17f1a84e1e6ac365238b86e927e.png";
import imgPath2 from "figma:asset/92d9a8b3af19b30dc4b87c7b3e44c723bdb7c7fd.png";
import imgScreenshot20260408At50033Pm1 from "figma:asset/a0234e961c928c2130d20fa5319cb2c63edd0c54.png";

function Logo() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[68px] left-1/2 top-[calc(50%-0.38px)] w-[308px]" data-name="logo (2) 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 68">
        <g id="logo (2) 1">
          <path d={svgPaths.p3698b900} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.p1f95a700} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p30dbd880} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p248b8900} fill="var(--fill-0, #33E4FF)" id="Vector_4" />
          <path d={svgPaths.pd4bab30} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1aa62e00} fill="var(--fill-0, #33E4FF)" id="Vector_6" />
          <path d={svgPaths.pbee580} fill="var(--fill-0, #33E4FF)" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.p1d499b00} fill="var(--fill-0, #F5F5F5)" fillRule="evenodd" id="Vector_8" />
          <path d={svgPaths.p27af5d80} fill="var(--fill-0, #33E4FF)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Image() {
  return (
    <div className="overflow-clip relative self-stretch shrink-0 w-[514px]" data-name="image5">
      <div className="absolute inset-[0_-5.25%_-0.03%_-13.81%]" data-name="digital_void_background_v2 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDigitalVoidBackgroundV25} />
      </div>
      <Logo />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00d4f5] text-[48px] tracking-[-0.48px] w-[495px]">
        <p className="leading-[60px]">Autonomous Prediction Markets</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header">
      <Heading />
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0bfc4] text-[28px] tracking-[-0.28px] w-full">
        <p className="leading-[normal]">A fully autonomous, AI-powered platform designed for infinite scale.</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[48px] py-[319px] relative size-full">
          <Header />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex h-[854.75px] items-start relative shrink-0 w-full">
      <Image />
      <Frame26 />
    </div>
  );
}

function Slide() {
  return (
    <div className="bg-[#19191f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="slide1">
      <Frame27 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.75px] relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00d4f5] text-[48px] text-center tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-[60px]">What we built</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[0] relative shrink-0 text-[#dbdbdc] text-[28px] tracking-[-0.28px] w-full">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">The Core Innovation:</p>
      </div>
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full">
        <p className="leading-[normal]">We eliminate the operational bottlenecks in the prediction market lifecycle through three pillars:</p>
      </div>
    </div>
  );
}

function Corner() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner1() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner2() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner3() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(0,47,69,0.36)] flex-[1_0_0] min-h-px min-w-px relative" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[24px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[28px] text-ellipsis text-white tracking-[-0.28px] whitespace-nowrap">
            <ol start="1">
              <li className="ms-[42px]">
                <span className="leading-[40px]">User-generated markets</span>
              </li>
            </ol>
          </div>
          <Corner />
          <Corner1 />
          <Corner2 />
          <Corner3 />
        </div>
      </div>
    </div>
  );
}

function Corner4() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner5() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner6() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner7() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType1() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(0,47,69,0.36)] flex-[1_0_0] min-h-px min-w-px relative" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[24px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[28px] text-ellipsis text-white tracking-[-0.28px] whitespace-nowrap">
            <ol start="2">
              <li className="ms-[42px]">
                <span className="leading-[40px]">{`AI automation & resolution`}</span>
              </li>
            </ol>
          </div>
          <Corner4 />
          <Corner5 />
          <Corner6 />
          <Corner7 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <MultiButtonType />
      <MultiButtonType1 />
    </div>
  );
}

function Corner8() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner9() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner10() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner11() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType2() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[24px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[28px] text-ellipsis text-white tracking-[-0.28px]">
            <ol start="3">
              <li className="ms-[42px]">
                <span className="leading-[40px]">Automated, crowd-funded market liquidity</span>
              </li>
            </ol>
          </div>
          <Corner8 />
          <Corner9 />
          <Corner10 />
          <Corner11 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <Frame33 />
      <MultiButtonType2 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <Frame32 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame29 />
    </div>
  );
}

function Header1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Header">
      <div className="content-stretch flex flex-col gap-[24px] items-start py-[80px] relative size-full">
        <Heading1 />
        <Frame30 />
        <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#21c082] text-[20px] text-center tracking-[-0.2px] w-full">
          <p className="leading-[normal]">The entire pipeline — from market creation to final payout — runs autonomously, without centralized intervention.</p>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="h-[850.75px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[72px] relative size-full">
        <Header1 />
      </div>
    </div>
  );
}

function Slide1() {
  return (
    <div className="bg-[#19191f] content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="slide2">
      <Frame28 />
      <div className="-translate-y-1/2 absolute right-[92px] size-[240px] top-[calc(50%-233.38px)]" data-name="ChatGPT Image Apr 2, 2026, 01_33_45 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-25.94%] max-w-none top-[0.14%] w-[150%]" src={imgChatGptImageApr22026013345Pm1} />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold gap-[16px] items-center justify-center leading-[0] left-[157.5px] pb-[0.75px] text-center top-[210px] w-[405px]" data-name="Heading 1">
      <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-white tracking-[-0.32px] w-full">
        <p className="leading-[40px]">How It Works:</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#00d4f5] text-[42px] tracking-[-0.42px] w-full">
        <p className="leading-[60px]">The Autonomous Lifecycle</p>
      </div>
    </div>
  );
}

function Corner12() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner13() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner14() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner15() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType3() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[32px]">PAY</p>
          </div>
          <Corner12 />
          <Corner13 />
          <Corner14 />
          <Corner15 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">Winners redeem payouts, fees are distributed, and capital is recycled.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-130.5px] top-[94px] w-[304px]">
      <MultiButtonType3 />
      <Background />
    </div>
  );
}

function Corner16() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner17() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner18() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner19() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType4() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[32px]">DISPUTE</p>
          </div>
          <Corner16 />
          <Corner17 />
          <Corner18 />
          <Corner19 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">Escalating dispute mechanism opens with economic incentives.</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-181.5px] top-[258px] w-[294px]">
      <MultiButtonType4 />
      <Background1 />
    </div>
  );
}

function Corner20() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner21() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner22() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner23() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType5() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">RESOVLE</p>
          </div>
          <Corner20 />
          <Corner21 />
          <Corner22 />
          <Corner23 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">AI determines the outcome based on cited sources.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-76.5px] top-[420px] w-[234px]">
      <MultiButtonType5 />
      <Background2 />
    </div>
  );
}

function Corner24() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner25() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner26() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner27() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType6() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">TRADE</p>
          </div>
          <Corner24 />
          <Corner25 />
          <Corner26 />
          <Corner27 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">CLOB trading begins (YES + NO = $1.00); bots provide constant liquidity.</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[196.5px] top-[520px] w-[334px]">
      <MultiButtonType6 />
      <Background3 />
    </div>
  );
}

function Corner28() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner29() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner30() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner31() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType7() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">LIQUIDITY</p>
          </div>
          <Corner28 />
          <Corner29 />
          <Corner30 />
          <Corner31 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">{`The bankroll pool auto-funds the market's liquidity.`}</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[568.5px] top-[406px] w-[244px]">
      <MultiButtonType7 />
      <Background4 />
    </div>
  );
}

function Corner32() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner33() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner34() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner35() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType8() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">FUND</p>
          </div>
          <Corner32 />
          <Corner33 />
          <Corner34 />
          <Corner35 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">The crowd joins the bankroll (softcap: $100).</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[607.5px] top-[226px] w-[244px]">
      <MultiButtonType8 />
      <Background5 />
    </div>
  );
}

function Corner36() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner37() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner38() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner39() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType9() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">FILTER</p>
          </div>
          <Corner36 />
          <Corner37 />
          <Corner38 />
          <Corner39 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">AI reviews the proposed market to ensure quality and rule enforcement.</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[542.5px] top-[42px] w-[244px]">
      <MultiButtonType9 />
      <Background6 />
    </div>
  );
}

function Corner40() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner41() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner42() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner43() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType10() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">MARKET</p>
          </div>
          <Corner40 />
          <Corner41 />
          <Corner42 />
          <Corner43 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">User creates a question and invests an initial seed ($1 – $100).</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[212px] top-[-20px] w-[284px]">
      <MultiButtonType10 />
      <Background7 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[623px] relative shrink-0 w-[707px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[578px] top-[calc(50%+0.5px)]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 578 578">
          <circle cx="289" cy="289" id="Ellipse 5" r="277.5" stroke="var(--stroke-0, #08343F)" strokeWidth="23" />
        </svg>
      </div>
      <Heading2 />
      <Frame36 />
      <Frame37 />
      <Frame38 />
      <Frame39 />
      <Frame40 />
      <Frame41 />
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Header2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Header">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center py-[48px] relative size-full">
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[850.75px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[72px] relative size-full">
        <Header2 />
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="bg-[#19191f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="slide3">
      <Frame34 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00d4f5] text-[42px] text-center tracking-[-0.42px] whitespace-nowrap">
        <p className="leading-[60px]">Core Trading Engine</p>
      </div>
    </div>
  );
}

function Corner44() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner45() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner46() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner47() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType11() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[24px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">Technical Infrastructure</p>
          </div>
          <Corner44 />
          <Corner45 />
          <Corner46 />
          <Corner47 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Matching:</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` Central Limit Order Book (CLOB) for`}</span>
            {` `}
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">institutional-grade matching.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Pricing:</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` Binary outcomes where YES + NO always sum`}</span>
            {` `}
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">to $1.00.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Order Mirroring:</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` Single unified book (e.g., BUY YES @`}</span>
            {` `}
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">40¢ = SELL NO @ 60¢).</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Settlement:</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` USDT on-chain.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[14px] relative w-full">
          <Container9 />
          <Container10 />
          <Container11 />
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0">
      <MultiButtonType11 />
      <Background8 />
    </div>
  );
}

function Corner48() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner49() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner50() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner51() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType12() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[24px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">Fee Structure</p>
          </div>
          <Corner48 />
          <Corner49 />
          <Corner50 />
          <Corner51 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Taker Fee:</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` 0.2%`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Maker Fee:</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` $0`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Redemption Fee:</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` 2% on winning payouts.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[14px] relative size-full">
          <Container13 />
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0">
      <MultiButtonType12 />
      <Background9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="gap-x-[30px] gap-y-[30px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-full" data-name="Container">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Section() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start py-[120px] relative size-full">
        <Heading3 />
        <Container8 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="h-[850.75px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[72px] relative size-full">
        <Section />
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="bg-[#19191f] content-stretch flex flex-col gap-[56px] items-start overflow-clip relative shrink-0 w-full" data-name="slide4">
      <Frame44 />
      <div className="-translate-y-1/2 absolute right-[72px] size-[309px] top-[calc(50%-218.88px)]" data-name="ChatGPT Image Apr 2, 2026, 01_33_45 PM 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-25.94%] max-w-none top-[0.14%] w-[150%]" src={imgChatGptImageApr22026013345Pm1} />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="path-2">
        <img alt="" className="absolute block max-w-none size-full" height="48" src={imgPath2} width="48" />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[77px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <Frame />
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] max-h-[88px] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[18px] text-ellipsis tracking-[-0.18px]">
        <p className="leading-[24px]">Which country will champion FIFA World Cup 2026?</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] w-[127.84px]">
        <p className="leading-[16px]">Bankroll Progress</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#858fe5] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">$45,000 / $50,000</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function BatteryStyleProgressBar() {
  return (
    <div className="bg-[#0b0e11] h-[24px] relative shrink-0 w-full" data-name="Battery Style Progress Bar">
      <div aria-hidden="true" className="absolute border border-[rgba(60,74,66,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[2px] items-start p-[3px] relative size-full">
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[rgba(50,53,56,0.2)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Overlay" />
        <div className="bg-[rgba(50,53,56,0.2)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Overlay" />
        <div className="bg-[rgba(50,53,56,0.2)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Overlay" />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[16px]">0</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Softcap ($50k)</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function FomoCatalyst() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="FOMO Catalyst">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffb4aa] text-[12px] tracking-[-0.12px] w-full">
        <p className="leading-[16px]">🔥 Only $5,000 more Bankroll needed to push this market LIVE!</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full">
      <FomoCatalyst />
    </div>
  );
}

function Frame11() {
  return (
    <div className="min-w-[260px] relative shrink-0 w-full">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-end min-w-[inherit] px-[8px] relative w-full">
          <Container16 />
          <BatteryStyleProgressBar />
          <Container19 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[282px] relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] relative w-full">
        <Heading4 />
        <Frame11 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] whitespace-nowrap">
          <p className="leading-[16px]">Bankroll Ending in:</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-end py-[2px] relative shrink-0">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] text-center tracking-[-0.14px] w-full">
          <p className="leading-[20px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8994] text-[12px] whitespace-nowrap">
          <p className="leading-[20px]">days</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center justify-center px-[8.5px] py-[6.5px] relative shrink-0 w-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-[-0.5px] pointer-events-none" />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] text-center tracking-[-0.14px] w-full">
          <p className="leading-[20px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8994] text-[12px] whitespace-nowrap">
          <p className="leading-[20px]">hours</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center justify-center px-[8.5px] py-[6.5px] relative shrink-0 w-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-[-0.5px] pointer-events-none" />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] text-center tracking-[-0.14px] w-full">
          <p className="leading-[20px]">32</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8994] text-[12px] whitespace-nowrap">
          <p className="leading-[20px]">mins</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center justify-center px-[8.5px] py-[6.5px] relative shrink-0 w-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-[-0.5px] pointer-events-none" />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame4 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[77px] items-start px-[8px] relative shrink-0">
      <Frame16 />
      <Frame6 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] w-[105.86px]">
        <p className="leading-[16px]">Enter Amount</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] tracking-[-0.14px] w-full">
          <p className="leading-[16px]">0.00</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#0b0e11] h-[44px] relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9px] py-[10px] relative size-full">
          <Container32 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3c4a42] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#272a2e] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e2e7] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">50</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#272a2e] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e2e7] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">100</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#272a2e] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a2c9ff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">MAX</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-start right-[7.67px] top-[calc(50%-0.25px)]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container33 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Corner52() {
  return (
    <div className="absolute contents right-0 top-0" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-0 w-[3px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#44dfa3] h-px w-[3px]" />
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center right-0 top-0 w-px">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#44dfa3] h-[3px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Corner53() {
  return (
    <div className="absolute bottom-0 contents right-0 size-[3px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[3px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[#44dfa3] h-px w-[3px]" />
        </div>
      </div>
      <div className="absolute bottom-0 flex h-px items-center justify-center right-0 w-[3px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[#44dfa3] h-[3px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Corner54() {
  return (
    <div className="absolute bottom-0 contents left-0 size-[3px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[3px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#44dfa3] h-px w-[3px]" />
        </div>
      </div>
      <div className="absolute bottom-0 flex h-px items-center justify-center left-0 w-[3px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#44dfa3] h-[3px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Corner55() {
  return (
    <div className="absolute contents left-0 top-0" data-name="corner">
      <div className="absolute bg-[#44dfa3] h-px left-0 top-0 w-[3px]" />
      <div className="absolute bg-[#44dfa3] h-[3px] left-0 top-0 w-px" />
    </div>
  );
}

function NoButtonType() {
  return (
    <div className="bg-[rgba(68,223,163,0.24)] h-[48px] min-w-[128px] relative shrink-0 w-full" data-name="no button type2">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] max-h-[24px] max-w-[180px] overflow-hidden relative shrink-0 text-[#44dfa3] text-[0px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">
            <p className="leading-[24px] text-[16px]">FUND NOW</p>
          </div>
          <Corner52 />
          <Corner53 />
          <Corner54 />
          <Corner55 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[131px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[8px] relative size-full">
          <Frame10 />
          <NoButtonType />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[282px] relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-end min-w-[inherit] relative w-full">
        <Frame15 />
        <Frame2 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="path-2">
        <img alt="" className="absolute block max-w-none size-full" height="48" src={imgPath2} width="48" />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[77px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <Frame1 />
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] max-h-[88px] min-h-px min-w-px overflow-hidden relative text-[#f5f5f5] text-[18px] text-ellipsis tracking-[-0.18px]">
        <p className="leading-[24px]">Which country will champion FIFA World Cup 2026?</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] w-[127.84px]">
        <p className="leading-[16px]">Bankroll Progress</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#858fe5] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">$45,000 / $50,000</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function BatteryStyleProgressBar1() {
  return (
    <div className="bg-[#0b0e11] h-[24px] relative shrink-0 w-full" data-name="Battery Style Progress Bar">
      <div aria-hidden="true" className="absolute border border-[rgba(60,74,66,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[2px] items-start p-[3px] relative size-full">
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[#858fe5] flex-[1_0_0] h-full min-h-px min-w-px shadow-[0px_0px_10px_0px_rgba(68,223,163,0.3)]" data-name="Background+Shadow" />
        <div className="bg-[rgba(50,53,56,0.2)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Overlay" />
        <div className="bg-[rgba(50,53,56,0.2)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Overlay" />
        <div className="bg-[rgba(50,53,56,0.2)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="Overlay" />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[16px]">0</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] whitespace-nowrap">
        <p className="leading-[16px]">Softcap ($50k)</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[16px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function FomoCatalyst1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="FOMO Catalyst">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffb4aa] text-[12px] tracking-[-0.12px] w-full">
        <p className="leading-[16px]">🔥 Only $5,000 more Bankroll needed to push this market LIVE!</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full">
      <FomoCatalyst1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="min-w-[260px] relative shrink-0 w-full">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-end min-w-[inherit] px-[8px] relative w-full">
          <Container34 />
          <BatteryStyleProgressBar1 />
          <Container37 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[282px] relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start min-w-[inherit] relative w-full">
        <Heading5 />
        <Frame12 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] whitespace-nowrap">
          <p className="leading-[16px]">Bankroll Ending in:</p>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-end py-[2px] relative shrink-0">
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] text-center tracking-[-0.14px] w-full">
          <p className="leading-[20px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8994] text-[12px] whitespace-nowrap">
          <p className="leading-[20px]">days</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center justify-center px-[8.5px] py-[6.5px] relative shrink-0 w-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-[-0.5px] pointer-events-none" />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] text-center tracking-[-0.14px] w-full">
          <p className="leading-[20px]">4</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8994] text-[12px] whitespace-nowrap">
          <p className="leading-[20px]">hours</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center justify-center px-[8.5px] py-[6.5px] relative shrink-0 w-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-[-0.5px] pointer-events-none" />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f5f5f5] text-[14px] text-center tracking-[-0.14px] w-full">
          <p className="leading-[20px]">32</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Sora:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8994] text-[12px] whitespace-nowrap">
          <p className="leading-[20px]">mins</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] content-stretch flex flex-col items-center justify-center px-[8.5px] py-[6.5px] relative shrink-0 w-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-[-0.5px] pointer-events-none" />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Frame9 />
      <Frame13 />
      <Frame20 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[77px] items-start px-[8px] relative shrink-0">
      <Frame19 />
      <Frame8 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold h-[15px] justify-center leading-[0] relative shrink-0 text-[#a5a4ad] text-[12px] tracking-[-0.12px] w-[105.86px]">
        <p className="leading-[16px]">Enter Amount</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] tracking-[-0.14px] w-full">
          <p className="leading-[16px]">0.00</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#0b0e11] h-[44px] relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[9px] py-[10px] relative size-full">
          <Container50 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#3c4a42] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#272a2e] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e2e7] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">50</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#272a2e] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e1e2e7] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">100</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#272a2e] content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Space_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#a2c9ff] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">MAX</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-start right-[7.67px] top-[calc(50%-0.25px)]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Container51 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Container47 />
      <Container49 />
    </div>
  );
}

function Corner56() {
  return (
    <div className="absolute contents right-0 top-0" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-0 w-[3px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#44dfa3] h-px w-[3px]" />
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center right-0 top-0 w-px">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#44dfa3] h-[3px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Corner57() {
  return (
    <div className="absolute bottom-0 contents right-0 size-[3px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[3px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[#44dfa3] h-px w-[3px]" />
        </div>
      </div>
      <div className="absolute bottom-0 flex h-px items-center justify-center right-0 w-[3px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[#44dfa3] h-[3px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Corner58() {
  return (
    <div className="absolute bottom-0 contents left-0 size-[3px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[3px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#44dfa3] h-px w-[3px]" />
        </div>
      </div>
      <div className="absolute bottom-0 flex h-px items-center justify-center left-0 w-[3px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#44dfa3] h-[3px] w-px" />
        </div>
      </div>
    </div>
  );
}

function Corner59() {
  return (
    <div className="absolute contents left-0 top-0" data-name="corner">
      <div className="absolute bg-[#44dfa3] h-px left-0 top-0 w-[3px]" />
      <div className="absolute bg-[#44dfa3] h-[3px] left-0 top-0 w-px" />
    </div>
  );
}

function NoButtonType1() {
  return (
    <div className="bg-[rgba(68,223,163,0.24)] h-[48px] min-w-[128px] relative shrink-0 w-full" data-name="no button type2">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-semibold justify-center leading-[0] max-h-[24px] max-w-[180px] overflow-hidden relative shrink-0 text-[#44dfa3] text-[0px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">
            <p className="leading-[24px] text-[16px]">FUND NOW</p>
          </div>
          <Corner56 />
          <Corner57 />
          <Corner58 />
          <Corner59 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[131px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[8px] relative size-full">
          <Frame21 />
          <NoButtonType1 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-[282px] relative">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-end min-w-[inherit] relative w-full">
        <Frame18 />
        <Frame3 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00d4f5] text-[0px] tracking-[-0.42px] w-full">
        <p className="leading-[60px] mb-0 text-[36px] text-white">Liquidity Providers</p>
        <p className="leading-[60px] text-[48px]">The Bankroll Model</p>
      </div>
    </div>
  );
}

function Corner60() {
  return (
    <div className="absolute contents right-[-1px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-[-0.5px] top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-1px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner61() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-[-0.5px] w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-[-0.5px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-[-0.5px] w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner62() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner63() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType13() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[24px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[0px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="text-[24px]">
              <span className="leading-[32px]">
                Capital Allocation
                <br aria-hidden="true" />
              </span>
              <span className="font-['Space_Grotesk:Medium',sans-serif] font-semibold leading-[24px] text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.16px]">(Softcap: $100)</span>
            </p>
          </div>
          <Corner60 />
          <Corner61 />
          <Corner62 />
          <Corner63 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">80%</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` of the bankroll goes to market liquidity.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">20%</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` of the bankroll goes to platform products and`}</span>
            {` `}
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">incentives.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">{`Every market bootstraps its own liquidity. `}</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">{`Bigger bankroll = deeper order book. `}</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Zero platform capital required.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[14px] relative w-full">
          <Container53 />
          <Container54 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <MultiButtonType13 />
      <Background10 />
    </div>
  );
}

function Corner64() {
  return (
    <div className="absolute contents right-[-1px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-[-0.5px] top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-1px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner65() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-[-0.5px] w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-[-0.5px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-[-0.5px] w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner66() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner67() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType14() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[24px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] min-h-px min-w-px overflow-hidden relative text-[24px] text-ellipsis text-white tracking-[-0.24px]">
            <p className="leading-[32px]">Bankroller Yield</p>
          </div>
          <Corner64 />
          <Corner65 />
          <Corner66 />
          <Corner67 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">Providers are economically incentivized to fund markets, earning:</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">50%</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` of market trading fees.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">50%</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` of market redemption fees.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul className="list-disc">
          <li className="leading-[24px] mb-0 ms-[24px]">
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">100%</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` of redemption fees generated from liquidity`}</span>
          </li>
          <li className="ms-[24px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px]">provisioning.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[14px] relative size-full">
          <Container56 />
          <Container57 />
          <Container58 />
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <MultiButtonType14 />
      <Background11 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Section1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[729px]" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start py-[120px] relative size-full">
        <div className="absolute flex h-[302.123px] items-center justify-center min-w-[320px] right-[-484.16px] top-[21px] w-[654.162px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "410" } as React.CSSProperties}>
          <div className="flex-none rotate-[2.25deg] skew-x-[-2.01deg]">
            <div className="bg-[#25252c] content-start flex flex-wrap gap-[24px] h-[278px] items-start px-[21px] py-[25px] relative w-[634px]" data-name="Presale - Market Card">
              <div aria-hidden="true" className="absolute border border-[rgba(60,74,66,0.2)] border-solid inset-0 pointer-events-none shadow-[10px_14px_0px_0px_rgba(255,255,255,0.02)]" />
              <Frame22 />
              <Frame23 />
            </div>
          </div>
        </div>
        <div className="absolute flex h-[302.123px] items-center justify-center min-w-[320px] right-[-464.16px] top-[-6px] w-[654.162px]" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "410" } as React.CSSProperties}>
          <div className="flex-none rotate-[2.25deg] skew-x-[-2.01deg]">
            <div className="bg-[#25252c] content-start flex flex-wrap gap-[24px] h-[278px] items-start px-[21px] py-[25px] relative w-[634px]" data-name="Presale - Market Card">
              <div aria-hidden="true" className="absolute border border-[rgba(60,74,66,0.2)] border-solid inset-0 pointer-events-none shadow-[10px_14px_0px_0px_rgba(255,255,255,0.02)]" />
              <Frame24 />
              <Frame25 />
            </div>
          </div>
        </div>
        <Heading6 />
        <Container52 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="h-[850.75px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[72px] relative size-full">
        <Section1 />
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="bg-[#19191f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="slide5">
      <Frame47 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#00d4f5] text-[42px] tracking-[-0.42px] w-full">
        <p className="leading-[60px] mb-0">AI Filtration</p>
        <p className="leading-[60px]">{`Resolution & Dispute System`}</p>
      </div>
    </div>
  );
}

function Corner68() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner69() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner70() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner71() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType15() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[20px] text-ellipsis text-white tracking-[-0.2px]">
            <p className="leading-[24px]">1. AI Market Filtration</p>
          </div>
          <Corner68 />
          <Corner69 />
          <Corner70 />
          <Corner71 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">Reviews user-proposed markets to guarantee quality and clarity.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">Enforces proper rule structure.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">Blocks inappropriate, subjective, or harmful markets.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[14px] relative w-full">
          <Container61 />
          <Container62 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <MultiButtonType15 />
      <Background12 />
    </div>
  );
}

function Corner72() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner73() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner74() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner75() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType16() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[20px] text-ellipsis text-white tracking-[-0.2px]">
            <p className="leading-[24px]">2. Autonomous Resolution (LLM + Search)</p>
          </div>
          <Corner72 />
          <Corner73 />
          <Corner74 />
          <Corner75 />
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">When a market expires, AI agents gather evidence from multiple independent sources.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">Proposes a definitive outcome alongside a confidence score and cited sources.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">A 24-hour public dispute window automatically opens.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[14px] relative w-full">
          <Container64 />
          <Container65 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <MultiButtonType16 />
      <Background13 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Corner76() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner77() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner78() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner79() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType17() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[16px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[20px] text-ellipsis text-white tracking-[-0.2px]">
            <p className="leading-[24px]">3. Human-Escalated Disputes (Game Theory)</p>
          </div>
          <Corner76 />
          <Corner77 />
          <Corner78 />
          <Corner79 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">The escalating cost creates a natural convergence: frivolous disputes become prohibitively expensive, while legitimate challenges get thoroughly re-evaluated.</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Anyone can initiate a dispute starting at `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">$1</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`The price to dispute `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">escalates by 1.25x</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` per round.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="leading-[24px] list-disc ms-[24px]">
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{`Each dispute adds `}</span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold">1 additional hour</span>
            <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal">{` to the resolution window.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">The AI re-evaluates the outcome using the newly submitted dispute evidence during each round.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[24px]">The market finalizes only when a full round passes with zero disputes.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[14px] relative size-full">
          <Container67 />
          <Container68 />
          <Container69 />
          <Container70 />
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <MultiButtonType17 />
      <Background14 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame52 />
      <Frame55 />
    </div>
  );
}

function Section2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start py-[48px] relative size-full">
        <Heading7 />
        <Container60 />
        <div className="absolute h-[246px] right-[-7px] top-[-65px] w-[457px]" data-name="Screenshot 2026-04-08 at 5.00.33 PM 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260408At50033Pm1} />
        </div>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[850.75px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[72px] relative size-full">
        <Section2 />
      </div>
    </div>
  );
}

function Slide5() {
  return (
    <div className="bg-[#19191f] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="slide6">
      <Frame50 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-[rgba(68,223,163,0.3)] content-stretch flex h-[40px] items-center justify-center px-[24px] relative rounded-[90px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white tracking-[-0.2px] whitespace-nowrap">
        <p className="leading-[60px]">Next Pharse</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[42px] text-white tracking-[-0.42px] whitespace-nowrap">
        <p className="leading-[60px]">{`Lumberworks `}</p>
      </div>
      <Frame58 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start pb-[12px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[42px] text-white tracking-[-0.42px] whitespace-nowrap">
        <p className="leading-[60px]">Roadmap</p>
      </div>
      <Frame57 />
    </div>
  );
}

function Corner80() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner81() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner82() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner83() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType18() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[32px]">FETCH</p>
          </div>
          <Corner80 />
          <Corner81 />
          <Corner82 />
          <Corner83 />
        </div>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">Auto-creation of upcoming games + fair odds retrieved from APIs.</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container74 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[45.5px] left-[182px] top-[115px] w-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 45.5">
        <g id="Group 3785">
          <path d="M4 5V45.5" id="Vector 3" stroke="var(--stroke-0, #66EBFF)" strokeWidth="2" />
          <circle cx="4" cy="4" fill="var(--fill-0, #00C2E0)" id="Ellipse 6" r="3.5" stroke="var(--stroke-0, #A3FAFF)" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]">
      <MultiButtonType18 />
      <Background15 />
      <Group />
    </div>
  );
}

function Corner84() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner85() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner86() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner87() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType19() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[32px]">APPROVE</p>
          </div>
          <Corner84 />
          <Corner85 />
          <Corner86 />
          <Corner87 />
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">Users bankroll the market. (Reaching the $100 softcap pushes the market Live).</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container75 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]">
      <MultiButtonType19 />
      <Background16 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[45.5px] left-[948px] top-[115px] w-[8px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 45.5">
        <g id="Group 3785">
          <path d="M4 5V45.5" id="Vector 3" stroke="var(--stroke-0, #66EBFF)" strokeWidth="2" />
          <circle cx="4" cy="4" fill="var(--fill-0, #00C2E0)" id="Ellipse 6" r="3.5" stroke="var(--stroke-0, #A3FAFF)" />
        </g>
      </svg>
    </div>
  );
}

function Corner88() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner89() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner90() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner91() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType20() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[32px]">PUBLISH</p>
          </div>
          <Corner88 />
          <Corner89 />
          <Corner90 />
          <Corner91 />
        </div>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">Market auto-creates using odds-informed pricing.</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container76 />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <MultiButtonType20 />
      <Background17 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[360px]">
      <Frame64 />
    </div>
  );
}

function Corner92() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner93() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner94() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(0,211,224,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner95() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(0,211,224,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(0,211,224,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType21() {
  return (
    <div className="backdrop-blur-[8px] bg-[#002f45] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00d3e0] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[32px]">REFRESH</p>
          </div>
          <Corner92 />
          <Corner93 />
          <Corner94 />
          <Corner95 />
        </div>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">Live odds update continuously, adjusting at specific intervals (mins/hours).</p>
      </div>
    </div>
  );
}

function Background18() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]">
      <MultiButtonType21 />
      <Background18 />
    </div>
  );
}

function Corner96() {
  return (
    <div className="absolute contents right-[-0.5px] top-[0.25px]" data-name="corner">
      <div className="absolute flex h-px items-center justify-center right-0 top-[0.25px] w-[12px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(15,224,0,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute flex h-[12px] items-center justify-center right-[-0.5px] top-[0.75px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(15,224,0,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner97() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] right-0 w-[12px]" data-name="corner">
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center right-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 -scale-y-100 flex-none">
          <div className="bg-[rgba(15,224,0,0.6)] h-px w-[13px]" />
        </div>
      </div>
      <div className="absolute bottom-[-0.25px] flex h-px items-center justify-center right-0 w-[12px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[rgba(15,224,0,0.6)] h-px w-[12px]" />
        </div>
      </div>
    </div>
  );
}

function Corner98() {
  return (
    <div className="absolute bottom-[-0.25px] contents h-[13.25px] left-0 w-[13px]" data-name="corner">
      <div className="absolute bg-[rgba(15,224,0,0.6)] bottom-[-0.25px] h-px left-px w-[12px]" />
      <div className="absolute bottom-0 flex h-[13px] items-center justify-center left-0 w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(15,224,0,0.6)] h-px w-[13px]" />
        </div>
      </div>
    </div>
  );
}

function Corner99() {
  return (
    <div className="absolute contents left-0 top-[0.25px]" data-name="corner">
      <div className="absolute flex h-[12px] items-center justify-center left-0 top-[0.25px] w-px" style={{ "--transform-inner-width": "1181", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(15,224,0,0.6)] h-px w-[12px]" />
        </div>
      </div>
      <div className="absolute bg-[rgba(15,224,0,0.6)] h-px left-0 top-[0.25px] w-[12px]" />
    </div>
  );
}

function MultiButtonType22() {
  return (
    <div className="backdrop-blur-[8px] bg-[#00452e] relative shrink-0 w-full" data-name="multi button type1">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[20px] py-[10px] relative w-full">
          <div className="bg-[#00e052] shrink-0 size-[12px]" />
          <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-bold justify-center leading-[0] max-h-[24px] overflow-hidden relative shrink-0 text-[24px] text-ellipsis text-white tracking-[-0.24px] whitespace-nowrap">
            <p className="leading-[32px]">RESOLVE</p>
          </div>
          <Corner96 />
          <Corner97 />
          <Corner98 />
          <Corner99 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[16px] text-white tracking-[-0.16px]">
        <p className="leading-[24px]">AI autonomously resolves the market based on final game results.</p>
      </div>
    </div>
  );
}

function Background19() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,69,45,0.36)] relative shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[14px] relative w-full">
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]">
      <MultiButtonType22 />
      <Background19 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame66 />
      <Frame67 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-center flex flex-wrap gap-[24px] items-center justify-center relative shrink-0 w-full">
      <div className="-translate-y-1/2 absolute h-[37.5px] left-[365.5px] top-[calc(50%+80.25px)] w-[105px]">
        <div className="absolute inset-[0_-0.95%_-2.67%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 38.5">
            <path d="M105 0V37.5H0" id="Vector 4" stroke="var(--stroke-0, #66EBFF)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex h-[60px] items-center justify-center left-[667px] top-[calc(50%-90px)] w-[105px]">
        <div className="flex-none rotate-180">
          <div className="h-[60px] relative w-[105px]">
            <div className="absolute inset-[0_-0.95%_-1.67%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 61">
                <path d="M105 0V60H0" id="Vector 5" stroke="var(--stroke-0, #66EBFF)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame60 />
      <Group1 />
      <div className="-translate-x-1/2 absolute left-[calc(50%-204px)] size-[8px] top-[235px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #00C2E0)" id="Ellipse 6" r="3.5" stroke="var(--stroke-0, #A3FAFF)" />
        </svg>
      </div>
      <Frame63 />
      <Frame65 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-white tracking-[-0.16px] w-full">
        <p className="leading-[24px]">For sports events, automation extends even further. Lumberworks auto-creates markets directly from real bookmaker odds.</p>
      </div>
      <Frame59 />
    </div>
  );
}

function ParagraphBackgroundVerticalBorder() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(0,47,69,0.01)] relative shrink-0 w-full" data-name="Paragraph+Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.06)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal gap-[16px] items-start justify-center leading-[0] p-[14px] relative text-[0px] text-white tracking-[-0.16px] w-full">
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[#a5a4ad] text-[16px]">Dynamic Odds Pricing:</p>
            <p className="leading-[24px] text-[16px]">Unlike traditional prediction markets that start at a neutral 50/50, sports markets start at actual probability.</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 w-full">
            <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[24px] mb-0 text-[#a5a4ad] text-[16px]">Example:</p>
            <ul className="list-disc">
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                <span className="leading-[24px] text-[16px]">API fair odds show Underdog 10.63% / Favorite 89.37%.</span>
              </li>
              <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                <span className="leading-[24px] text-[16px]">Initial Pricing: YES = $0.11 | NO = $0.89.</span>
              </li>
              <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                <span className="leading-[24px] text-[16px]">Our bots seed the grid around these real odds and dynamically update as the API odds shift.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[24px] items-start py-[48px] relative size-full">
        <Heading8 />
        <Container73 />
        <ParagraphBackgroundVerticalBorder />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="h-[850.75px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[72px] relative size-full">
        <Section3 />
      </div>
    </div>
  );
}

function Slide6() {
  return (
    <div className="bg-[#19191f] content-stretch flex flex-col gap-[56px] items-start overflow-clip relative shrink-0 w-full" data-name="slide7">
      <Frame56 />
      <div className="-translate-x-1/2 absolute left-[calc(50%+99px)] size-[8px] top-[436px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #00C2E0)" id="Ellipse 6" r="3.5" stroke="var(--stroke-0, #A3FAFF)" />
        </svg>
      </div>
    </div>
  );
}

export default function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Slide />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
    </div>
  );
}