import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { UnorderedList } from "@atrilabs/react-component-manifests/src/manifests/UnorderedList/UnorderedList.tsx";
import { Testimonial } from "@atrilabs/react-component-manifests/src/manifests/Testimonial/Testimonial.tsx";
import { useFlex20Cb, useFlex17Cb, useFlex13Cb, useFlex14Cb, useFlex18Cb, useMenu2Cb, useFlex12Cb, useFlex19Cb, useFlex16Cb, usefirst_page_containerCb, usepic_and_main_homeCb, useFlex24Cb, useFlex26Cb, useFlex25Cb, useDiv8Cb, usetrusted_byCb, useFlex30Cb, useFlex31Cb, useservicesCb, useFlex44Cb, useFlex47Cb, useFlex48Cb, useFlex49Cb, useFlex50Cb, useProjectsCb, useheading_and_buttonCb, useheadingCb, usebutton_flexCb, useprojects_headingCb, usecarouselCb, useblogs_sectionCb, usedescriptionsCb, useDiv22Cb, usecontentsCb, useDiv9Cb, useDiv10Cb, useDiv14Cb, useDiv18Cb, useDiv11Cb, useDiv15Cb, useDiv19Cb, useDiv12Cb, useDiv16Cb, useDiv20Cb, useDiv13Cb, useDiv17Cb, useDiv21Cb, useproduct_designerCb, usetitle_and_stuffCb, useDiv24Cb, useDiv25Cb, useimagesCb, useFlex64Cb, useFlex65Cb, useFlex66Cb, useDiv26Cb, useDiv27Cb, useedu_work_expCb, useDiv28Cb, useDiv30Cb, useDiv33Cb, useFlex70Cb, useFlex71Cb, useoriginal_compCb, useFlex68Cb, useFlex69Cb, useDiv32Cb, useDiv34Cb, useFlex72Cb, useFlex73Cb, useDiv29Cb, useDiv35Cb, useDiv38Cb, useFlex74Cb, useFlex75Cb, useDiv36Cb, useDiv39Cb, useFlex76Cb, useFlex77Cb, useDiv37Cb, useDiv40Cb, useFlex78Cb, useFlex79Cb, useTESTIMONILSCb, useHEADINGSCb, useDiv44Cb, useFAQCb, useDiv45Cb, useCONTENTS_FAQCb, useLEFTCb, useFlex83Cb, useFlex86Cb, useFlex89Cb, useRIGHTCb, useFlex85Cb, useFlex88Cb, useFlex90Cb, useLAST_SECTIONCb, usemiddle_contCb, useFlex93Cb, useFlex94Cb, useFlex95Cb, useFlex96Cb, useFlex97Cb, useImage3Cb, useImage4Cb, useFlex15Cb, useTextBox21Cb, useTextBox22Cb, useTextBox23Cb, useTextBox24Cb, useTextBox51Cb, useTextBox25Cb, useTextBox26Cb, useTextBox27Cb, useTextBox28Cb, useTextBox29Cb, useTextBox31Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useButton3Cb, useLink1Cb, useImage5Cb, useImage7Cb, useImage8Cb, useImage9Cb, useImage10Cb, useTextBox38Cb, useTextBox52Cb, useTextBox53Cb, useImage13Cb, useTextBox54Cb, useTextBox55Cb, useUnorderedList1Cb, useImage14Cb, useTextBox56Cb, useTextBox57Cb, useUnorderedList2Cb, useImage15Cb, useTextBox58Cb, useTextBox59Cb, useUnorderedList3Cb, useTextBox61Cb, useButton11Cb, useTextBox60Cb, useTestimonial2Cb, useTextBox62Cb, useTextBox63Cb, useButton12Cb, useTextBox64Cb, useTextBox65Cb, useButton13Cb, useButton20Cb, useTextBox78Cb, useTextBox79Cb, useButton21Cb, useTextBox80Cb, useTextBox81Cb, useButton22Cb, useTextBox82Cb, useTextBox83Cb, useButton23Cb, useTextBox84Cb, useTextBox85Cb, useTextBox86Cb, useTextBox87Cb, useTextBox88Cb, useImage20Cb, useImage21Cb, useImage22Cb, useImage23Cb, useeduCb, useTextBox93Cb, useTextBox94Cb, useImage25Cb, useTextBox95Cb, useTextBox90Cb, useImage24Cb, useTextBox91Cb, useTextBox92Cb, useTextBox96Cb, useTextBox97Cb, useImage26Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useTextBox101Cb, useImage27Cb, useTextBox102Cb, useTextBox103Cb, useTextBox104Cb, useImage28Cb, useTextBox105Cb, useTextBox106Cb, useTextBox107Cb, useImage29Cb, useTextBox108Cb, useTextBox109Cb, useTextBox110Cb, useTestimonial4Cb, useTextBox111Cb, useTextBox112Cb, useTextBox125Cb, useTextBox126Cb, useTextBox131Cb, useTextBox132Cb, useTextBox137Cb, useTextBox138Cb, useTextBox129Cb, useTextBox130Cb, useTextBox135Cb, useTextBox136Cb, useTextBox139Cb, useTextBox140Cb, useTextBox141Cb, useTextBox142Cb, useTextBox143Cb, useTextBox144Cb, useTextBox145Cb, useTextBox146Cb, useLink15Cb, useLink17Cb, useLink22Cb, useLink12Cb, useLink13Cb, useLink14Cb, useLink23Cb, useLink24Cb, useLink25Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex17Props = useStore((state)=>state["Home"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Home"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex14Props = useStore((state)=>state["Home"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["Home"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Flex18Props = useStore((state)=>state["Home"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Home"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Menu2Props = useStore((state)=>state["Home"]["Menu2"]);
const Menu2IoProps = useIoStore((state)=>state["Home"]["Menu2"]);
const Menu2Cb = useMenu2Cb()
const Flex12Props = useStore((state)=>state["Home"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Home"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex16Props = useStore((state)=>state["Home"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Home"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const first_page_containerProps = useStore((state)=>state["Home"]["first_page_container"]);
const first_page_containerIoProps = useIoStore((state)=>state["Home"]["first_page_container"]);
const first_page_containerCb = usefirst_page_containerCb()
const pic_and_main_homeProps = useStore((state)=>state["Home"]["pic_and_main_home"]);
const pic_and_main_homeIoProps = useIoStore((state)=>state["Home"]["pic_and_main_home"]);
const pic_and_main_homeCb = usepic_and_main_homeCb()
const Flex24Props = useStore((state)=>state["Home"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Home"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Flex26Props = useStore((state)=>state["Home"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["Home"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex25Props = useStore((state)=>state["Home"]["Flex25"]);
const Flex25IoProps = useIoStore((state)=>state["Home"]["Flex25"]);
const Flex25Cb = useFlex25Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const trusted_byProps = useStore((state)=>state["Home"]["trusted_by"]);
const trusted_byIoProps = useIoStore((state)=>state["Home"]["trusted_by"]);
const trusted_byCb = usetrusted_byCb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const servicesProps = useStore((state)=>state["Home"]["services"]);
const servicesIoProps = useIoStore((state)=>state["Home"]["services"]);
const servicesCb = useservicesCb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Home"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Home"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const ProjectsProps = useStore((state)=>state["Home"]["Projects"]);
const ProjectsIoProps = useIoStore((state)=>state["Home"]["Projects"]);
const ProjectsCb = useProjectsCb()
const heading_and_buttonProps = useStore((state)=>state["Home"]["heading_and_button"]);
const heading_and_buttonIoProps = useIoStore((state)=>state["Home"]["heading_and_button"]);
const heading_and_buttonCb = useheading_and_buttonCb()
const headingProps = useStore((state)=>state["Home"]["heading"]);
const headingIoProps = useIoStore((state)=>state["Home"]["heading"]);
const headingCb = useheadingCb()
const button_flexProps = useStore((state)=>state["Home"]["button_flex"]);
const button_flexIoProps = useIoStore((state)=>state["Home"]["button_flex"]);
const button_flexCb = usebutton_flexCb()
const projects_headingProps = useStore((state)=>state["Home"]["projects_heading"]);
const projects_headingIoProps = useIoStore((state)=>state["Home"]["projects_heading"]);
const projects_headingCb = useprojects_headingCb()
const carouselProps = useStore((state)=>state["Home"]["carousel"]);
const carouselIoProps = useIoStore((state)=>state["Home"]["carousel"]);
const carouselCb = usecarouselCb()
const blogs_sectionProps = useStore((state)=>state["Home"]["blogs_section"]);
const blogs_sectionIoProps = useIoStore((state)=>state["Home"]["blogs_section"]);
const blogs_sectionCb = useblogs_sectionCb()
const descriptionsProps = useStore((state)=>state["Home"]["descriptions"]);
const descriptionsIoProps = useIoStore((state)=>state["Home"]["descriptions"]);
const descriptionsCb = usedescriptionsCb()
const Div22Props = useStore((state)=>state["Home"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Home"]["Div22"]);
const Div22Cb = useDiv22Cb()
const contentsProps = useStore((state)=>state["Home"]["contents"]);
const contentsIoProps = useIoStore((state)=>state["Home"]["contents"]);
const contentsCb = usecontentsCb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Div10Props = useStore((state)=>state["Home"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Home"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Div18Props = useStore((state)=>state["Home"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Home"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div11Props = useStore((state)=>state["Home"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Home"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div19Props = useStore((state)=>state["Home"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Home"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div12Props = useStore((state)=>state["Home"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Home"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div20Props = useStore((state)=>state["Home"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Home"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Div21Props = useStore((state)=>state["Home"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Home"]["Div21"]);
const Div21Cb = useDiv21Cb()
const product_designerProps = useStore((state)=>state["Home"]["product_designer"]);
const product_designerIoProps = useIoStore((state)=>state["Home"]["product_designer"]);
const product_designerCb = useproduct_designerCb()
const title_and_stuffProps = useStore((state)=>state["Home"]["title_and_stuff"]);
const title_and_stuffIoProps = useIoStore((state)=>state["Home"]["title_and_stuff"]);
const title_and_stuffCb = usetitle_and_stuffCb()
const Div24Props = useStore((state)=>state["Home"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Home"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Div25Props = useStore((state)=>state["Home"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Home"]["Div25"]);
const Div25Cb = useDiv25Cb()
const imagesProps = useStore((state)=>state["Home"]["images"]);
const imagesIoProps = useIoStore((state)=>state["Home"]["images"]);
const imagesCb = useimagesCb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex66Props = useStore((state)=>state["Home"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Home"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Div26Props = useStore((state)=>state["Home"]["Div26"]);
const Div26IoProps = useIoStore((state)=>state["Home"]["Div26"]);
const Div26Cb = useDiv26Cb()
const Div27Props = useStore((state)=>state["Home"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Home"]["Div27"]);
const Div27Cb = useDiv27Cb()
const edu_work_expProps = useStore((state)=>state["Home"]["edu_work_exp"]);
const edu_work_expIoProps = useIoStore((state)=>state["Home"]["edu_work_exp"]);
const edu_work_expCb = useedu_work_expCb()
const Div28Props = useStore((state)=>state["Home"]["Div28"]);
const Div28IoProps = useIoStore((state)=>state["Home"]["Div28"]);
const Div28Cb = useDiv28Cb()
const Div30Props = useStore((state)=>state["Home"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Home"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Div33Props = useStore((state)=>state["Home"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Home"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Flex70Props = useStore((state)=>state["Home"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["Home"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex71Props = useStore((state)=>state["Home"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Home"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const original_compProps = useStore((state)=>state["Home"]["original_comp"]);
const original_compIoProps = useIoStore((state)=>state["Home"]["original_comp"]);
const original_compCb = useoriginal_compCb()
const Flex68Props = useStore((state)=>state["Home"]["Flex68"]);
const Flex68IoProps = useIoStore((state)=>state["Home"]["Flex68"]);
const Flex68Cb = useFlex68Cb()
const Flex69Props = useStore((state)=>state["Home"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Home"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Div32Props = useStore((state)=>state["Home"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Home"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Div34Props = useStore((state)=>state["Home"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Home"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Div29Props = useStore((state)=>state["Home"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Home"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Div35Props = useStore((state)=>state["Home"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Home"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Div38Props = useStore((state)=>state["Home"]["Div38"]);
const Div38IoProps = useIoStore((state)=>state["Home"]["Div38"]);
const Div38Cb = useDiv38Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Div36Props = useStore((state)=>state["Home"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Home"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Div39Props = useStore((state)=>state["Home"]["Div39"]);
const Div39IoProps = useIoStore((state)=>state["Home"]["Div39"]);
const Div39Cb = useDiv39Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Div37Props = useStore((state)=>state["Home"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Home"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Div40Props = useStore((state)=>state["Home"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Home"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const TESTIMONILSProps = useStore((state)=>state["Home"]["TESTIMONILS"]);
const TESTIMONILSIoProps = useIoStore((state)=>state["Home"]["TESTIMONILS"]);
const TESTIMONILSCb = useTESTIMONILSCb()
const HEADINGSProps = useStore((state)=>state["Home"]["HEADINGS"]);
const HEADINGSIoProps = useIoStore((state)=>state["Home"]["HEADINGS"]);
const HEADINGSCb = useHEADINGSCb()
const Div44Props = useStore((state)=>state["Home"]["Div44"]);
const Div44IoProps = useIoStore((state)=>state["Home"]["Div44"]);
const Div44Cb = useDiv44Cb()
const FAQProps = useStore((state)=>state["Home"]["FAQ"]);
const FAQIoProps = useIoStore((state)=>state["Home"]["FAQ"]);
const FAQCb = useFAQCb()
const Div45Props = useStore((state)=>state["Home"]["Div45"]);
const Div45IoProps = useIoStore((state)=>state["Home"]["Div45"]);
const Div45Cb = useDiv45Cb()
const CONTENTS_FAQProps = useStore((state)=>state["Home"]["CONTENTS_FAQ"]);
const CONTENTS_FAQIoProps = useIoStore((state)=>state["Home"]["CONTENTS_FAQ"]);
const CONTENTS_FAQCb = useCONTENTS_FAQCb()
const LEFTProps = useStore((state)=>state["Home"]["LEFT"]);
const LEFTIoProps = useIoStore((state)=>state["Home"]["LEFT"]);
const LEFTCb = useLEFTCb()
const Flex83Props = useStore((state)=>state["Home"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const RIGHTProps = useStore((state)=>state["Home"]["RIGHT"]);
const RIGHTIoProps = useIoStore((state)=>state["Home"]["RIGHT"]);
const RIGHTCb = useRIGHTCb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const LAST_SECTIONProps = useStore((state)=>state["Home"]["LAST_SECTION"]);
const LAST_SECTIONIoProps = useIoStore((state)=>state["Home"]["LAST_SECTION"]);
const LAST_SECTIONCb = useLAST_SECTIONCb()
const middle_contProps = useStore((state)=>state["Home"]["middle_cont"]);
const middle_contIoProps = useIoStore((state)=>state["Home"]["middle_cont"]);
const middle_contCb = usemiddle_contCb()
const Flex93Props = useStore((state)=>state["Home"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Home"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["Home"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Home"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Image3Props = useStore((state)=>state["Home"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Home"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const Flex15Props = useStore((state)=>state["Home"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Home"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const TextBox33Props = useStore((state)=>state["Home"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Home"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Home"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Home"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Home"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Home"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const Button3Props = useStore((state)=>state["Home"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["Home"]["Button3"]);
const Button3Cb = useButton3Cb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const Image7Props = useStore((state)=>state["Home"]["Image7"]);
const Image7IoProps = useIoStore((state)=>state["Home"]["Image7"]);
const Image7Cb = useImage7Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const UnorderedList1Props = useStore((state)=>state["Home"]["UnorderedList1"]);
const UnorderedList1IoProps = useIoStore((state)=>state["Home"]["UnorderedList1"]);
const UnorderedList1Cb = useUnorderedList1Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const UnorderedList2Props = useStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2IoProps = useIoStore((state)=>state["Home"]["UnorderedList2"]);
const UnorderedList2Cb = useUnorderedList2Cb()
const Image15Props = useStore((state)=>state["Home"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Home"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const UnorderedList3Props = useStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3IoProps = useIoStore((state)=>state["Home"]["UnorderedList3"]);
const UnorderedList3Cb = useUnorderedList3Cb()
const TextBox61Props = useStore((state)=>state["Home"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Home"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const Testimonial2Props = useStore((state)=>state["Home"]["Testimonial2"]);
const Testimonial2IoProps = useIoStore((state)=>state["Home"]["Testimonial2"]);
const Testimonial2Cb = useTestimonial2Cb()
const TextBox62Props = useStore((state)=>state["Home"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Home"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox63Props = useStore((state)=>state["Home"]["TextBox63"]);
const TextBox63IoProps = useIoStore((state)=>state["Home"]["TextBox63"]);
const TextBox63Cb = useTextBox63Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const TextBox64Props = useStore((state)=>state["Home"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Home"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const TextBox65Props = useStore((state)=>state["Home"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Home"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const Button13Props = useStore((state)=>state["Home"]["Button13"]);
const Button13IoProps = useIoStore((state)=>state["Home"]["Button13"]);
const Button13Cb = useButton13Cb()
const Button20Props = useStore((state)=>state["Home"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Home"]["Button20"]);
const Button20Cb = useButton20Cb()
const TextBox78Props = useStore((state)=>state["Home"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Home"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()
const TextBox79Props = useStore((state)=>state["Home"]["TextBox79"]);
const TextBox79IoProps = useIoStore((state)=>state["Home"]["TextBox79"]);
const TextBox79Cb = useTextBox79Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const TextBox82Props = useStore((state)=>state["Home"]["TextBox82"]);
const TextBox82IoProps = useIoStore((state)=>state["Home"]["TextBox82"]);
const TextBox82Cb = useTextBox82Cb()
const TextBox83Props = useStore((state)=>state["Home"]["TextBox83"]);
const TextBox83IoProps = useIoStore((state)=>state["Home"]["TextBox83"]);
const TextBox83Cb = useTextBox83Cb()
const Button23Props = useStore((state)=>state["Home"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["Home"]["Button23"]);
const Button23Cb = useButton23Cb()
const TextBox84Props = useStore((state)=>state["Home"]["TextBox84"]);
const TextBox84IoProps = useIoStore((state)=>state["Home"]["TextBox84"]);
const TextBox84Cb = useTextBox84Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const Image20Props = useStore((state)=>state["Home"]["Image20"]);
const Image20IoProps = useIoStore((state)=>state["Home"]["Image20"]);
const Image20Cb = useImage20Cb()
const Image21Props = useStore((state)=>state["Home"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Home"]["Image21"]);
const Image21Cb = useImage21Cb()
const Image22Props = useStore((state)=>state["Home"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Home"]["Image22"]);
const Image22Cb = useImage22Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const eduProps = useStore((state)=>state["Home"]["edu"]);
const eduIoProps = useIoStore((state)=>state["Home"]["edu"]);
const eduCb = useeduCb()
const TextBox93Props = useStore((state)=>state["Home"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Home"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const TextBox94Props = useStore((state)=>state["Home"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Home"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox91Props = useStore((state)=>state["Home"]["TextBox91"]);
const TextBox91IoProps = useIoStore((state)=>state["Home"]["TextBox91"]);
const TextBox91Cb = useTextBox91Cb()
const TextBox92Props = useStore((state)=>state["Home"]["TextBox92"]);
const TextBox92IoProps = useIoStore((state)=>state["Home"]["TextBox92"]);
const TextBox92Cb = useTextBox92Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image26Props = useStore((state)=>state["Home"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["Home"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox102Props = useStore((state)=>state["Home"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["Home"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Testimonial4Props = useStore((state)=>state["Home"]["Testimonial4"]);
const Testimonial4IoProps = useIoStore((state)=>state["Home"]["Testimonial4"]);
const Testimonial4Cb = useTestimonial4Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox132Props = useStore((state)=>state["Home"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Home"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox137Props = useStore((state)=>state["Home"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Home"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox138Props = useStore((state)=>state["Home"]["TextBox138"]);
const TextBox138IoProps = useIoStore((state)=>state["Home"]["TextBox138"]);
const TextBox138Cb = useTextBox138Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox135Props = useStore((state)=>state["Home"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Home"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Home"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Home"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox139Props = useStore((state)=>state["Home"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Home"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["Home"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Home"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Home"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Home"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["Home"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Home"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox143Props = useStore((state)=>state["Home"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Home"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["Home"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Home"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox145Props = useStore((state)=>state["Home"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Home"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox146Props = useStore((state)=>state["Home"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Home"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const Link15Props = useStore((state)=>state["Home"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["Home"]["Link15"]);
const Link15Cb = useLink15Cb()
const Link17Props = useStore((state)=>state["Home"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["Home"]["Link17"]);
const Link17Cb = useLink17Cb()
const Link22Props = useStore((state)=>state["Home"]["Link22"]);
const Link22IoProps = useIoStore((state)=>state["Home"]["Link22"]);
const Link22Cb = useLink22Cb()
const Link12Props = useStore((state)=>state["Home"]["Link12"]);
const Link12IoProps = useIoStore((state)=>state["Home"]["Link12"]);
const Link12Cb = useLink12Cb()
const Link13Props = useStore((state)=>state["Home"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["Home"]["Link13"]);
const Link13Cb = useLink13Cb()
const Link14Props = useStore((state)=>state["Home"]["Link14"]);
const Link14IoProps = useIoStore((state)=>state["Home"]["Link14"]);
const Link14Cb = useLink14Cb()
const Link23Props = useStore((state)=>state["Home"]["Link23"]);
const Link23IoProps = useIoStore((state)=>state["Home"]["Link23"]);
const Link23Cb = useLink23Cb()
const Link24Props = useStore((state)=>state["Home"]["Link24"]);
const Link24IoProps = useIoStore((state)=>state["Home"]["Link24"]);
const Link24Cb = useLink24Cb()
const Link25Props = useStore((state)=>state["Home"]["Link25"]);
const Link25IoProps = useIoStore((state)=>state["Home"]["Link25"]);
const Link25Cb = useLink25Cb()

  return (<>
  <Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<Flex className="p-Home Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Image className="p-Home Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
</Flex>
<Flex className="p-Home Flex14 bpt" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Image className="p-Home Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Flex className="p-Home Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Flex className="p-Home Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}/>
<Menu className="p-Home Menu2 bpt" {...Menu2Props} {...Menu2Cb} {...Menu2IoProps}>
<Flex className="p-Home Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex>
</Menu>
</Flex>
</Flex>
<Flex className="p-Home first_page_container bpt" {...first_page_containerProps} {...first_page_containerCb} {...first_page_containerIoProps}>
<Flex className="p-Home pic_and_main_home bpt" {...pic_and_main_homeProps} {...pic_and_main_homeCb} {...pic_and_main_homeIoProps}>
<Flex className="p-Home Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
<TextBox className="p-Home TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<TextBox className="p-Home TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
<TextBox className="p-Home TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<Flex className="p-Home Flex26 bpt" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Button className="p-Home Button3 bpt" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
<Link className="p-Home Link1 bpt" {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex25 bpt" {...Flex25Props} {...Flex25Cb} {...Flex25IoProps}>
<Div className="p-Home Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Image className="p-Home Image5 bpt" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
</Div>
</Flex>
</Flex>
<Flex className="p-Home trusted_by bpt" {...trusted_byProps} {...trusted_byCb} {...trusted_byIoProps}>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<TextBox className="p-Home TextBox38 bpt" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Flex>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image className="p-Home Image7 bpt" {...Image7Props} {...Image7Cb} {...Image7IoProps}/>
<Image className="p-Home Image8 bpt" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home services bpt" {...servicesProps} {...servicesCb} {...servicesIoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<UnorderedList className="p-Home UnorderedList1 bpt" {...UnorderedList1Props} {...UnorderedList1Cb} {...UnorderedList1IoProps}/>
</Flex>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<UnorderedList className="p-Home UnorderedList2 bpt" {...UnorderedList2Props} {...UnorderedList2Cb} {...UnorderedList2IoProps}/>
</Flex>
<Flex className="p-Home Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Image className="p-Home Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<UnorderedList className="p-Home UnorderedList3 bpt" {...UnorderedList3Props} {...UnorderedList3Cb} {...UnorderedList3IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Projects bpt" {...ProjectsProps} {...ProjectsCb} {...ProjectsIoProps}>
<Flex className="p-Home projects_heading bpt" {...projects_headingProps} {...projects_headingCb} {...projects_headingIoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex>
<Flex className="p-Home heading_and_button bpt" {...heading_and_buttonProps} {...heading_and_buttonCb} {...heading_and_buttonIoProps}>
<Flex className="p-Home heading bpt" {...headingProps} {...headingCb} {...headingIoProps}>
<TextBox className="p-Home TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
</Flex>
<Flex className="p-Home button_flex bpt" {...button_flexProps} {...button_flexCb} {...button_flexIoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home carousel bpt" {...carouselProps} {...carouselCb} {...carouselIoProps}>
<Testimonial className="p-Home Testimonial2 bpt" {...Testimonial2Props} {...Testimonial2Cb} {...Testimonial2IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home blogs_section bpt" {...blogs_sectionProps} {...blogs_sectionCb} {...blogs_sectionIoProps}>
<Flex className="p-Home descriptions bpt" {...descriptionsProps} {...descriptionsCb} {...descriptionsIoProps}>
<Div className="p-Home Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<TextBox className="p-Home TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
<TextBox className="p-Home TextBox63 bpt" {...TextBox63Props} {...TextBox63Cb} {...TextBox63IoProps}/>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Div>
</Flex>
<Flex className="p-Home contents bpt" {...contentsProps} {...contentsCb} {...contentsIoProps}>
<Div className="p-Home Div9 bpt" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<TextBox className="p-Home TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox className="p-Home TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<Button className="p-Home Button13 bpt" {...Button13Props} {...Button13Cb} {...Button13IoProps}/>
</Div>
<Div className="p-Home Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<Div className="p-Home Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Div className="p-Home Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox className="p-Home TextBox79 bpt" {...TextBox79Props} {...TextBox79Cb} {...TextBox79IoProps}/>
<TextBox className="p-Home TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
<Button className="p-Home Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<Div className="p-Home Div15 bpt" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Div className="p-Home Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
<Button className="p-Home Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Div className="p-Home Div16 bpt" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Div className="p-Home Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<TextBox className="p-Home TextBox83 bpt" {...TextBox83Props} {...TextBox83Cb} {...TextBox83IoProps}/>
<TextBox className="p-Home TextBox82 bpt" {...TextBox82Props} {...TextBox82Cb} {...TextBox82IoProps}/>
<Button className="p-Home Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
</Div>
</Div>
</Div>
<Div className="p-Home Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Div className="p-Home Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Div className="p-Home Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
<TextBox className="p-Home TextBox84 bpt" {...TextBox84Props} {...TextBox84Cb} {...TextBox84IoProps}/>
<Button className="p-Home Button23 bpt" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
</Div>
</Div>
</Div>
</Flex>
</Flex>
<Flex className="p-Home product_designer bpt" {...product_designerProps} {...product_designerCb} {...product_designerIoProps}>
<Flex className="p-Home title_and_stuff bpt" {...title_and_stuffProps} {...title_and_stuffCb} {...title_and_stuffIoProps}>
<Div className="p-Home Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Div>
<Div className="p-Home Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Div>
</Flex>
<Flex className="p-Home images bpt" {...imagesProps} {...imagesCb} {...imagesIoProps}>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Image className="p-Home Image20 bpt" {...Image20Props} {...Image20Cb} {...Image20IoProps}/>
</Flex>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Image className="p-Home Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
</Flex>
<Flex className="p-Home Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<Div className="p-Home Div26 bpt" {...Div26Props} {...Div26Cb} {...Div26IoProps}>
<Image className="p-Home Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
</Div>
<Div className="p-Home Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Div>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home edu_work_exp bpt" {...edu_work_expProps} {...edu_work_expCb} {...edu_work_expIoProps}>
<Div className="p-Home Div28 bpt" {...Div28Props} {...Div28Cb} {...Div28IoProps}>
<TextBox className="p-Home edu bpt" {...eduProps} {...eduCb} {...eduIoProps}/>
<Div className="p-Home original_comp bpt" {...original_compProps} {...original_compCb} {...original_compIoProps}>
<Flex className="p-Home Flex68 bpt" {...Flex68Props} {...Flex68Cb} {...Flex68IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
<Flex className="p-Home Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<TextBox className="p-Home TextBox91 bpt" {...TextBox91Props} {...TextBox91Cb} {...TextBox91IoProps}/>
<TextBox className="p-Home TextBox92 bpt" {...TextBox92Props} {...TextBox92Cb} {...TextBox92IoProps}/>
</Flex>
</Div>
<Div className="p-Home Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<Div className="p-Home Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<Flex className="p-Home Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
<Flex className="p-Home Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<TextBox className="p-Home TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<TextBox className="p-Home TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<Div className="p-Home Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
<Image className="p-Home Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex>
</Div>
</Div>
</Div>
<Div className="p-Home Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
<Div className="p-Home Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<Div className="p-Home Div38 bpt" {...Div38Props} {...Div38Cb} {...Div38IoProps}>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox className="p-Home TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<Div className="p-Home Div39 bpt" {...Div39Props} {...Div39Cb} {...Div39IoProps}>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Home Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<Div className="p-Home Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Flex>
</Div>
</Div>
</Div>
</Flex>
<Flex className="p-Home TESTIMONILS bpt" {...TESTIMONILSProps} {...TESTIMONILSCb} {...TESTIMONILSIoProps}>
<Div className="p-Home HEADINGS bpt" {...HEADINGSProps} {...HEADINGSCb} {...HEADINGSIoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Div>
<Div className="p-Home Div44 bpt" {...Div44Props} {...Div44Cb} {...Div44IoProps}>
<Testimonial className="p-Home Testimonial4 bpt" {...Testimonial4Props} {...Testimonial4Cb} {...Testimonial4IoProps}/>
</Div>
</Flex>
<Flex className="p-Home FAQ bpt" {...FAQProps} {...FAQCb} {...FAQIoProps}>
<Div className="p-Home Div45 bpt" {...Div45Props} {...Div45Cb} {...Div45IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
<Flex className="p-Home CONTENTS_FAQ bpt" {...CONTENTS_FAQProps} {...CONTENTS_FAQCb} {...CONTENTS_FAQIoProps}>
<Div className="p-Home LEFT bpt" {...LEFTProps} {...LEFTCb} {...LEFTIoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<TextBox className="p-Home TextBox138 bpt" {...TextBox138Props} {...TextBox138Cb} {...TextBox138IoProps}/>
<TextBox className="p-Home TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
</Flex>
<Flex className="p-Home Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<TextBox className="p-Home TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex>
</Flex>
</Div>
<Div className="p-Home RIGHT bpt" {...RIGHTProps} {...RIGHTCb} {...RIGHTIoProps}>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<TextBox className="p-Home TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox className="p-Home TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
</Flex>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<TextBox className="p-Home TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox className="p-Home TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
</Flex>
</Div>
</Flex>
</Div>
<Flex className="p-Home LAST_SECTION bpt" {...LAST_SECTIONProps} {...LAST_SECTIONCb} {...LAST_SECTIONIoProps}>
<TextBox className="p-Home TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox className="p-Home TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<Flex className="p-Home middle_cont bpt" {...middle_contProps} {...middle_contCb} {...middle_contIoProps}>
<Flex className="p-Home Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<TextBox className="p-Home TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<TextBox className="p-Home TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<TextBox className="p-Home TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
</Flex>
<Flex className="p-Home Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Link className="p-Home Link12 bpt" {...Link12Props} {...Link12Cb} {...Link12IoProps}/>
<Link className="p-Home Link13 bpt" {...Link13Props} {...Link13Cb} {...Link13IoProps}/>
<Link className="p-Home Link14 bpt" {...Link14Props} {...Link14Cb} {...Link14IoProps}/>
</Flex>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Link className="p-Home Link15 bpt" {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
<Link className="p-Home Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
<Link className="p-Home Link22 bpt" {...Link22Props} {...Link22Cb} {...Link22IoProps}/>
</Flex>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Link className="p-Home Link23 bpt" {...Link23Props} {...Link23Cb} {...Link23IoProps}/>
<Link className="p-Home Link24 bpt" {...Link24Props} {...Link24Cb} {...Link24IoProps}/>
<Link className="p-Home Link25 bpt" {...Link25Props} {...Link25Cb} {...Link25IoProps}/>
</Flex>
</Flex>
</Flex>
<TextBox className="p-Home TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
</Flex>
</Flex>
  </>);
}
