/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link, RichTextLink as RichTextLink } from "@webstudio-is/sdk-components-react-router";
import { Fragment as Fragment_1, Image as Image, Box as Box, HtmlEmbed as HtmlEmbed, Slot as Slot, Button as Button, Text as Text, List as List, ListItem as ListItem, Heading as Heading, Paragraph as Paragraph, Span as Span, Blockquote as Blockquote, Separator as Separator, CodeText as CodeText, Bold as Bold } from "@webstudio-is/sdk-components-react";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "574df005-779e-45a7-b2d6-556fa0fbe001";

      export const lastPublished = "2025-11-10T15:18:07.286Z";

      export const siteName = "Division AI - AI";

      export const breakpoints = [{"id":"BUbB44AydOIf9qNv_PLHg"},{"id":"dQgKXINyPpSDVorWy0B6M","maxWidth":991},{"id":"o-5PQv35KtcZsioRfo8Qz","maxWidth":767},{"id":"tsX948Etu5c9y-K5w6tiZ","maxWidth":479}];

      export const favIconAsset: string | undefined =
        "Favicon_DyG84kyAaQLYjss2fogav.png";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        ["Geist-SemiBold_ivxeSVQ133KHNjk2_mK-O.ttf","Geist-Black_DoOykOMzos8vAnCKQWW5g.ttf","Geist-Regular_VG1KEic6WGYjqwxcHSPps.ttf","Geist-Medium_touz0UWiUFmhesvD9IgEl.ttf","Geist-ExtraBold_hlWexONUA1cM_0l8jUzqb.ttf","Geist-Light_kAw-3-GFS55KR4N4-McAo.ttf","Geist-ExtraLight_SthO6YEFPPCN1h8cOYIGp.ttf","Geist-Bold_QuTAgU04waYyZToDjLkGw.ttf","Geist-Thin_ry8s098ngPmMELZCNTh9G.ttf","InterDisplay-SemiBold_EZjylir0CF0aFqquaJVBA.woff2"]

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
return <Body
className={`w-element`}>
<Box
className={`w-box cj0acnr cvz0bk7 cdj4ouf c13vdlm5 c1yy1h14 cqslhsv c18tpy2o c1ba49g0 cx19pg7 cqo9gb0 c1oxn3lz c1ljqnf6`}>
<Box
tag={"nav"}
className={`w-box c1a2nn8y c1tgxiko c1c79ghc c1k8uffu c1uisu9y c1oai28w c6dk4xz c1nmhzl5 cdargc7 cxpm6wx`}>
<Box
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 c1pcbsnh c18tpy2o c5o6vxz cr7ow8s cfnb0k0 cvy9o08 cjd1hdu cd8hz1s`}>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Layout"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Colors"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Links & Buttons"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Elements"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Forms"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Radix"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Utility"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Slots"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Custom"}
</Link>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Notes"}
</Link>
</Box>
</Box>
<Box
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 cqslhsv c18tpy2o c1up33q1 c1xpw6c2 ch8lysy cvy9o08 cjd1hdu`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
className={`w-heading czfahgf cmbklnj c13jbzg0 c1dcoryb cbaaobe c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Style Guide"}
</Heading>
<Text
className={`w-text c17kspyn c1ylo8j1`}>
{"Craft Version 1.2"}
</Text>
<Paragraph
className={`w-paragraph cgb52k9 c17kspyn`}>
{"Here is the community style guide according to "}
<RichTextLink
href={"https://docs.webstudio.is/university/craft"}
target={"_blank"}
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Craft"}
</RichTextLink>
{", the recommended starting point for Webstudio Projects. "}
<RichTextLink
href={"https://docs.webstudio.is/university/foundations/css-variables"}
target={"_blank"}
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"CSS variables"}
</RichTextLink>
{" containing colors, sizes, and more are on the Global Root. "}
</Paragraph>
</Box>
<Box
id={"layout"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Layout"}
</Heading>
</Box>
<Box
className={`w-box c6bl19k c1bg6ke6 c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c18tpy2o c7snqt9 cj0acnr cvz0bk7 c2xq93a c5xuqo c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 cdj4ouf c13vdlm5 c1ba49g0 cx19pg7 cqo9gb0 c1hvpi0a c1ljqnf6`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"section"}
</Text>
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c18tpy2o c1up33q1 c19wh60j cd49bhv cqslhsv c1i96bmg cbvaq1m c13vdlm5 c1pexo8i cvy9o08 cjd1hdu c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"container"}
</Text>
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c6bl19k c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv c1kv8e9p cymkexg ctvlw4z cdj4ouf c1hvpi0a c1tninrk cb1z262 czzohxg`}>
<Box
className={`w-box cnno1zf cde8isq`}>
<Text
className={`w-text`}>
{"grid"}
</Text>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Paragraph
className={`w-paragraph`}>
{"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
<Box
id={"colors"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Colors"}
</Heading>
<Paragraph
className={`w-paragraph c1ylo8j1 cj9ohyc`}>
{"Change these values on the Global Root. It's best practice to map semantic variables such as "}
<Span
className={`w-text-1 c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1oa6opk c1yy78xk c1nmhzl5 cgzwj4a`}>
{"--foreground-primary"}
</Span>
{" to another variable such as "}
<Span
className={`w-text-1 c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1oa6opk c1yy78xk c1nmhzl5 cgzwj4a`}>
{"--gray-10"}
</Span>
{"."}
</Paragraph>
</Box>
<Heading
tag={"h3"}
className={`w-heading c12hih97 cmbklnj c13jbzg0 c1oknqg6 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1ju0scd`}>
{"Foreground"}
</Heading>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--foreground-primary"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r c1dcoryb c1dir2g4`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--foreground-secondary"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r cyseqio c1hvpi0a`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--foreground-accent"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r c17a5rxw c1dir2g4`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--foreground-muted"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r ccu080w c1dir2g4`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--foreground-border"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r c1iqubwj c1dir2g4`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c12hih97 cmbklnj c13jbzg0 c1oknqg6 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1ju0scd`}>
{"Background"}
</Heading>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--background-primary"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r c4arzvq c1hvpi0a`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--background-secondary"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r cj8ef6c c1dir2g4`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--background-accent"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r c11czgv6 c1dir2g4`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--background-card"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r c8nc41v c1dir2g4`} />
</Box>
</Box>
<Heading
tag={"h3"}
className={`w-heading c12hih97 cmbklnj c13jbzg0 c1oknqg6 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1ju0scd`}>
{"Other"}
</Heading>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text coaobgm c1fmrzo c17bh31t c1v3dmg4 cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 cc6h235`}>
{"--focus-color"}
</Text>
<Box
className={`w-box cp6lr6i c1r3zbyi cm3g005 cug62rt c18exb7f cnqri1h c1y7237r c6fv3w3 c1dir2g4`} />
</Box>
</Box>
</Box>
<Box
id={"links-buttons"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Buttons and Links"}
</Heading>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1uyf633 c1up33q1 c19wh60j cd49bhv cqslhsv c100q6ja c6hn1ix c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"button-group"}
</Text>
<Box
className={`w-box c1yy1h14 c1vjljd6 c1up33q1 c1cs0osf caak56t c1mlvnzi c1wfemhv`}>
<Link
className={`w-link c1mli5y2 cjadqu1 c19xm5bo c1hawyvp c4i0mym c8d7h91 cnlbkdv cfryvx9 c1c2cn49 c1zrf2b c688bfk c1tsi9oj c1kynbrv c1m87rmo c16bb09z c1x6f989 c1urcgko c1e47b5d c1zubka cbfhhrz c1pcbsnh c1vjljd6 c7snqt9 c8s27bf cmtzrf9 cjp4s5l c1t3zl8x cvvuwov c1lynz5u`}>
{"button"}
</Link>
<Link
className={`w-link c2tc49r c109t1ip c19xm5bo c1hawyvp c4i0mym c8d7h91 cnlbkdv cfryvx9 c1c2cn49 c1zrf2b c688bfk c1tsi9oj c1kynbrv c1m87rmo c16bb09z c1x6f989 c1urcgko c1e47b5d c1zubka cbfhhrz c1pcbsnh c1vjljd6 c7snqt9 c8s27bf cmtzrf9 cjp4s5l c2chvto cvvuwov c1lynz5u`}>
{"is-button-secondary"}
</Link>
</Box>
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1uyf633 c1up33q1 c19wh60j cd49bhv cqslhsv c100q6ja c6hn1ix c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"link"}
</Text>
<Link
className={`w-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"Link text you can edit"}
</Link>
</Box>
</Box>
</Box>
<Box
id={"elements"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Elements"}
</Heading>
</Box>
<Box
className={`w-box c1yy1h14 cqslhsv cnuwwpq c1hdglil`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"heading-1|2|3|4|5|6"}
</Text>
<Heading
className={`w-heading czfahgf cmbklnj c13jbzg0 c1dcoryb cbaaobe c1eazt7e c1oxn3lz c1oknqg6 c1ju0scd`}>
{"Heading 1"}
</Heading>
<Heading
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e c1oxn3lz c1oknqg6 c1ju0scd`}>
{"Heading 2"}
</Heading>
<Heading
className={`w-heading c12hih97 cmbklnj c13jbzg0 c1oknqg6 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1ju0scd`}>
{"Heading 3"}
</Heading>
<Heading
className={`w-heading c1c7f0fg cmbklnj c13jbzg0 c1oknqg6 c1dcoryb c1f43ze9 c10ispcc c1hoftuj c1ju0scd`}>
{"Heading 4"}
</Heading>
<Heading
className={`w-heading c17kspyn cmbklnj c13jbzg0 c1oknqg6 c1dcoryb c1ju0scd c1oxn3lz`}>
{"Heading 5"}
</Heading>
<Heading
className={`w-heading c1e47b5d cmbklnj c13jbzg0 c1oknqg6 c1dcoryb c1ju0scd cjp4s5l`}>
{"Heading 6"}
</Heading>
<Paragraph
className={`w-paragraph c12o7y4c c1y20lqd c7uiyj7 cpe9nfc c13w0yqy c103lu8d c1oknqg6 c17a5rxw cjp4s5l`}>
{"Eyebrow Text here"}
</Paragraph>
<Paragraph
className={`w-paragraph c1wtqln7 c1lq0qt1 c103lu8d c1oknqg6 cjp4s5l`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines — xs"}
</Paragraph>
<Paragraph
className={`w-paragraph c12o7y4c c1lq0qt1 c103lu8d c1oknqg6 cjp4s5l`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines — s"}
</Paragraph>
<Paragraph
className={`w-paragraph c103lu8d c1oknqg6 c1e47b5d c1lq0qt1 cjp4s5l`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines — m"}
</Paragraph>
<Paragraph
className={`w-paragraph ce3obpg c1lq0qt1 c103lu8d c1oknqg6 cjp4s5l`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines — l"}
</Paragraph>
<Paragraph
className={`w-paragraph c1387y3q c1f43ze9 c10ispcc c103lu8d c1oknqg6 cjp4s5l`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines — xl"}
</Paragraph>
<Paragraph
className={`w-paragraph cxk33v3 c1f43ze9 c10ispcc c103lu8d c1oknqg6 cjp4s5l`}>
{"Paragraph "}
<RichTextLink
className={`w-rich-text-link c9y6mpi c14glv3u c5ubtx9 c5kn4zb cjp4s5l cvvuwov c1lynz5u`}>
{"text you"}
</RichTextLink>
{" can edit"}
{""}
<br />
{""}
{"that spans multiple lines — 2xl"}
</Paragraph>
<Blockquote
className={`w-blockquote cmbhxyj cjp4s5l c170erjr c15uchon c150vaqc c11c0t97`}>
<Span
className={`w-text-1 ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"blockquote"}
</Span>
{" text you can edit"}
</Blockquote>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5 c1oxn3lz`}>
{"list"}
</Text>
<List
className={`w-list cmbhxyj c1yf9hrd c103lu8d`}>
<ListItem
className={`w-list-item cjp4s5l`}>
<Span
className={`w-text-1 ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"list-item"}
</Span>
{" text you can edit"}
</ListItem>
<ListItem
className={`w-list-item cjp4s5l`}>
{"List Item text you can edit"}
</ListItem>
<ListItem
className={`w-list-item cjp4s5l`}>
{"List Item text you can edit"}
</ListItem>
</List>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"separator"}
</Text>
<Separator
className={`w-separator c4lcrar c13vdlm5 c13jbzg0 cmbhxyj`} />
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"code"}
</Text>
<CodeText
code={"console.log(\"Hello World\");"}
lang={""}
className={`w-code-text c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1oa6opk c1yy78xk c1nmhzl5 cgzwj4a`} />
</Box>
</Box>
<Box
id={"forms"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Forms"}
</Heading>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"radix"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Radix"}
</Heading>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"utility"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Utility"}
</Heading>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"slots"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Slots"}
</Heading>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"my-slot"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"custom"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Custom"}
</Heading>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Text
className={`w-text ce8lm63 c1fmrzo c17bh31t c1mkyszr cankvxi c1f17te8 c6iov1l cg94l5a c1m5tfbw c15wgqo5`}>
{"my-token"}
</Text>
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Notes"}
</Heading>
<Paragraph
className={`w-paragraph c1ylo8j1 cj9ohyc`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Paragraph
className={`w-paragraph`}>
{"These are global CSS variables added in addition to Open Props."}
</Paragraph>
<CodeText
code={"--foreground-primary\n--foreground-secondary\n--foreground-accent\n--foreground-muted\n--foreground-border\n\n--background-primary\n--background-secondary\n--background-accent\n--background-card\n\n--gap-xs\n--gap-s\n--gap-m\n--gap-l\n\n--focus-color\n--focus-width\n--focus-offset\n\n--duration-default\n--easing-default"}
className={`w-code-text c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1nmhzl5 c13vdlm5 cgzwj4a c16eaai2`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1uyf633 c1up33q1 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Paragraph
className={`w-paragraph`}>
<Bold
className={`w-bold-text`}>
{"Want to start with a light theme?"}
</Bold>
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Click "}
<Span
className={`w-text-1 c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1oa6opk c1yy78xk c1nmhzl5 cgzwj4a`}>
{"+"}
</Span>
{" in Advanced on the Global Root and paste in the following:"}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-10);\n--foreground-muted: var(--gray-7);\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-10);"}
className={`w-code-text c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1nmhzl5 c13vdlm5 cgzwj4a c16eaai2`} />
</Box>
</Box>
</Box>
<Box
id={"notes"}
className={`w-box c1yy1h14 cqslhsv c1qte0lb c13jz1cw c18tpy2o`}>
<Box
className={`w-box c1yy1h14 cqslhsv cr7ow8s cfnb0k0 c1o1nsag`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"Additional Variables"}
</Heading>
<Paragraph
className={`w-paragraph c1ylo8j1 cj9ohyc`}>
{"Add notes for yourself or other creators that explain any nuances of the build."}
</Paragraph>
</Box>
<Box
className={`w-box c6bl19k ctvlw4z c1kv8e9p c1vawj6b czbptpk`}>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1vjljd6 c7snqt9 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Paragraph
className={`w-paragraph`}>
{"These are global CSS variables added in addition to Open Props."}
</Paragraph>
<CodeText
code={"--grids"}
className={`w-code-text c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1nmhzl5 c13vdlm5 cgzwj4a c16eaai2`} />
</Box>
<Box
className={`w-box czcwc7u c1vbz4vy c1wb9a5w c14ty4es c1yy1h14 c1uyf633 c1up33q1 c19wh60j cd49bhv cqslhsv cs35nmn c1rbmse8 c1hvpi0a c1tninrk`}>
<Paragraph
className={`w-paragraph`}>
<Bold
className={`w-bold-text`}>
{"Want to start with a light theme?"}
</Bold>
</Paragraph>
<Paragraph
className={`w-paragraph`}>
{"Click "}
<Span
className={`w-text-1 c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1oa6opk c1yy78xk c1nmhzl5 cgzwj4a`}>
{"+"}
</Span>
{" in Advanced on the Global Root and paste in the following:"}
</Paragraph>
<CodeText
code={"--foreground-primary: var(--gray-10);\n--foreground-muted: var(--gray-7);\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-10);"}
className={`w-code-text c18h8v9h c11d7nc2 c1btvs8q c1fxm42y c1nmhzl5 c13vdlm5 cgzwj4a c16eaai2`} />
</Box>
</Box>
</Box>
</Box>
<Box
className={`w-box cpl5mv9 c8853sf c1yy1h14 c1vjljd6 c7snqt9 cqslhsv`}>
<Box
data-ox-dropdown-container={""}
data-ox-dropdown-trigger={"hover"}
className={`w-box cdj4ouf`}>
<Button
type={"button"}
id={"dropdownButton1"}
aria-haspopup={"true"}
aria-expanded={false}
aria-controls={"dropdownMenu1"}
data-ox-dropdown-button={""}
className={`w-button cbfhhrz c1vjljd6 c7snqt9 cexn8ke cedtyv2 c109t1ip c1nafuoq cq45erh c1ataeb5 c1dokf2o c19hgrti c1sqkvrk cv7qgcc cfw7kax cnih2gv cme7mz6 czpyre5`}>
<Text
tag={"span"}
className={`w-text`}>
{"Options"}
</Text>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down-icon lucide-chevron-down\"><path d=\"m6 9 6 6 6-6\"/></svg>"}
className={`w-html-embed`} />
</Button>
<List
role={"menu"}
id={"dropdownMenu1"}
aria-labelledby={"dropdownButton1"}
data-ox-dropdown-menu={""}
className={`w-list c16hvdnw cz073dn cnlbkdv cfryvx9 c1c2cn49 c1zrf2b c4lvzeh c1anr6nz c1uisu9y c17nwjzw c13vdlm5 c1g9gtxh cyc27i2 c18lkmov c1oo0sn8`}>
<ListItem
role={"none"}
className={`w-list-item`}>
<Link
role={"menuitem"}
className={`w-link c1dcoryb cbfhhrz c5ubtx9 c688bfk cjp4s5l cnih2gv c1juhshi cjntuuo c174dk35 c17vgcg8 c13vdlm5 cme7mz6 c52sx32 cvvuwov cxi7zye`}>
{"Menu Link"}
</Link>
</ListItem>
<ListItem
role={"none"}
className={`w-list-item`}>
<Link
role={"menuitem"}
className={`w-link c1dcoryb cbfhhrz c5ubtx9 c688bfk cjp4s5l cnih2gv c1juhshi cjntuuo c174dk35 c17vgcg8 c13vdlm5 cme7mz6 c52sx32 cvvuwov cxi7zye`}>
{"Menu Link"}
</Link>
</ListItem>
<ListItem
role={"none"}
className={`w-list-item`}>
<Link
role={"menuitem"}
className={`w-link c1dcoryb cbfhhrz c5ubtx9 c688bfk cjp4s5l cnih2gv c1juhshi cjntuuo c174dk35 c17vgcg8 c13vdlm5 cme7mz6 c52sx32 cvvuwov cxi7zye`}>
{"Menu Link"}
</Link>
</ListItem>
<ListItem
role={"none"}
className={`w-list-item`}>
<Link
role={"menuitem"}
className={`w-link c1dcoryb cbfhhrz c5ubtx9 c688bfk cjp4s5l cnih2gv c1juhshi cjntuuo c174dk35 c17vgcg8 c13vdlm5 cme7mz6 c52sx32 cvvuwov cxi7zye`}>
{"Menu Link"}
</Link>
</ListItem>
</List>
<HtmlEmbed
code={"<style>\n          \n    [data-ox-dropdown-button]:focus {\n        outline: var(--focus-width) solid var(--focus-color);\n        outline-offset: var(--focus-offset);\n    }\n\n    \n    [data-ox-dropdown-menu] {\n        display: none; \n    }\n\n    [data-ox-dropdown-menu] li a:focus {\n      outline-offset: calc(-1 * var(--focus-offset));\n    }\n\n    [data-ox-dropdown-menu][data-ox-dropdown-show=\"true\"] {\n        display: block;\n    }\n\n    @media (max-width: 991px) {\n      [data-ox-dropdown-container] {\n           display: block; \n      }\n      \n      [data-ox-dropdown-button][aria-expanded=\"true\"] {\n           border-bottom-left-radius: 0;\n           border-bottom-right-radius: 0;\n      }\n    }\n\n</style>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script>\n    // Initialize all dropdown components on the page.\n    document.querySelectorAll('[data-ox-dropdown-container]').forEach(container => {\n        const button = container.querySelector('[data-ox-dropdown-button]');\n        const menu = container.querySelector('[data-ox-dropdown-menu]');\n        const menuItems = menu.querySelectorAll('[role=\"menuitem\"]');\n        const configuredTrigger = container.dataset.oxDropdownTrigger || 'click'; // Read configured trigger\n        let closeTimeout; // Timeout ID for hover delay\n\n        // Determine if the primary input mechanism supports hover.\n        const supportsHover = window.matchMedia('(hover: hover)').matches;\n\n        // Use hover trigger ONLY if configured AND supported, otherwise fallback to click.\n        const effectiveTrigger = (configuredTrigger === 'hover' && supportsHover) ? 'hover' : 'click';\n\n        // Toggle the menu's visibility and ARIA state.\n        function toggleMenu(show) {\n            const isShown = menu.dataset.oxDropdownShow === 'true';\n            const targetState = typeof show === 'boolean' ? show : !isShown; \n            \n            menu.dataset.oxDropdownShow = targetState ? 'true' : 'false'; \n            button.setAttribute('aria-expanded', targetState);\n\n             if (!targetState) {\n                delete menu.dataset.oxDropdownShow;\n             }\n        }\n\n        // --- Event Listener Setup based on Effective Trigger Type ---\n\n        if (effectiveTrigger === 'hover') {\n            // HOVER: Open on entering container, close on leaving (with delay)\n            container.addEventListener('mouseenter', () => {\n                clearTimeout(closeTimeout); \n                toggleMenu(true); \n            });\n\n            container.addEventListener('mouseleave', () => {\n                closeTimeout = setTimeout(() => {\n                    toggleMenu(false);\n                }, 150); \n            });\n\n            // Keyboard can still open hover menus\n            button.addEventListener('keydown', (event) => {\n                if ( (event.key === 'Enter' || event.key === ' ') && menu.dataset.oxDropdownShow !== 'true') {\n                    event.preventDefault(); \n                    toggleMenu(true);\n                    if (menuItems.length > 0) menuItems[0].focus(); \n                }\n            });\n\n        } else { \n            // CLICK (default or fallback): Use mousedown for responsiveness\n            button.addEventListener('mousedown', (event) => {\n                event.stopPropagation(); \n                toggleMenu(); \n                if (menu.dataset.oxDropdownShow === 'true' && menuItems.length > 0) {\n                    setTimeout(() => { menuItems[0].focus(); }, 0); \n                }\n            });\n             // Keyboard support for click mode\n            button.addEventListener('keydown', (event) => {\n                if ( (event.key === 'Enter' || event.key === ' ') && menu.dataset.oxDropdownShow !== 'true') {\n                     event.preventDefault(); \n                     toggleMenu(true);\n                     if (menuItems.length > 0) menuItems[0].focus(); \n                 }\n            });\n        }\n\n        // --- Common Event Listeners (Apply to both modes) ---\n\n        // Handle keyboard navigation within the menu.\n        menu.addEventListener('keydown', (event) => {\n            if (menuItems.length === 0) return; \n\n            const currentFocusIndex = Array.from(menuItems).indexOf(document.activeElement);\n\n            switch (event.key) {\n                case 'ArrowDown':\n                    event.preventDefault(); \n                    menuItems[(currentFocusIndex + 1) % menuItems.length].focus();\n                    break;\n                case 'ArrowUp':\n                    event.preventDefault(); \n                    menuItems[(currentFocusIndex - 1 + menuItems.length) % menuItems.length].focus();\n                    break;\n                case 'Escape':\n                    toggleMenu(false); \n                    button.focus(); \n                    break;\n                case 'Home': \n                    event.preventDefault();\n                    if (menuItems.length > 0) menuItems[0].focus();\n                    break;\n                case 'End': \n                    event.preventDefault();\n                     if (menuItems.length > 0) menuItems[menuItems.length - 1].focus();\n                    break;\n                case 'Tab': \n                    toggleMenu(false); // Close on Tab\n                    break;\n            }\n        });\n\n        // Close menu if clicking outside the container.\n        document.addEventListener('click', (event) => {\n            if (menu.dataset.oxDropdownShow === 'true' && !container.contains(event.target)) {\n                 toggleMenu(false); \n            }\n        });\n\n        // Handle Escape keydown on the button itself.\n        button.addEventListener('keydown', (event) => {\n             if (event.key === 'Escape' && menu.dataset.oxDropdownShow === 'true') {\n                 toggleMenu(false);\n             }\n             // Allow ArrowDown to open menu from button.\n             if ( event.key === 'ArrowDown' && menu.dataset.oxDropdownShow !== 'true') {\n                 event.preventDefault(); \n                 toggleMenu(true);\n                 if (menuItems.length > 0) menuItems[0].focus(); \n             }\n        });\n\n    }); \n\n</script>"}
executeScriptOnCanvas={true}
className={`w-html-embed`} />
</Box>
</Box>
</Box>
<Box
className={`w-box c13vdlm5 c1ba49g0 c1yy1h14 cqslhsv c1vjljd6 c7snqt9 cie8ayp c1vv23wf cvy9o08 cjd1hdu cj0acnr cvz0bk7 cdj4ouf cx19pg7 cqo9gb0 c1ljqnf6`}>
<Heading
tag={"h2"}
className={`w-heading c1fz6616 cmbklnj c13jbzg0 c1dcoryb c7uiyj7 c1eazt7e cjp4s5l c1oknqg6 c1ju0scd`}>
{"👇Template for new pages👇"}
</Heading>
<Paragraph
className={`w-paragraph cj9ohyc cankvxi ccu080w`}>
{"When creating a new page, you can copy the \"Page Wrapper\" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section."}
</Paragraph>
</Box>
<Box
className={`w-box`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1c79ghc c1k8uffu c1oai28w c862ump c1uisu9y c1p0o347 c79k29j cyc27i2 c18lkmov ${"__guide_wrap"}`}>
<HtmlEmbed
code={"<style>\n  /*\n  html:not([style]) .__guide_wrap {\n    display: none;\n  }\n  */\n  \n  body:not([tabindex=\"0\"]) .__guide_wrap {\n    display: none;\n}\n\n.__guide_layout {\n\tcounter-reset: gridguides;\n}\n.__guide_layout > div::before {\n  counter-increment: gridguides;\n  content: counter(gridguides);\n}\n</style>"}
className={`w-html-embed`} />
<Box
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 cqslhsv c18tpy2o c1up33q1 c1i96bmg cbvaq1m cvy9o08 cjd1hdu cdj4ouf`}>
<Box
className={`w-box c6bl19k ckpr2qz cymkexg c1kv8e9p ${"__guide_layout"}`}>
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
<Box
className={`w-box cuewl4i c1lvhfuu c1m9vg17 c1yy1h14 c1sql6pn c7snqt9 c12i6pqm`} />
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Slot>
<Fragment_1>
<HtmlEmbed
code={"<style>\n</style>"}
className={`w-html-embed`} />
<Box
data-ws-tag="header"
className={`w-box c1wfemhv c1hisa3c clizd39 c1g9gtxh c1yy1h14 cqslhsv c18tpy2o c7snqt9 c17xs2d0 c92hb4e c18na1fj cegqwhp c4a5f52 c1xn90a6 c1tx1w8l c1babebp c37c3mu`}>
<Box
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 c1pcbsnh c1vjljd6 c5o6vxz c1kv8e9p cymkexg cvy9o08 cjd1hdu`}>
<Slot>
<Fragment_1>
<Link
id={"logo"}
href={"#"}
aria-label={"Replace title here"}
className={`w-link c1yy1h14 c1vjljd6 c1up33q1 c1nz4vrs cisko3o csf1h5l c19acw49`}>
<Image
src={"/assets/Division_AI_Logo_ak15lTakLNCm56yKYxUvb.svg"}
width={298}
height={81}
loading={"eager"}
alt={""}
className={`w-image cedizzd caf6nod cyg4e01`} />
</Link>
</Fragment_1>
</Slot>
<Box
data-ws-tag="nav"
className={`w-box c1yy1h14 c1pcbsnh c1vjljd6 c173q472 c19wh60j cd49bhv c16e8g5z c1570f9i c17w84na`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1yy1h14 c1vjljd6 c1up33q1 c1cs0osf caak56t c1mlvnzi cb9ctts c579h8g c1babebp c1rq10xq`}>
<Link
href={"/book"}
className={`w-link c1mli5y2 cjadqu1 c19xm5bo c1hawyvp c4i0mym c8d7h91 cnlbkdv cfryvx9 c1c2cn49 c1zrf2b c688bfk c1tsi9oj c1kynbrv c1m87rmo c16bb09z c1x6f989 c1urcgko c1e47b5d c1zubka cbfhhrz c1pcbsnh c1vjljd6 c7snqt9 c8s27bf cmtzrf9 cjp4s5l c1t3zl8x cvvuwov c1lynz5u`}>
{"Get Started"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
<Box
className={`w-box c19lwkmo cw2bd8p`}>
<Dialog>
<DialogTrigger>
<Button
ox-menu-button={""}
className={`w-button c1tx1w8l c1475gx5 cu7pdvc ceytkeq c14qr4yk cmnwuub c1oqb2tv cbfhhrz c1vjljd6 c7snqt9 c109t1ip c1tuzzwr c3auzj5 c13w0yqy cygdkvs cjqoyva cb9ctts cz7e457 c1oy79y1 c1c9pfs9 c1f1q1l1 ct999m8 czdxaja crdke7c c98zp7r c19yh05u`}>
<Box
ox-menu-line={"top"}
className={`w-box cmaujbg cnfrkju c53grdr`} />
<Box
ox-menu-line={"middle"}
className={`w-box cmaujbg cnfrkju c53grdr cxaqw9q crxbthv cb1z262 c1htlmna c1p1r0dq`}>
<Box
className={`w-box coop3dw c10bwasf`} />
</Box>
<Box
ox-menu-line={"bottom"}
className={`w-box cmaujbg cnfrkju c53grdr`} />
<HtmlEmbed
code={"<style>\n  \n  [ox-menu-line=\"top\"],\n  [ox-menu-line=\"middle\"],\n  [ox-menu-line=\"bottom\"] {\n    transition: transform 150ms ease;\n  }\n\n  [ox-menu-line=\"middle\"] {\n    transition: width 150ms ease-in-out;\n  }\n\n  [ox-menu-button][data-state=\"open\"] [ox-menu-line=\"top\"] {\n    transform: translateY(8px) rotate(45deg);\n  }\n\n  [ox-menu-button][data-state=\"open\"] [ox-menu-line=\"bottom\"] {\n    transform: translateY(-8px) rotate(-45deg);\n  }\n\n  [ox-menu-button][data-state=\"open\"] [ox-menu-line=\"middle\"] {\n    width: 0;\n  }\n\n</style>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cfwbj4l csjcq1i cyuqcay c1vxuysr c1g9gtxh ceyle9l c1yy1h14 cqslhsv cdargc7 cxpm6wx c1c79ghc`}>
<DialogContent
className={`w-dialog-content c13vdlm5 c1yy1h14 cqslhsv c930xhe c1avth1u c1vxuysr cdj4ouf cpa7f30 chfse1z c17xs2d0 c92hb4e c18na1fj cegqwhp`}>
<Box
data-ws-tag="nav"
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 cqslhsv c18tpy2o c1up33q1 c1i96bmg cbvaq1m cvy9o08 cjd1hdu c1xn90a6 c1tx1w8l c1d7us0l c43b69p`}>
<Slot>
<Fragment_1>
<Box
className={`w-box c1yy1h14 c1vjljd6 c1up33q1 c1cs0osf caak56t c1mlvnzi cb9ctts c579h8g c1babebp c1rq10xq`}>
<Link
href={"/book"}
className={`w-link c1mli5y2 cjadqu1 c19xm5bo c1hawyvp c4i0mym c8d7h91 cnlbkdv cfryvx9 c1c2cn49 c1zrf2b c688bfk c1tsi9oj c1kynbrv c1m87rmo c16bb09z c1x6f989 c1urcgko c1e47b5d c1zubka cbfhhrz c1pcbsnh c1vjljd6 c7snqt9 c8s27bf cmtzrf9 cjp4s5l c1t3zl8x cvvuwov c1lynz5u`}>
{"Get Started"}
</Link>
</Box>
</Fragment_1>
</Slot>
</Box>
</DialogContent>
</DialogOverlay>
</Dialog>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
<Box
tag={"main"}
className={`w-box`}>
<Box
tag={"section"}
className={`w-box cj0acnr cvz0bk7 cdj4ouf c13vdlm5 c1yy1h14 cqslhsv c18tpy2o c1ba49g0 cx19pg7 cqo9gb0 c1ljqnf6`}>
<Box
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 cqslhsv c18tpy2o c1up33q1 c1i96bmg cbvaq1m cvy9o08 cjd1hdu`} />
</Box>
</Box>
<Slot>
<Fragment_1>
<Box
tag={"footer"}
className={`w-box`}>
<Box
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 cqslhsv c18tpy2o c1up33q1 c1i96bmg cbvaq1m cvy9o08 cjd1hdu`}>
<Box
data-ws-tag="footer"
aria-label={"Footer Navigation"}
className={`w-box cm8mp6k c1nhtau8 cdj4ouf c13vdlm5 c1yy1h14 cqslhsv c18tpy2o c1ba49g0 cx19pg7 cqo9gb0 c1g9gtxh c1ljqnf6`}>
<Box
className={`w-box c13vdlm5 c1pexo8i c1yy1h14 cqslhsv c18tpy2o c7snqt9 c1kv8e9p cymkexg cvy9o08 cjd1hdu`}>
<Box
className={`w-box c1yy1h14 cqslhsv c1vjljd6 c1kv8e9p cymkexg`}>
<Slot>
<Fragment_1>
<Link
href={"#"}
aria-label={"Replace title here"}
className={`w-link`}>
<Image
src={"/assets/Division_AI_Logo_ak15lTakLNCm56yKYxUvb.svg"}
width={298}
height={81}
alt={""}
className={`w-image cedizzd caf6nod`} />
</Link>
</Fragment_1>
</Slot>
<Box
data-ws-tag="nav"
className={`w-box`}>
</Box>
</Box>
<Separator
className={`w-separator c4lcrar cvpjddj c5194n1 cdj4ouf cv7xc4j`} />
<Box
className={`w-box c1yy1h14 c1pcbsnh c1vjljd6 c7snqt9 c1kv8e9p cymkexg c1rqccsq czzohxg`}>
<Paragraph
className={`w-paragraph c103lu8d c1oknqg6 c1e47b5d c1lq0qt1 cjp4s5l c1dcoryb c1xb0n0h`}>
{"© 2025 Division AI - All rights reserved"}
</Paragraph>
</Box>
</Box>
</Box>
</Box>
</Box>
</Fragment_1>
</Slot>
</Box>
</Body>
}


      export { Page }
    