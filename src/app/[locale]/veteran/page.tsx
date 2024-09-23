import VaForCareProvidersSection from "@/components/dropdown-pages-component/VaForCareProvidersSection";
import VaProudlyServing from "@/components/dropdown-pages-component/VaProudlyServing";
import VaProviderSection from "@/components/dropdown-pages-component/VaProviderSection";
import VaVideoHighlight from "@/components/dropdown-pages-component/VaVideoHighlight";
import VeteransBottomNav from "@/components/va-sub-pages/VeteransBottomNav";
import Image from "next/image";
import React from "react";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "../../i18n";
export default async function page ({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>)  {
  const { t, resources,  } = await initTranslations(locale, ["dropdownpages", "vasubpages"]);


  return (
    <TranslationsProvider
    namespaces={["dropdownpages", "vasubpages"]}
    locale={locale}
    resources={resources}
  >
    <div>
      <div className=" h-[89vh] flex items-center bg-cover bg-[url(/drop-down-images/vs-landing-mobile.png)] md:bg-[url(/drop-down-images/vs-landing.png)] bg-center bg-no-repeat">
        <div className="flex bg-[#EAE2F799] md:pl-20 md:bg-transparent py-10 px-[2rem] items-start flex-col gap-5  ">
          <p className="font-helvetica text-[20px] md:w-[494px]  md:text-[25px] font-normal leading-[32.37px] text-left">
            {t("va.header.title")}
          </p>
          <p className="font-helvetica   text-[12px] font-normal leading-[15px] tracking-[0.01em] text-left">
          {t("va.header.description")}
          </p>
          <button className="w-[178px] h-[48px] flex justify-center items-center bg-[#0D99FF] gap-2 ">
            <span className="font-helvetica text-white text-[16px] font-normal leading-[24px] text-left">
               {t("va.header.button")}
            </span>
            <Image
              alt="arrow"
              src="/icons/right-arrow-icon.svg"
              width={10}
              height={10}
            />
          </button>
        </div>
      </div>
      <div
        className="w-full py-8"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <p className=" max-w-[800px] font-helvetica text-center text-[#000000] font-normal leading-[15px] text-[12px] tracking-[0.01em] mx-auto px-4">
          {t("va.cta")}
          
        </p>
      </div>
      <VaProudlyServing />
      <VaVideoHighlight />
      <div
        className="w-full py-8 px-[2rem]  flex flex-col justify-center items-center gap-[1rem]"
        style={{
          background:
            "linear-gradient(270deg, rgba(209, 181, 255, 0.64) 15%, rgba(133, 171, 247, 0.557273) 54%, rgba(81, 164, 242, 0.5) 81%)",
        }}
      >
        <p className="font-helvetica text-[25px] font-normal leading-[32.37px] text-center">
          {t("va.howDoYouKnow.title")}
        </p>
        <p className="font-helvetica text-[#3B3B3B] text-[15px] font-normal leading-[22px] max-w-[585px] tracking-[0.01em] text-center">
        {t("va.howDoYouKnow.description")}
        </p>
        <div className="flex gap-2 justify-center items-center">
          <p>{t("va.howDoYouKnow.link")} </p>
          <div className="w-[11.57px] relative h-[11px]">
            <Image fill src="/icons/left-circle.svg" alt="left icon" />
          </div>
        </div>
      </div>
      <VaForCareProvidersSection />
      <VaProviderSection />
      <VeteransBottomNav />
    </div>
    </TranslationsProvider>
  );
};

