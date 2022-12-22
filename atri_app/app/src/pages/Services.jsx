import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Menu as Menu1 } from "@atrilabs/react-component-manifests/src/manifests/Menu/Menu.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex42Cb, useFlex39Cb, useFlex35Cb, useFlex40Cb, useMenu3Cb, useFlex34Cb, useFlex41Cb, useFlex37Cb, useFlex38Cb, useButton10Cb, useTextBox43Cb, useTextBox44Cb, useTextBox45Cb, useTextBox46Cb, useTextBox47Cb, useFlex36Cb, useTextBox39Cb, useTextBox40Cb, useTextBox41Cb, useTextBox42Cb, useImage11Cb, useImage12Cb } from "../page-cbs/Services";
import "../page-css/Services.css";
import "../custom/Services";

export default function Services() {
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

  const Flex42Props = useStore((state)=>state["Services"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Services"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex39Props = useStore((state)=>state["Services"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Services"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex35Props = useStore((state)=>state["Services"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Services"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex40Props = useStore((state)=>state["Services"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Services"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Menu3Props = useStore((state)=>state["Services"]["Menu3"]);
const Menu3IoProps = useIoStore((state)=>state["Services"]["Menu3"]);
const Menu3Cb = useMenu3Cb()
const Flex34Props = useStore((state)=>state["Services"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Services"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Flex41Props = useStore((state)=>state["Services"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Services"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex37Props = useStore((state)=>state["Services"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Services"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex38Props = useStore((state)=>state["Services"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Services"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Button10Props = useStore((state)=>state["Services"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Services"]["Button10"]);
const Button10Cb = useButton10Cb()
const TextBox43Props = useStore((state)=>state["Services"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Services"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox44Props = useStore((state)=>state["Services"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Services"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const TextBox45Props = useStore((state)=>state["Services"]["TextBox45"]);
const TextBox45IoProps = useIoStore((state)=>state["Services"]["TextBox45"]);
const TextBox45Cb = useTextBox45Cb()
const TextBox46Props = useStore((state)=>state["Services"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Services"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Services"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Services"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Flex36Props = useStore((state)=>state["Services"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Services"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const TextBox39Props = useStore((state)=>state["Services"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Services"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const TextBox40Props = useStore((state)=>state["Services"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Services"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const TextBox41Props = useStore((state)=>state["Services"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Services"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox42Props = useStore((state)=>state["Services"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Services"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image11Props = useStore((state)=>state["Services"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Services"]["Image11"]);
const Image11Cb = useImage11Cb()
const Image12Props = useStore((state)=>state["Services"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Services"]["Image12"]);
const Image12Cb = useImage12Cb()

  return (<>
  <Flex1 className="p-Services Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Flex1 className="p-Services Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Flex1 className="p-Services Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Image1 className="p-Services Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex1>
<Flex1 className="p-Services Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Image1 className="p-Services Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Services Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Flex1 className="p-Services Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox1 className="p-Services TextBox45 bpt" {...TextBox45Props} {...TextBox45Cb} {...TextBox45IoProps}/>
<TextBox1 className="p-Services TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
<TextBox1 className="p-Services TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
<TextBox1 className="p-Services TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
<TextBox1 className="p-Services TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-Services Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Flex1 className="p-Services Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}/>
<Menu1 className="p-Services Menu3 bpt" {...Menu3Props} {...Menu3Cb} {...Menu3IoProps}>
<Flex1 className="p-Services Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<TextBox1 className="p-Services TextBox39 bpt" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
<TextBox1 className="p-Services TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<TextBox1 className="p-Services TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox1 className="p-Services TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex1>
</Menu1>
</Flex1>
</Flex1>
<Button1 className="p-Services Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
  </>);
}
