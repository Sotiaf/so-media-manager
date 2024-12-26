import { Meta, StoryObj } from "@storybook/react";
import { SoMediaManager } from "./SoMediaManager";
import { ActionOpts } from "../../models/action-options.model";
import { FileModel } from "../../models/file.model";
import { SoMediaManagerAction } from "../../enums/actions";
import { SettingIcon } from '../icons/SettingIcon';
import dayjs from "dayjs";
import { fn } from "@storybook/test";

const meta: Meta = {
  title: 'So Media Manager',
  component: SoMediaManager,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  //args: { onClick: fn() },
} satisfies Meta<typeof SoMediaManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    folderChain: [
      {
        "id": "FR",
        "name": "FR",
        "isDir": true
      },
      {
        "id": "2023_10_1",
        "name": "2023_10",
        "isDir": true
      },
      {
        "id": "treated_2",
        "name": "treated",
        "isDir": true
      }
    ],
    files: [
      {
        "id": "Test archivage.zip",
        "name": "Test archivage.zip",
        "ext": "",
        "isDir": false,
        "size": 35148,
        "modDate": "2024-01-24T14:56:40.277Z",
        "thumbnailUrl": ""
      },
      {
        "id": "Super vacances en famille !.avi",
        "name": "Super vacances en famille !.avi",
        "ext": "",
        "isDir": false,
        "size": 35148,
        "modDate": "2024-02-12T14:00:33.277Z",
        "thumbnailUrl": ""
      },
      {
        "id": "BrushScriptStd.otf_2",
        "name": "BrushScriptStd.otf",
        "ext": "",
        "isDir": false,
        "size": 35148,
        "modDate": "2024-01-24T14:56:40.277Z",
        "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/font/BrushScriptStd.otf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T131656Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=980ab87daf6e7bdb6e2f4127b16c2cfeaf30cdb2ebdef96effb1b3e0a842aa71"
      },
      {
        "id": "FR_0000_00_00_00_ANT.html_3",
        "name": "FR_0000_00_00_00_ANT.html",
        "ext": "",
        "isDir": false,
        "size": 3057,
        "modDate": "2023-12-08T11:12:38.480Z",
        "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0000_00_00_00_ANT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a870a60999e397203fdbe113fc80636218e745883dea0e12eaf1a9005bb29d1d"
      },
      // {
      //   "id": "FR_0000_00_00_00_MAR.html_4",
      //   "name": "FR_0000_00_00_00_MAR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2322,
      //   "modDate": "2023-12-08T11:12:38.593Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0000_00_00_00_MAR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=69484722f2a237e75fd60b74a54e798a9551b62d673856eb73cfff67af0cb922"
      // },
      // {
      //   "id": "FR_0000_00_00_00_SYM.html_5",
      //   "name": "FR_0000_00_00_00_SYM.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 1361,
      //   "modDate": "2023-12-08T11:12:38.681Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0000_00_00_00_SYM.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b5d41784aec7c0a39f298945b50cfa4edde17329de43f78bb9a6522129121c28"
      // },
      // {
      //   "id": "FR_0000_00_00_00_TED.html_6",
      //   "name": "FR_0000_00_00_00_TED.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 1914,
      //   "modDate": "2023-12-08T11:12:38.767Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0000_00_00_00_TED.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5811b17431c45284cdc349f665e749ae2dd78953bb76ceaaf3381baa2fbb620a"
      // },
      {
        "id": "31e_TO_A_ps130.png_5",
        "name": "31e_TO_A_ps130.png",
        "ext": "",
        "isDir": false,
        "size": 20967,
        "modDate": "2023-10-23T14:28:07.950Z",
        "thumbnailUrl": "https://static.vecteezy.com/system/resources/thumbnails/008/695/917/small_2x/no-image-available-icon-simple-two-colors-template-for-no-image-or-picture-coming-soon-and-placeholder-illustration-isolated-on-white-background-vector.jpg"
      },
      {
        "id": "32e_TO_A_ps62.png_6",
        "name": "32e_TO_A_ps62.png",
        "ext": "",
        "isDir": false,
        "size": 17652,
        "modDate": "2023-10-23T14:27:48.872Z",
        // "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/2023_11/treated/image/32e_TO_A_ps62.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T104830Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=871117bb66a8768c2617524acf9b0440f47393329dea05530a7003afe0173abd"
      },
      // {
      //   "id": "Christ_Roi_du_monde_04_Track4.mp3_5",
      //   "name": "Christ_Roi_du_monde_04_Track4.mp3",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2870420,
      //   "modDate": "2023-10-23T14:26:44.584Z",
      //   "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/2023_11/treated/mp3/Christ_Roi_du_monde_04_Track4.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T104855Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=08ab9a0878255eae768017d57490230257dda74f09f4bc4ccf9ab339e686992d"
      // },
      {
        "id": "EnsembleVocaldeSaintChristophedeJavel_HymnesduTempsOrdinaire_Vol2_14_Heureux_ceux_que_Dieu_a_choisis.mp3_6",
        "name": "EnsembleVocaldeSaintChristophedeJavel_HymnesduTempsOrdinaire_Vol2_14_Heureux_ceux_que_Dieu_a_choisis.mp3",
        "ext": "",
        "isDir": false,
        "size": 3871004,
        "modDate": "2023-10-23T14:26:47.013Z",
        "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/2023_11/treated/mp3/EnsembleVocaldeSaintChristophedeJavel_HymnesduTempsOrdinaire_Vol2_14_Heureux_ceux_que_Dieu_a_choisis.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T104855Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d7dac860e040f711581136a2ccc52adb900f7b472737a52630e6e4e023190116"
      },
      // {
      //   "id": "FR_0372_23_11_00_H.pdf_5",
      //   "name": "FR_0372_23_11_00_H.pdf",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 38245,
      //   "modDate": "2023-10-23T14:26:56.765Z",
      //   "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/2023_11/treated/pdf/FR_0372_23_11_00_H.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T104950Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1cf9fae23b6d55cc4743ec5f9f41f5af86c51583a2850f3dfc42886a8d211dec"
      // },
      {
        "id": "FR_0372_23_11_00_M.pdf_6",
        "name": "FR_0372_23_11_00_M.pdf",
        "ext": "",
        "isDir": false,
        "size": 44591,
        "modDate": "2023-10-23T14:26:57.078Z",
        "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/2023_11/treated/pdf/FR_0372_23_11_00_M.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T104950Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2546458b59458ce9d83101996b2aaffd700fa291b3e67a9b33178f2f91566f64"
      }, {
        "id": "FR_EDITO_STD.css_4",
        "name": "FR_EDITO_STD.css",
        "ext": "",
        "isDir": false,
        "size": 63638,
        "modDate": "2023-10-23T14:26:39.578Z",
        "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/2023_11/treated/style/FR_EDITO_STD.css?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T105206Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5021c5a4cba50dc193ef0de34dba997f482484f3809f858cff972c873c6ce741"
      },
      // {
      //   "id": "FR_JOUR_STD.css_5",
      //   "name": "FR_JOUR_STD.css",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 114061,
      //   "modDate": "2023-10-23T14:26:57.999Z",
      //   "thumbnailUrl": "https://bo-ws.sotiaf.fr/magnificat-fr/FR/2023_11/treated/style/FR_JOUR_STD.css?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=6BR4ZfcuHNeKqbAjl0Sx%2F20240227%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240227T105206Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=db56b8e238ab67549d1d04253daa28415216cbfd6bfccc10cbb2534b7c0d7030"
      // },
      // {
      //   "id": "FR_0000_00_00_00_ZAC.html_7",
      //   "name": "FR_0000_00_00_00_ZAC.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 3139,
      //   "modDate": "2023-12-08T11:12:38.864Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0000_00_00_00_ZAC.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9c99f209fa79cdfdc7b7be32d9f2a00e49a376d9d3bb892b965b636d79dd41c0"
      // },
      // {
      //   "id": "FR_0371_23_10_00_ALR.html_8",
      //   "name": "FR_0371_23_10_00_ALR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6537,
      //   "modDate": "2023-12-08T11:12:38.992Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_ALR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3c0b26fa58310a690985e73c8b4d3fd0a460d3c30c11f94d475763892f3e9bc1"
      // },
      // {
      //   "id": "FR_0371_23_10_00_BIB.html_9",
      //   "name": "FR_0371_23_10_00_BIB.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2040,
      //   "modDate": "2023-12-08T11:12:39.096Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_BIB.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e54fbd5856ae2ee9cc630467b6609651bee0ba83b289941c66854ef4d5794874"
      // },
      // {
      //   "id": "FR_0371_23_10_00_CML.html_10",
      //   "name": "FR_0371_23_10_00_CML.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6169,
      //   "modDate": "2023-12-08T11:12:39.213Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_CML.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a7d4f6e9eb6f57270f74511b71872fc75abb640271a843fcb9813dbb388eebfb"
      // },
      // {
      //   "id": "FR_0371_23_10_00_COM.html_11",
      //   "name": "FR_0371_23_10_00_COM.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7374,
      //   "modDate": "2023-12-08T11:12:39.350Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_COM.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7cf36897be6d56c8d2e0bc2bd2a030d38972be95a36af211894c0c29ce39b2cd"
      // },
      // {
      //   "id": "FR_0371_23_10_00_DF.html_12",
      //   "name": "FR_0371_23_10_00_DF.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2360,
      //   "modDate": "2023-12-08T11:12:39.456Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_DF.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0f65b12aa502eb0b4160985bb7ef0dc14ae14225339892324957d54caf72920a"
      // },
      // {
      //   "id": "FR_0371_23_10_00_EDT.html_13",
      //   "name": "FR_0371_23_10_00_EDT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 1950,
      //   "modDate": "2023-12-08T11:12:39.549Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_EDT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a433f26f8b1318250d2b9c622230558d076acb2abe5556e40eeff2e8a9a13fbe"
      // },
      // {
      //   "id": "FR_0371_23_10_00_GLP.html_14",
      //   "name": "FR_0371_23_10_00_GLP.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6453,
      //   "modDate": "2023-12-08T11:12:39.667Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_GLP.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6794217fb257f93661437a79c97587a9473ee07e621b129189928053e430f70d"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LCH.html_15",
      //   "name": "FR_0371_23_10_00_LCH.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6571,
      //   "modDate": "2023-12-08T11:12:39.802Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LCH.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ed79a3ca19878648ae1b1ae439b02d8e842b79bd4d8dacfb8be0e68509bc9923"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD1.html_16",
      //   "name": "FR_0371_23_10_00_LIT_ORD1.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6158,
      //   "modDate": "2023-12-08T11:12:39.990Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD1.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=044b71803a7faf6bae042f4a2d1b2a57a7f9356a31848c04ce0ce43bf46a1612"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD2.html_17",
      //   "name": "FR_0371_23_10_00_LIT_ORD2.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2052,
      //   "modDate": "2023-12-08T11:12:40.129Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD2.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b699b6f3daa86d690eba4d0ffba9daf96e9e7293d5f2bd21fdf1b2d42e268c86"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD3.html_18",
      //   "name": "FR_0371_23_10_00_LIT_ORD3.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2003,
      //   "modDate": "2023-12-08T11:12:40.257Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD3.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=85069511efe74b52af652a265e439ca1cd31bb7d9d075c6968ac1b342d461ea4"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD4.html_19",
      //   "name": "FR_0371_23_10_00_LIT_ORD4.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 4689,
      //   "modDate": "2023-12-08T11:12:40.415Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD4.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=27a5f58dca1cacf0a313178b8da60bdc7806d771e478cc0cbd81aadacb4a90c3"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD5.html_20",
      //   "name": "FR_0371_23_10_00_LIT_ORD5.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 32083,
      //   "modDate": "2023-12-08T11:12:40.565Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD5.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=97069231394f369705464c5250fe7080abd7b080a1a58d13a77084b5ae8827bf"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD5_1.html_21",
      //   "name": "FR_0371_23_10_00_LIT_ORD5_1.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9028,
      //   "modDate": "2023-12-08T11:12:40.728Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD5_1.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a63d221dc98a01f81d2a1679fd1ac56e456bd9cd5ca200166b40effd8e99c462"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD5_2.html_22",
      //   "name": "FR_0371_23_10_00_LIT_ORD5_2.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 4038,
      //   "modDate": "2023-12-08T11:12:40.846Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD5_2.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=01cc188e8c1b4d4765dd6602204c02d51a115c1a063ec604745cc67b23c31bcf"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD5_3.html_23",
      //   "name": "FR_0371_23_10_00_LIT_ORD5_3.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 5464,
      //   "modDate": "2023-12-08T11:12:40.963Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD5_3.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=85ffe4646bfbc5030203cd53671299cea1e50280e30c30d171b1a8c07006b29a"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD5_4.html_24",
      //   "name": "FR_0371_23_10_00_LIT_ORD5_4.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6858,
      //   "modDate": "2023-12-08T11:12:41.088Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD5_4.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=695e2ac74d0afe852c70048cd690b4d75c2ee1f602bf933df7c34636e0816751"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD6.html_25",
      //   "name": "FR_0371_23_10_00_LIT_ORD6.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 5737,
      //   "modDate": "2023-12-08T11:12:41.212Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD6.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=99ae4d8fd0304482f17ef4d805d74ad0f30c87ecafa4adcb743894d030b48716"
      // },
      // {
      //   "id": "FR_0371_23_10_00_LIT_ORD7.html_26",
      //   "name": "FR_0371_23_10_00_LIT_ORD7.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 1638,
      //   "modDate": "2023-12-08T11:12:41.339Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_LIT_ORD7.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2c4c757bc60d3ba5187ccc28732fe8cc2acab8a7486316272d34fc6c6564671d"
      // },
      // {
      //   "id": "FR_0371_23_10_00_ODM.html_27",
      //   "name": "FR_0371_23_10_00_ODM.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7001,
      //   "modDate": "2023-12-08T11:12:41.465Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_ODM.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7c469a4524191eb5f8d86141e226ee17d79d300c41d0074d0f0eaff6b3094ea6"
      // },
      // {
      //   "id": "FR_0371_23_10_00_PCB.html_28",
      //   "name": "FR_0371_23_10_00_PCB.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 15524,
      //   "modDate": "2023-12-08T11:12:41.585Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_PCB.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c55f4e403fb79cb3599aedda3256e31999907257a8a6fb8d6758b015fe2c228b"
      // },
      // {
      //   "id": "FR_0371_23_10_00_PRI.html_29",
      //   "name": "FR_0371_23_10_00_PRI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2611,
      //   "modDate": "2023-12-08T11:12:41.675Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_PRI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8682196978b8e41b6d486f6679f59d4305af496b046f2cbf8eac98768fb0b11f"
      // },
      // {
      //   "id": "FR_0371_23_10_00_PS.html_30",
      //   "name": "FR_0371_23_10_00_PS.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6624,
      //   "modDate": "2023-12-08T11:12:41.785Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_PS.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=970cb73ee8bb43ec644f8e72e15436f5305cceedec900e7526c7ff50382dddf8"
      // },
      // {
      //   "id": "FR_0371_23_10_00_REG.html_31",
      //   "name": "FR_0371_23_10_00_REG.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8940,
      //   "modDate": "2023-12-08T11:12:41.901Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_REG.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a9ccea78816649f17a2a3bda34f1840308a6ae2d6155bb1ab8a54f12e1743d7f"
      // },
      // {
      //   "id": "FR_0371_23_10_00_TRM.html_32",
      //   "name": "FR_0371_23_10_00_TRM.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6800,
      //   "modDate": "2023-12-08T11:12:42.029Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_00_TRM.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e269b5e15b96c50113bb5ec3ec608cb57cf50f8bc49ac4568a886f4f67e30939"
      // },
      // {
      //   "id": "FR_0371_23_10_01_MAT.html_33",
      //   "name": "FR_0371_23_10_01_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8154,
      //   "modDate": "2023-12-08T11:12:42.214Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_01_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8d11efd77290541b96f91f46caddd8a70b02d1c8f33d89dc0ac8b395ff3b52e5"
      // },
      // {
      //   "id": "FR_0371_23_10_01_MEDI.html_34",
      //   "name": "FR_0371_23_10_01_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2121,
      //   "modDate": "2023-12-08T11:12:42.413Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_01_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=936427b88c2f51e119d363d238732ccc284d3a664a3fe921ce24a5f977784f3a"
      // },
      // {
      //   "id": "FR_0371_23_10_01_MESSE.html_35",
      //   "name": "FR_0371_23_10_01_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9584,
      //   "modDate": "2023-12-08T11:12:42.549Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_01_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=075ed4082ee30054eee6e5e78b0fcf2cad6da69927d1fd95cf468e85b04808d8"
      // },
      // {
      //   "id": "FR_0371_23_10_01_PDD.html_36",
      //   "name": "FR_0371_23_10_01_PDD.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 4576,
      //   "modDate": "2023-12-08T11:12:42.764Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_01_PDD.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=01d657ecfb224d6f8852afb293c0daa2ec0514f36f56a816811ed900a0c01947"
      // },
      // {
      //   "id": "FR_0371_23_10_01_SOIR.html_37",
      //   "name": "FR_0371_23_10_01_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7686,
      //   "modDate": "2023-12-08T11:12:42.666Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_01_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8a1990afc8e228f0c49c036eaad398c8607efce0eac1b3faf888f7c31a04b086"
      // },
      // {
      //   "id": "FR_0371_23_10_02_DIV.html_38",
      //   "name": "FR_0371_23_10_02_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2641,
      //   "modDate": "2023-12-08T11:12:42.884Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_02_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8749db3628772cd0b6fec371faa3f96212aeba305bae427cea0b8531e9576b8b"
      // },
      // {
      //   "id": "FR_0371_23_10_02_MAT.html_39",
      //   "name": "FR_0371_23_10_02_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7144,
      //   "modDate": "2023-12-08T11:12:43.074Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_02_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=120c0a91659c970ce98e9fb969de5c2cd6783599bb43a371778209494eb2d0ed"
      // },
      // {
      //   "id": "FR_0371_23_10_02_MEDI.html_40",
      //   "name": "FR_0371_23_10_02_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2382,
      //   "modDate": "2023-12-08T11:12:43.240Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_02_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=94f06e800d945457d8668cf061a56c47077697e911e0eb039df946bffdebcf25"
      // },
      // {
      //   "id": "FR_0371_23_10_02_MESSE.html_41",
      //   "name": "FR_0371_23_10_02_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 12336,
      //   "modDate": "2023-12-08T11:12:43.394Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_02_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=762e4e8e636882115b9366c3476e380a18b9643320211212a57f3181e324da0b"
      // },
      // {
      //   "id": "FR_0371_23_10_02_SOIR.html_42",
      //   "name": "FR_0371_23_10_02_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6868,
      //   "modDate": "2023-12-08T11:12:43.526Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_02_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d1da275168608afc4b79a5fe9b10ca79b40fc67e6fd4ce330861eee23747e78d"
      // },
      // {
      //   "id": "FR_0371_23_10_03_DIV.html_43",
      //   "name": "FR_0371_23_10_03_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2510,
      //   "modDate": "2023-12-08T11:12:43.636Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_03_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=aeb5b1ab37d1ae15ee6e82df4a57475bcb24e4e6be676492e8ac453fce98da08"
      // },
      // {
      //   "id": "FR_0371_23_10_03_MAT.html_44",
      //   "name": "FR_0371_23_10_03_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7465,
      //   "modDate": "2023-12-08T11:12:43.803Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_03_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=92dee810f75051b6e4ae23b7a98c98bc6e18e8e9d422c20d87be3d8146d8f6f2"
      // },
      // {
      //   "id": "FR_0371_23_10_03_MEDI.html_45",
      //   "name": "FR_0371_23_10_03_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2519,
      //   "modDate": "2023-12-08T11:12:43.978Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_03_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8008c7bf4ee2b09bc03017ced0f7f832a65a8e838526cba87351b06644d1a1c3"
      // },
      // {
      //   "id": "FR_0371_23_10_03_MESSE.html_46",
      //   "name": "FR_0371_23_10_03_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6246,
      //   "modDate": "2023-12-08T11:12:44.095Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_03_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=52269ce41e8a00b324218c726afe196a7519ac06df59ddbaff4bad1debb46af4"
      // },
      // {
      //   "id": "FR_0371_23_10_03_SOIR.html_47",
      //   "name": "FR_0371_23_10_03_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6090,
      //   "modDate": "2023-12-08T11:12:44.215Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_03_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=12e5781ab5cd4520aef3666876df964aa3b7d4eea69373008158519a04742949"
      // },
      // {
      //   "id": "FR_0371_23_10_04_DIV.html_48",
      //   "name": "FR_0371_23_10_04_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2615,
      //   "modDate": "2023-12-08T11:12:44.376Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_04_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0bb4aa5151f833d1f5392a62311a9f97fcbe05834ba94d1bfebbcdf0afa416c6"
      // },
      // {
      //   "id": "FR_0371_23_10_04_MAT.html_49",
      //   "name": "FR_0371_23_10_04_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 10061,
      //   "modDate": "2023-12-08T11:12:44.630Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_04_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=097df36c3a68743930ad8956ec676b36e758a05d4752f22f47170debf9f29d8a"
      // },
      // {
      //   "id": "FR_0371_23_10_04_MEDI.html_50",
      //   "name": "FR_0371_23_10_04_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2268,
      //   "modDate": "2023-12-08T11:12:44.802Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_04_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a0587dbf2e9bd77295b7a1ac754b3ed9d33a4d6b83a2398965638f71cc43988d"
      // },
      // {
      //   "id": "FR_0371_23_10_04_MESSE.html_51",
      //   "name": "FR_0371_23_10_04_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9883,
      //   "modDate": "2023-12-08T11:12:44.898Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_04_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=be2833c9c3bcb512c2656560994cc627e574f702029cd0b5106ca0d72db5da8a"
      // },
      // {
      //   "id": "FR_0371_23_10_04_SOIR.html_52",
      //   "name": "FR_0371_23_10_04_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8816,
      //   "modDate": "2023-12-08T11:12:45.005Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_04_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2107c698ae23e6e0735e6a667cfa0d527686ae71431b14b068942cc9b9656920"
      // },
      // {
      //   "id": "FR_0371_23_10_05_DIV.html_53",
      //   "name": "FR_0371_23_10_05_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2512,
      //   "modDate": "2023-12-08T11:12:45.120Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_05_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c6c5f733640547c9fa0b07e72f65166ccd9510cecd0942e277e20996cb7cf052"
      // },
      // {
      //   "id": "FR_0371_23_10_05_MAT.html_54",
      //   "name": "FR_0371_23_10_05_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6785,
      //   "modDate": "2023-12-08T11:12:45.285Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_05_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a5c49f43703b800e652d2fe8a5aa2836adfcc8b0ab416f8ce033887c249b36a4"
      // },
      // {
      //   "id": "FR_0371_23_10_05_MEDI.html_55",
      //   "name": "FR_0371_23_10_05_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2220,
      //   "modDate": "2023-12-08T11:12:45.443Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_05_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f0832757be95063c06feb52ba6d24d8ef06072654f478a5e94607b6024f98111"
      // },
      // {
      //   "id": "FR_0371_23_10_05_MESSE.html_56",
      //   "name": "FR_0371_23_10_05_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9235,
      //   "modDate": "2023-12-08T11:12:45.544Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_05_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f9f01185b8f7161c108b38d89a486d67c9180686418818385a8f9ed869fd6028"
      // },
      // {
      //   "id": "FR_0371_23_10_05_SOIR.html_57",
      //   "name": "FR_0371_23_10_05_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6308,
      //   "modDate": "2023-12-08T11:12:45.658Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_05_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7720a496f9e8b957c8736be0572f4e24faa2ec38961629f8b928bbf32f1d7339"
      // },
      // {
      //   "id": "FR_0371_23_10_06_DIV.html_58",
      //   "name": "FR_0371_23_10_06_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2514,
      //   "modDate": "2023-12-08T11:12:45.777Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_06_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4f000730384e2907d571904131ab05001d66f4efa0036fcbe6fdf70279e798a6"
      // },
      // {
      //   "id": "FR_0371_23_10_06_MAT.html_59",
      //   "name": "FR_0371_23_10_06_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7136,
      //   "modDate": "2023-12-08T11:12:45.936Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_06_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c794ff893598f2226b4cf420883039376ac5d61654a219c46cbb5aa8f746c067"
      // },
      // {
      //   "id": "FR_0371_23_10_06_MEDI.html_60",
      //   "name": "FR_0371_23_10_06_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 1938,
      //   "modDate": "2023-12-08T11:12:46.085Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_06_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f331602a8a560f224ad1bd466ab6822363b53db9413840231685cd2eff57094a"
      // },
      // {
      //   "id": "FR_0371_23_10_06_MESSE.html_61",
      //   "name": "FR_0371_23_10_06_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7185,
      //   "modDate": "2023-12-08T11:12:46.184Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_06_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=64f6380dfc5121e4aea330c8385bb2c7ca32ad689b6e9c9895b28ca9090326fe"
      // },
      // {
      //   "id": "FR_0371_23_10_06_SOIR.html_62",
      //   "name": "FR_0371_23_10_06_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6577,
      //   "modDate": "2023-12-08T11:12:46.310Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_06_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bf069cdb76a47b94b0e88a491ff032e8bdc7b330b2da0bb5616473ad5123eed9"
      // },
      // {
      //   "id": "FR_0371_23_10_07_DIV.html_63",
      //   "name": "FR_0371_23_10_07_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2375,
      //   "modDate": "2023-12-08T11:12:46.442Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_07_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7527c627b68b5e130a6897d1f09466b7d5d5126bd7bda1b24120a56978b59000"
      // },
      // {
      //   "id": "FR_0371_23_10_07_MAT.html_64",
      //   "name": "FR_0371_23_10_07_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7883,
      //   "modDate": "2023-12-08T11:12:46.600Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_07_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=265ed068e38511eb9dce3a2bef71a4c47a4dbb290e32e02f00a753184d56d11a"
      // },
      // {
      //   "id": "FR_0371_23_10_07_MEDI.html_65",
      //   "name": "FR_0371_23_10_07_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2381,
      //   "modDate": "2023-12-08T11:12:46.774Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_07_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7441fc4452c91dbc4465ff55cebd4c743d98281317d0bd22d1546e802bc3d6fc"
      // },
      // {
      //   "id": "FR_0371_23_10_07_MESSE.html_66",
      //   "name": "FR_0371_23_10_07_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 10259,
      //   "modDate": "2023-12-08T11:12:46.880Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_07_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=db3bbb871ed6d953bd409a8e32f3a0dfce6203265b080f176c8e4b06f839486e"
      // },
      // {
      //   "id": "FR_0371_23_10_07_SOIR.html_67",
      //   "name": "FR_0371_23_10_07_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6837,
      //   "modDate": "2023-12-08T11:12:46.986Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_07_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=effe83ecb8372590e944dd3f9b0eccc9910db296c216fd92656d58a3650e5de8"
      // },
      // {
      //   "id": "FR_0371_23_10_08_MAT.html_68",
      //   "name": "FR_0371_23_10_08_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8428,
      //   "modDate": "2023-12-08T11:12:47.163Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_08_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b6e8458d8d01436d7e6a34c2ca1ba5e7c921a0f4c872c3fb2cfd6cfd6cf38217"
      // },
      // {
      //   "id": "FR_0371_23_10_08_MEDI.html_69",
      //   "name": "FR_0371_23_10_08_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2782,
      //   "modDate": "2023-12-08T11:12:47.345Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_08_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2273fa91b7fd76c75a0fddaa99ea2647224dd4791f9f3c775e5527639321d78b"
      // },
      // {
      //   "id": "FR_0371_23_10_08_MESSE.html_70",
      //   "name": "FR_0371_23_10_08_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 10511,
      //   "modDate": "2023-12-08T11:12:47.462Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_08_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c2c80bec9823d0801bc344df2b5c72c6cddc8f0a23115c0b98452f060dc6b9e0"
      // },
      // {
      //   "id": "FR_0371_23_10_08_PDD.html_71",
      //   "name": "FR_0371_23_10_08_PDD.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 4346,
      //   "modDate": "2023-12-08T11:12:47.672Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_08_PDD.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e65788a3684ae841b6826f6e1d001929a5be7343d8f21cd8abdc46a564674e13"
      // },
      // {
      //   "id": "FR_0371_23_10_08_SOIR.html_72",
      //   "name": "FR_0371_23_10_08_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7457,
      //   "modDate": "2023-12-08T11:12:47.578Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_08_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a53f9c07e900851038b2a5d37c88e860ccea44f9afa8b8a2cf2e5577a2cf048b"
      // },
      // {
      //   "id": "FR_0371_23_10_09_DIV.html_73",
      //   "name": "FR_0371_23_10_09_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2456,
      //   "modDate": "2023-12-08T11:12:47.793Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_09_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=6c4fd82dcc93cd744c5a4fccc253b1d8e4e7edc09487a4f3e960b62e8f24b8c3"
      // },
      // {
      //   "id": "FR_0371_23_10_09_MAT.html_74",
      //   "name": "FR_0371_23_10_09_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8327,
      //   "modDate": "2023-12-08T11:12:47.960Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_09_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=2c21b878c54b293221512061272163176de085f57091824faaadfb2344461a08"
      // },
      // {
      //   "id": "FR_0371_23_10_09_MEDI.html_75",
      //   "name": "FR_0371_23_10_09_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2363,
      //   "modDate": "2023-12-08T11:12:48.134Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_09_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a03c52dc353c489b8b2c68ee1a7df899fa0a1a480b9886861a2eb6914ec4696c"
      // },
      // {
      //   "id": "FR_0371_23_10_09_MESSE.html_76",
      //   "name": "FR_0371_23_10_09_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 10616,
      //   "modDate": "2023-12-08T11:12:48.241Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_09_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=91bcca087d8cc496bfdef38d9623e1e2366eb39d51718a480a475f9e92f14af6"
      // },
      // {
      //   "id": "FR_0371_23_10_09_SOIR.html_77",
      //   "name": "FR_0371_23_10_09_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 5653,
      //   "modDate": "2023-12-08T11:12:48.344Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_09_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a2ffa5007593bed9a3c0e0b08f1c4d6f731e5819af4f2eef0253ba963c6855bb"
      // },
      // {
      //   "id": "FR_0371_23_10_10_DIV.html_78",
      //   "name": "FR_0371_23_10_10_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2423,
      //   "modDate": "2023-12-08T11:12:48.457Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_10_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b357e2b8e63f7c5ceedebb51af53445c8420b5f068aafd8c47082fc0beba2da4"
      // },
      // {
      //   "id": "FR_0371_23_10_10_MAT.html_79",
      //   "name": "FR_0371_23_10_10_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7701,
      //   "modDate": "2023-12-08T11:12:48.626Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_10_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c6c7661f9d678a856bcfbac5c72fa60b83429977be6672b88318358d81eeab3e"
      // },
      // {
      //   "id": "FR_0371_23_10_10_MEDI.html_80",
      //   "name": "FR_0371_23_10_10_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2393,
      //   "modDate": "2023-12-08T11:12:48.781Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_10_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8f9167e71b66d53acc538f7768c974e8774f85b503d117f1a3e6ba90ef149b7a"
      // },
      // {
      //   "id": "FR_0371_23_10_10_MESSE.html_81",
      //   "name": "FR_0371_23_10_10_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6709,
      //   "modDate": "2023-12-08T11:12:48.882Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_10_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=55ff3138a124887df220cc6d8729a7d1a9b0849d685377d9a4f1af10c5a62ee1"
      // },
      // {
      //   "id": "FR_0371_23_10_10_SOIR.html_82",
      //   "name": "FR_0371_23_10_10_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 5995,
      //   "modDate": "2023-12-08T11:12:48.986Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_10_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1c34b98e54ba33915bc0c80b99e280807fbd178250b278170c642b4739b6b09d"
      // },
      // {
      //   "id": "FR_0371_23_10_11_DIV.html_83",
      //   "name": "FR_0371_23_10_11_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2475,
      //   "modDate": "2023-12-08T11:12:49.103Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_11_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fa111c55c299f84b38bd3d9a033a362ac7e9467d58a5ebf03527852d82c0cb47"
      // },
      // {
      //   "id": "FR_0371_23_10_11_MAT.html_84",
      //   "name": "FR_0371_23_10_11_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9825,
      //   "modDate": "2023-12-08T11:12:49.262Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_11_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=55c8a8acd5c4937dac1c1d09ea8192c6ee3510c8d0cb780a68691585bb78a3a7"
      // },
      // {
      //   "id": "FR_0371_23_10_11_MEDI.html_85",
      //   "name": "FR_0371_23_10_11_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2754,
      //   "modDate": "2023-12-08T11:12:49.440Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_11_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3e3e6eb5b4d73e1b649ec21ef0ded9f4bf6694520c0e512ae4108b7b25585bc7"
      // },
      // {
      //   "id": "FR_0371_23_10_11_MESSE.html_86",
      //   "name": "FR_0371_23_10_11_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8420,
      //   "modDate": "2023-12-08T11:12:49.548Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_11_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c2f75ae09ba1e995e40f91e2badf83ce364a00a9e39d9a2ca7a477c761af8fc4"
      // },
      // {
      //   "id": "FR_0371_23_10_11_SOIR.html_87",
      //   "name": "FR_0371_23_10_11_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 5747,
      //   "modDate": "2023-12-08T11:12:49.656Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_11_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d7c4123c2342cf5d5bf62d1efcc6b6b919957ccf0bf96c48ec356f24f615f1ff"
      // },
      // {
      //   "id": "FR_0371_23_10_12_DIV.html_88",
      //   "name": "FR_0371_23_10_12_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2499,
      //   "modDate": "2023-12-08T11:12:49.774Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_12_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c8e501616498d2f937d6395e9facf7dad05a7e61409bbb9b227cd74771153db0"
      // },
      // {
      //   "id": "FR_0371_23_10_12_MAT.html_89",
      //   "name": "FR_0371_23_10_12_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7138,
      //   "modDate": "2023-12-08T11:12:49.935Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_12_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5690cc4034c258aea7fbdb3b999e9839b87de8ebf40053963541df497899a07b"
      // },
      // {
      //   "id": "FR_0371_23_10_12_MEDI.html_90",
      //   "name": "FR_0371_23_10_12_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2507,
      //   "modDate": "2023-12-08T11:12:50.082Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_12_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b0edb2f9f10bb566138825fd3caa5087b44cc7f05e64f8448622d3b016c704de"
      // },
      // {
      //   "id": "FR_0371_23_10_12_MESSE.html_91",
      //   "name": "FR_0371_23_10_12_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7631,
      //   "modDate": "2023-12-08T11:12:50.182Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_12_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=31f706a35789f8780f5582e509a6b0bf91a9812ae5e1313d5ec2e4246ebf00b4"
      // },
      // {
      //   "id": "FR_0371_23_10_12_SOIR.html_92",
      //   "name": "FR_0371_23_10_12_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7301,
      //   "modDate": "2023-12-08T11:12:50.285Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_12_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=38db65d0869b4327d561561c5bcb5356de6f98563610dff328812369fe0ff2a7"
      // },
      // {
      //   "id": "FR_0371_23_10_13_DIV.html_93",
      //   "name": "FR_0371_23_10_13_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2400,
      //   "modDate": "2023-12-08T11:12:50.409Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_13_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5c1d4bcb831a827938edc6dd4dc6e40b53c4ebd88ff2e5284b9e166d721c225e"
      // },
      // {
      //   "id": "FR_0371_23_10_13_MAT.html_94",
      //   "name": "FR_0371_23_10_13_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8545,
      //   "modDate": "2023-12-08T11:12:50.581Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_13_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5cdf9c2895f94d7715f3150429f64e2104dc22fec5649a298726d0c2fb85e8fd"
      // },
      // {
      //   "id": "FR_0371_23_10_13_MEDI.html_95",
      //   "name": "FR_0371_23_10_13_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2402,
      //   "modDate": "2023-12-08T11:12:50.745Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_13_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=49d048791cf52847aa2210d09b7877bde7bdec9d06f8d94e36f3c1d2aa914b36"
      // },
      // {
      //   "id": "FR_0371_23_10_13_MESSE.html_96",
      //   "name": "FR_0371_23_10_13_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7692,
      //   "modDate": "2023-12-08T11:12:50.853Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_13_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=772fd2346a2128e1e0c8911f72f299ef781bffa76a02e73b98205f49cfff3b18"
      // },
      // {
      //   "id": "FR_0371_23_10_13_SOIR.html_97",
      //   "name": "FR_0371_23_10_13_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6541,
      //   "modDate": "2023-12-08T11:12:50.962Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_13_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0296dd19db6dcdf073fe8b59ffe57a40595f4d56e574e8acbc3be0d564465136"
      // },
      // {
      //   "id": "FR_0371_23_10_14_DIV.html_98",
      //   "name": "FR_0371_23_10_14_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2418,
      //   "modDate": "2023-12-08T11:12:51.091Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_14_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e0a942241abd376e3fa53c1aa13b191ed19e526293eb6ea94b14d3b4815addf5"
      // },
      // {
      //   "id": "FR_0371_23_10_14_MAT.html_99",
      //   "name": "FR_0371_23_10_14_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6708,
      //   "modDate": "2023-12-08T11:12:51.256Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_14_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=78fcfdb6017235e0abe2e870c945ddb1afcdc1c66509582dbe23cd3e10c4ba0e"
      // },
      // {
      //   "id": "FR_0371_23_10_14_MEDI.html_100",
      //   "name": "FR_0371_23_10_14_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2429,
      //   "modDate": "2023-12-08T11:12:51.415Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_14_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=889bc3c44137a676715a8247f22b70a5f695d4832dc261d93d8205c3db94c298"
      // },
      // {
      //   "id": "FR_0371_23_10_14_MESSE.html_101",
      //   "name": "FR_0371_23_10_14_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7432,
      //   "modDate": "2023-12-08T11:12:51.515Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_14_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=29e06e328391a463a013a2103a184737a3df2a26383fa6cd8a37d114f8982349"
      // },
      // {
      //   "id": "FR_0371_23_10_14_SOIR.html_102",
      //   "name": "FR_0371_23_10_14_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6979,
      //   "modDate": "2023-12-08T11:12:51.621Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_14_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=65df120d0925e7c7394184aecd1847e997036d03e2313ce92b5e5cc5272dcfb0"
      // },
      // {
      //   "id": "FR_0371_23_10_15_MAT.html_103",
      //   "name": "FR_0371_23_10_15_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6574,
      //   "modDate": "2023-12-08T11:12:51.786Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_15_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=19462700a356dfed3c3a3c9279d9bfcd4957c06833547ab288a4e3b9f884d7bd"
      // },
      // {
      //   "id": "FR_0371_23_10_15_MEDI.html_104",
      //   "name": "FR_0371_23_10_15_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2410,
      //   "modDate": "2023-12-08T11:12:51.941Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_15_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=13ea5101928f6606d8ae3aabe648643315cbbaa40b36e82a955945a40544aa5c"
      // },
      // {
      //   "id": "FR_0371_23_10_15_MESSE.html_105",
      //   "name": "FR_0371_23_10_15_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9948,
      //   "modDate": "2023-12-08T11:12:52.097Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_15_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c8f7adc8071fb5048327c04398d28d3d857b9e6d05146ecf45aaac992a47e585"
      // },
      // {
      //   "id": "FR_0371_23_10_15_PDD.html_106",
      //   "name": "FR_0371_23_10_15_PDD.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 4726,
      //   "modDate": "2023-12-08T11:12:52.297Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_15_PDD.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1e292eed832e3b560134af469578fe86bbbc0c5603dc13c43efe9e687406d1bd"
      // },
      // {
      //   "id": "FR_0371_23_10_15_SOIR.html_107",
      //   "name": "FR_0371_23_10_15_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7037,
      //   "modDate": "2023-12-08T11:12:52.202Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_15_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4da5466606a1d69d20c1924752f3c9b8e8d247d1afc4a7239d425cafcfe675c8"
      // },
      // {
      //   "id": "FR_0371_23_10_16_DIV.html_108",
      //   "name": "FR_0371_23_10_16_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2651,
      //   "modDate": "2023-12-08T11:12:52.417Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_16_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=bb58da9234eb48a8f988f8779a732a7e5bc2ec314cb4fa60132d050c9d8369df"
      // },
      // {
      //   "id": "FR_0371_23_10_16_MAT.html_109",
      //   "name": "FR_0371_23_10_16_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7680,
      //   "modDate": "2023-12-08T11:12:52.580Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_16_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=13940cb71daddb285436565bdd2e9fc36c603e98430a55aa7477f2947362cb76"
      // },
      // {
      //   "id": "FR_0371_23_10_16_MEDI.html_110",
      //   "name": "FR_0371_23_10_16_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2292,
      //   "modDate": "2023-12-08T11:12:52.723Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_16_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=050811764c9b6a14cbd838354a237df7849751bbac3d3f5ea37cd62daa077c11"
      // },
      // {
      //   "id": "FR_0371_23_10_16_MESSE.html_111",
      //   "name": "FR_0371_23_10_16_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7869,
      //   "modDate": "2023-12-08T11:12:52.842Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_16_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=84bb1af5287833e11c88bbb22e0bb9ab5b8e251af2170b791a4e58fb74833a73"
      // },
      // {
      //   "id": "FR_0371_23_10_16_SOIR.html_112",
      //   "name": "FR_0371_23_10_16_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6448,
      //   "modDate": "2023-12-08T11:12:52.945Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_16_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=261e3f341658a743d7149892da9356d585daaa9b95d6c8770d9f553a60a1aa06"
      // },
      // {
      //   "id": "FR_0371_23_10_17_DIV.html_113",
      //   "name": "FR_0371_23_10_17_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2362,
      //   "modDate": "2023-12-08T11:12:53.066Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_17_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9be734ea6518aeed560c197038a68053b2433c2113e05f9a5db902baad8a2e59"
      // },
      // {
      //   "id": "FR_0371_23_10_17_MAT.html_114",
      //   "name": "FR_0371_23_10_17_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7756,
      //   "modDate": "2023-12-08T11:12:53.226Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_17_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b6b1dc52806f585ad0e57e16de60a0be7ec624f7e296fc2b0949af2c73b0317e"
      // },
      // {
      //   "id": "FR_0371_23_10_17_MEDI.html_115",
      //   "name": "FR_0371_23_10_17_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2540,
      //   "modDate": "2023-12-08T11:12:53.388Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_17_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d9ee7f33d89928cc1400f4ddacf61f78875319cf720d4d4d558c95153650d52e"
      // },
      // {
      //   "id": "FR_0371_23_10_17_MESSE.html_116",
      //   "name": "FR_0371_23_10_17_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7383,
      //   "modDate": "2023-12-08T11:12:53.494Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_17_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=76c00110108af7df041a1249ddd8d107bb7654b3021f98506263dd50fe446fa7"
      // },
      // {
      //   "id": "FR_0371_23_10_17_SOIR.html_117",
      //   "name": "FR_0371_23_10_17_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6532,
      //   "modDate": "2023-12-08T11:12:53.603Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_17_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3b3af64e21b6edd6975d1ca92a0e302415ce6644b992bc4931b45310393581d4"
      // },
      // {
      //   "id": "FR_0371_23_10_18_MAT.html_118",
      //   "name": "FR_0371_23_10_18_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8205,
      //   "modDate": "2023-12-08T11:12:53.808Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_18_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cca110c566a7c333c12c319a5ad76388151b9f05e96c617f04addad0f8a984e7"
      // },
      // {
      //   "id": "FR_0371_23_10_18_MEDI.html_119",
      //   "name": "FR_0371_23_10_18_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2209,
      //   "modDate": "2023-12-08T11:12:53.959Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_18_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=01652f52f79ad1c56b4f659fa914b90ecb0b20f8249623c049a89c60fdf11101"
      // },
      // {
      //   "id": "FR_0371_23_10_18_MESSE.html_120",
      //   "name": "FR_0371_23_10_18_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9673,
      //   "modDate": "2023-12-08T11:12:54.074Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_18_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=935cf8b5cced7b85d65cd9a8c3b91aad6e5716bf6d8e4718cb27d0b050832698"
      // },
      // {
      //   "id": "FR_0371_23_10_18_SOIR.html_121",
      //   "name": "FR_0371_23_10_18_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8988,
      //   "modDate": "2023-12-08T11:12:54.190Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_18_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=13bdccfd04d5153a6775e2587e301d894169fb36a0a503e3d37b868974006a7d"
      // },
      // {
      //   "id": "FR_0371_23_10_19_DIV.html_122",
      //   "name": "FR_0371_23_10_19_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2506,
      //   "modDate": "2023-12-08T11:12:54.325Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_19_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e9ae66c1cb89cbff6e7781a8584567d2e6d1ceb0ed614f86a48a8a20b44a325a"
      // },
      // {
      //   "id": "FR_0371_23_10_19_MAT.html_123",
      //   "name": "FR_0371_23_10_19_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8245,
      //   "modDate": "2023-12-08T11:12:54.528Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_19_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=42f4e33d4f205daaed916fd94f6b5a9e15628acadabb226df2998c4f86ba0817"
      // },
      // {
      //   "id": "FR_0371_23_10_19_MEDI.html_124",
      //   "name": "FR_0371_23_10_19_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2300,
      //   "modDate": "2023-12-08T11:12:54.683Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_19_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f05421b29c009e06630201a408fcb78c399aa2420a02773e46b978e55da12a0a"
      // },
      // {
      //   "id": "FR_0371_23_10_19_MESSE.html_125",
      //   "name": "FR_0371_23_10_19_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7874,
      //   "modDate": "2023-12-08T11:12:54.784Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_19_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=55f95ecddbac2c08be5e7390cc9d51bfc1331270aa4460074835ffac493502ef"
      // },
      // {
      //   "id": "FR_0371_23_10_19_SOIR.html_126",
      //   "name": "FR_0371_23_10_19_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6633,
      //   "modDate": "2023-12-08T11:12:54.883Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_19_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b092df0b484d2d26208f72fe3e187a6170aebcb30e5a99ca260b94990b815da4"
      // },
      // {
      //   "id": "FR_0371_23_10_20_DIV.html_127",
      //   "name": "FR_0371_23_10_20_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2481,
      //   "modDate": "2023-12-08T11:12:54.994Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_20_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d42063d58657af0f50304a508e5b44c70f89e4fa359758134b1b4d06acab39ab"
      // },
      // {
      //   "id": "FR_0371_23_10_20_MAT.html_128",
      //   "name": "FR_0371_23_10_20_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7142,
      //   "modDate": "2023-12-08T11:12:55.147Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_20_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5b4e7e84cfee627a8538c58cccc411299f0613c53b30d5465ab5b91422c60c1d"
      // },
      // {
      //   "id": "FR_0371_23_10_20_MEDI.html_129",
      //   "name": "FR_0371_23_10_20_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2442,
      //   "modDate": "2023-12-08T11:12:55.298Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_20_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=db94fbf23c46828cd7ea244aa37eae08d6fc59f30098874b00aafc8989d584ff"
      // },
      // {
      //   "id": "FR_0371_23_10_20_MESSE.html_130",
      //   "name": "FR_0371_23_10_20_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6764,
      //   "modDate": "2023-12-08T11:12:55.413Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_20_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f67b7f0727b7d854ff7d8092ca36adecb8022e74a862a0eeaff49ef2952792de"
      // },
      // {
      //   "id": "FR_0371_23_10_20_SOIR.html_131",
      //   "name": "FR_0371_23_10_20_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 5144,
      //   "modDate": "2023-12-08T11:12:55.520Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_20_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8e008854d0128268fca855aedb8580a5ed05601150d4b617f8dc17fd90ce2149"
      // },
      // {
      //   "id": "FR_0371_23_10_21_DIV.html_132",
      //   "name": "FR_0371_23_10_21_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2477,
      //   "modDate": "2023-12-08T11:12:55.644Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_21_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=98a681c361de132006269a63e5a86b96ed62986b3b746aa094f02a549f3061ae"
      // },
      // {
      //   "id": "FR_0371_23_10_21_MAT.html_133",
      //   "name": "FR_0371_23_10_21_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7263,
      //   "modDate": "2023-12-08T11:12:55.809Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_21_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=30698b187edcd9c9ef428d23927f5979fe01ea4b6ea7acbf9089ef7a96283459"
      // },
      // {
      //   "id": "FR_0371_23_10_21_MEDI.html_134",
      //   "name": "FR_0371_23_10_21_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2361,
      //   "modDate": "2023-12-08T11:12:55.963Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_21_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5d8be12e4d08d8af3e513e90e9c6a9f4f3a8c72216a3f02844342389a2025ae7"
      // },
      // {
      //   "id": "FR_0371_23_10_21_MESSE.html_135",
      //   "name": "FR_0371_23_10_21_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6639,
      //   "modDate": "2023-12-08T11:12:56.061Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_21_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d8e17d3499c6079ee2459d8a8124bb016f45e8929c5bc23fee7155e96c6f4f57"
      // },
      // {
      //   "id": "FR_0371_23_10_21_SOIR.html_136",
      //   "name": "FR_0371_23_10_21_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7713,
      //   "modDate": "2023-12-08T11:12:56.168Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_21_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1b213ecdaf510678f310044c242f4144609f058649da70bc6156c3193346f022"
      // },
      // {
      //   "id": "FR_0371_23_10_22_MAT.html_137",
      //   "name": "FR_0371_23_10_22_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 10335,
      //   "modDate": "2023-12-08T11:12:56.366Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_22_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8cb8935e81a761e941a46707214d21c1ab5eacb2135ba7d6261d56d9a8f613be"
      // },
      // {
      //   "id": "FR_0371_23_10_22_MEDI.html_138",
      //   "name": "FR_0371_23_10_22_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2328,
      //   "modDate": "2023-12-08T11:12:56.552Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_22_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=932ba2319111881c95add5b9c4175d107d8353b6f7672e1b79ca1d2dc2bb190e"
      // },
      // {
      //   "id": "FR_0371_23_10_22_MESSE.html_139",
      //   "name": "FR_0371_23_10_22_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9163,
      //   "modDate": "2023-12-08T11:12:56.682Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_22_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=52c1183cb5aeb376df786cf3129ed03ab183f25b5ee4ae6931f5939d2387929b"
      // },
      // {
      //   "id": "FR_0371_23_10_22_PDD.html_140",
      //   "name": "FR_0371_23_10_22_PDD.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 4754,
      //   "modDate": "2023-12-08T11:12:56.917Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_22_PDD.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cf020f79bfe499971a5830c225b644251f1baf2368f2bf89ab69a94e7dc8b744"
      // },
      // {
      //   "id": "FR_0371_23_10_22_SOIR.html_141",
      //   "name": "FR_0371_23_10_22_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6758,
      //   "modDate": "2023-12-08T11:12:56.814Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_22_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b251ef1949f0c028f95a9c126543fcafbd8c4b2e20d95cb5bf00e8efc617a5d2"
      // },
      // {
      //   "id": "FR_0371_23_10_23_DIV.html_142",
      //   "name": "FR_0371_23_10_23_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2468,
      //   "modDate": "2023-12-08T11:12:57.038Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_23_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f7090e4bfe12c690dc6d08b87381b3f7adf141d930a24231e0556b3bdcaa2c55"
      // },
      // {
      //   "id": "FR_0371_23_10_23_MAT.html_143",
      //   "name": "FR_0371_23_10_23_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7088,
      //   "modDate": "2023-12-08T11:12:57.208Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_23_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=79876aa7b2ad7ac1d9b4cd34b21ca81e585609028ce4d1c1f16bc0fbe34ce16a"
      // },
      // {
      //   "id": "FR_0371_23_10_23_MEDI.html_144",
      //   "name": "FR_0371_23_10_23_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2327,
      //   "modDate": "2023-12-08T11:12:57.357Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_23_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=010505036ca93d851789507259e3254c37d7e49bf4bbb99a654d148445ce9b12"
      // },
      // {
      //   "id": "FR_0371_23_10_23_MESSE.html_145",
      //   "name": "FR_0371_23_10_23_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7322,
      //   "modDate": "2023-12-08T11:12:57.451Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_23_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=99204f3bd3052a235281e191ec02b44a9aee0731bb0e3d3341cc7fb565ece3bb"
      // },
      // {
      //   "id": "FR_0371_23_10_23_SOIR.html_146",
      //   "name": "FR_0371_23_10_23_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6923,
      //   "modDate": "2023-12-08T11:12:57.552Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_23_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8b1fd8e99fc92b1859256d1a0776ccdd07a5cac59b1cc8a83690b51e2b66ba8d"
      // },
      // {
      //   "id": "FR_0371_23_10_24_DIV.html_147",
      //   "name": "FR_0371_23_10_24_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2423,
      //   "modDate": "2023-12-08T11:12:57.667Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_24_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=64168f0c34926f416046fe5dbacf472081c5728196398ab6e4b2e2eb97f6702f"
      // },
      // {
      //   "id": "FR_0371_23_10_24_MAT.html_148",
      //   "name": "FR_0371_23_10_24_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 9400,
      //   "modDate": "2023-12-08T11:12:57.834Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_24_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=a6108a73d003c23aa2087422799c90c720a50ca8f65ceec3ed5be464c47ef476"
      // },
      // {
      //   "id": "FR_0371_23_10_24_MEDI.html_149",
      //   "name": "FR_0371_23_10_24_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2226,
      //   "modDate": "2023-12-08T11:12:58.017Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_24_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=67a492709579e04c172e3ab896af4ae1215d54c6c50b2ee035987985e227a8e4"
      // },
      // {
      //   "id": "FR_0371_23_10_24_MESSE.html_150",
      //   "name": "FR_0371_23_10_24_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7824,
      //   "modDate": "2023-12-08T11:12:58.120Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_24_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=43f0131a7c48ae40193228d065d9b109e21120fe195cbb0bc5c71186252da0cc"
      // },
      // {
      //   "id": "FR_0371_23_10_24_SOIR.html_151",
      //   "name": "FR_0371_23_10_24_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6368,
      //   "modDate": "2023-12-08T11:12:58.225Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_24_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=354f6273b298697f351a89539716a225456b6eede40532f5ce37948d98ba805c"
      // },
      // {
      //   "id": "FR_0371_23_10_25_DIV.html_152",
      //   "name": "FR_0371_23_10_25_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2515,
      //   "modDate": "2023-12-08T11:12:58.350Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_25_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ef8816b952546b0ae58c8b7a60ec36ef1c94e976cb2290cd55b3d3f147e02f3f"
      // },
      // {
      //   "id": "FR_0371_23_10_25_MAT.html_153",
      //   "name": "FR_0371_23_10_25_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7132,
      //   "modDate": "2023-12-08T11:12:58.522Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_25_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9bf07536acf345dafde560d1cfe48b544d6f6a95ba6a5c9c2945caaf38af0b09"
      // },
      // {
      //   "id": "FR_0371_23_10_25_MEDI.html_154",
      //   "name": "FR_0371_23_10_25_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2300,
      //   "modDate": "2023-12-08T11:12:58.681Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_25_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1852cebe333480da6e0cb248994a8ffac7b7cc2065ce34f32a0d2d354d6fc923"
      // },
      // {
      //   "id": "FR_0371_23_10_25_MESSE.html_155",
      //   "name": "FR_0371_23_10_25_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7759,
      //   "modDate": "2023-12-08T11:12:58.787Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_25_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=21355c51d3b36fb757fc705a0cdda495ec4841f21b9f1006bea6ae912d90f653"
      // },
      // {
      //   "id": "FR_0371_23_10_25_SOIR.html_156",
      //   "name": "FR_0371_23_10_25_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6683,
      //   "modDate": "2023-12-08T11:12:58.892Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_25_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d02e124839f70d737fe5edc2e90814d92d9bd148e9de5438385c495aaae9facf"
      // },
      // {
      //   "id": "FR_0371_23_10_26_DIV.html_157",
      //   "name": "FR_0371_23_10_26_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2571,
      //   "modDate": "2023-12-08T11:12:59.011Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_26_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=e2b38f8237ce58942c4c120ba08115aaef4c284924b3d50a36a6d3da3f2b4dc7"
      // },
      // {
      //   "id": "FR_0371_23_10_26_MAT.html_158",
      //   "name": "FR_0371_23_10_26_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6687,
      //   "modDate": "2023-12-08T11:12:59.161Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_26_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ad0f21c06470d2f7119a8505ffde187f29523158851742fe431d733336650c97"
      // },
      // {
      //   "id": "FR_0371_23_10_26_MEDI.html_159",
      //   "name": "FR_0371_23_10_26_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2296,
      //   "modDate": "2023-12-08T11:12:59.312Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_26_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=01b772365a5df982a00990f9450485f23827ebbeb3f78fe3a456d2125b359878"
      // },
      // {
      //   "id": "FR_0371_23_10_26_MESSE.html_160",
      //   "name": "FR_0371_23_10_26_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6467,
      //   "modDate": "2023-12-08T11:12:59.433Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_26_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b863649f6399d8e552f4b48e10f524a189d10f3263eed2e5d8fd8bf0e8e5a83b"
      // },
      // {
      //   "id": "FR_0371_23_10_26_SOIR.html_161",
      //   "name": "FR_0371_23_10_26_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 5890,
      //   "modDate": "2023-12-08T11:12:59.529Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_26_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8ececc5ac6b1811bdd643d47971f4ca98190b10bc27d9babcaac9156be6287bd"
      // },
      // {
      //   "id": "FR_0371_23_10_27_DIV.html_162",
      //   "name": "FR_0371_23_10_27_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2585,
      //   "modDate": "2023-12-08T11:12:59.636Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_27_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=28a9dccffaf35389fc2cc506967efa1a5eb94168dcd90a4ec61ae3e8e0254572"
      // },
      // {
      //   "id": "FR_0371_23_10_27_MAT.html_163",
      //   "name": "FR_0371_23_10_27_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6033,
      //   "modDate": "2023-12-08T11:12:59.784Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_27_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8104e834db2c3af58d4dd1dc4659fb50fb15c1544fff3e576e1073d6f92cfab3"
      // },
      // {
      //   "id": "FR_0371_23_10_27_MEDI.html_164",
      //   "name": "FR_0371_23_10_27_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2440,
      //   "modDate": "2023-12-08T11:12:59.912Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_27_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=97f8af4f77bf34aa654ce3d374c2737da51591fd7c88fee34183eedb840c1458"
      // },
      // {
      //   "id": "FR_0371_23_10_27_MESSE.html_165",
      //   "name": "FR_0371_23_10_27_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6373,
      //   "modDate": "2023-12-08T11:13:00.009Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_27_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=402beb7eedd875db1a4472481c9b1d31c63a098389f1562f840c15dfcc5e6520"
      // },
      // {
      //   "id": "FR_0371_23_10_27_SOIR.html_166",
      //   "name": "FR_0371_23_10_27_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6271,
      //   "modDate": "2023-12-08T11:13:00.105Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_27_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=cb46d1f9dad9fbb0a1f28874ad8d7b468542ba5f33f0c334af6d8ec5e21a8c9e"
      // },
      // {
      //   "id": "FR_0371_23_10_28_MAT.html_167",
      //   "name": "FR_0371_23_10_28_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7877,
      //   "modDate": "2023-12-08T11:13:00.302Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_28_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=3ae7b5a24ec33b3f9646a6120d94d08dc09d9e98ab37e253583a5d2cc738fb3f"
      // },
      // {
      //   "id": "FR_0371_23_10_28_MEDI.html_168",
      //   "name": "FR_0371_23_10_28_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 1968,
      //   "modDate": "2023-12-08T11:13:00.484Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_28_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7f195ce61f205ef1f523c493cd74c6d0d58e91cdd397c5e906434d8a750c44a1"
      // },
      // {
      //   "id": "FR_0371_23_10_28_MESSE.html_169",
      //   "name": "FR_0371_23_10_28_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8755,
      //   "modDate": "2023-12-08T11:13:00.587Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_28_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f3101ca08d613da16baee946b6d925e5b83f322557efa1a52be45ace3e5776f0"
      // },
      // {
      //   "id": "FR_0371_23_10_28_SOIR.html_170",
      //   "name": "FR_0371_23_10_28_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7165,
      //   "modDate": "2023-12-08T11:13:00.686Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_28_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=ed3fec3b55c401078ad61317e60ca841a0b526bd172b32ef6f7bfb1ce5a7b939"
      // },
      // {
      //   "id": "FR_0371_23_10_29_MAT.html_171",
      //   "name": "FR_0371_23_10_29_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7879,
      //   "modDate": "2023-12-08T11:13:00.858Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_29_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=0b9948661abacb51c51fd3a207acdfb067027146fe57770eb694f70830b829b0"
      // },
      // {
      //   "id": "FR_0371_23_10_29_MEDI.html_172",
      //   "name": "FR_0371_23_10_29_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2123,
      //   "modDate": "2023-12-08T11:13:01.044Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_29_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=183547b56f8dd5d57f1b142194cfcbdc2774b43087539f89d355f9c96ff2ffda"
      // },
      // {
      //   "id": "FR_0371_23_10_29_MESSE.html_173",
      //   "name": "FR_0371_23_10_29_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8860,
      //   "modDate": "2023-12-08T11:13:01.174Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_29_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=590ecb0dc22c434a07b8ad7d2c1987ce421a2d88244442e143a5f0460f2c3c56"
      // },
      // {
      //   "id": "FR_0371_23_10_29_PDD.html_174",
      //   "name": "FR_0371_23_10_29_PDD.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 4556,
      //   "modDate": "2023-12-08T11:13:01.383Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_29_PDD.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1f35fb6db9124eae37c6c5dc554fd723fd045e4e742cc350750092cd90cb6330"
      // },
      // {
      //   "id": "FR_0371_23_10_29_SOIR.html_175",
      //   "name": "FR_0371_23_10_29_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6109,
      //   "modDate": "2023-12-08T11:13:01.288Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_29_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f24b9f93625a43e707bf47c076946e182107a8ac71623cb448559118cd761864"
      // },
      // {
      //   "id": "FR_0371_23_10_30_DIV.html_176",
      //   "name": "FR_0371_23_10_30_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2451,
      //   "modDate": "2023-12-08T11:13:01.499Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_30_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d87e2f54a75a16ce20ae0303e9347543dec39b57d49e9bb023d9bb52bd3deed3"
      // },
      // {
      //   "id": "FR_0371_23_10_30_MAT.html_177",
      //   "name": "FR_0371_23_10_30_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6621,
      //   "modDate": "2023-12-08T11:13:01.661Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_30_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=22f6729839447eca6513e428f2157f85837afe1729e14f78f93cdc9dbc707bf4"
      // },
      // {
      //   "id": "FR_0371_23_10_30_MEDI.html_178",
      //   "name": "FR_0371_23_10_30_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2319,
      //   "modDate": "2023-12-08T11:13:01.812Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_30_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d94ddfa23179beb544a0bf2166f6cd320489d9d4ccb557cc63adee5f10be31c0"
      // },
      // {
      //   "id": "FR_0371_23_10_30_MESSE.html_179",
      //   "name": "FR_0371_23_10_30_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 7573,
      //   "modDate": "2023-12-08T11:13:01.913Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_30_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=44571a22804ff8912753bd9e2ad8ab6a9ecf105aded1c37f19f4d66b3d58e301"
      // },
      // {
      //   "id": "FR_0371_23_10_30_SOIR.html_180",
      //   "name": "FR_0371_23_10_30_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6317,
      //   "modDate": "2023-12-08T11:13:02.025Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_30_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=41175f0066b5d4fd8171115d1133688bc9fa696f8baa4bdf255e2f9bf7e6b2b2"
      // },
      // {
      //   "id": "FR_0371_23_10_31_DIV.html_181",
      //   "name": "FR_0371_23_10_31_DIV.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2683,
      //   "modDate": "2023-12-08T11:13:02.151Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_31_DIV.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c9229c85b7338b4fe52f94cb2298fa7d067ab0346452021829ab2825d7d13338"
      // },
      // {
      //   "id": "FR_0371_23_10_31_MAT.html_182",
      //   "name": "FR_0371_23_10_31_MAT.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 8204,
      //   "modDate": "2023-12-08T11:13:02.314Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_31_MAT.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=14a57d439fd2f28f4c4511d06a03c284564d575471262c832378d653e7281231"
      // },
      // {
      //   "id": "FR_0371_23_10_31_MEDI.html_183",
      //   "name": "FR_0371_23_10_31_MEDI.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 2417,
      //   "modDate": "2023-12-08T11:13:02.471Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_31_MEDI.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8bf413a9c87594b3db9ea73a341638c2bfd8d7fafd85370b4709c74567667fc2"
      // },
      // {
      //   "id": "FR_0371_23_10_31_MESSE.html_184",
      //   "name": "FR_0371_23_10_31_MESSE.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6577,
      //   "modDate": "2023-12-08T11:13:02.570Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_31_MESSE.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d5e84091f40c6e0e6dde2c282152286ac9cf838df265482b7e82d2d485b83243"
      // },
      // {
      //   "id": "FR_0371_23_10_31_SOIR.html_185",
      //   "name": "FR_0371_23_10_31_SOIR.html",
      //   "ext": "",
      //   "isDir": false,
      //   "size": 6621,
      //   "modDate": "2023-12-08T11:13:02.679Z",
      //   "thumbnailUrl": "http://localhost:4000/magnificat-fr/FR/2023_10/treated/FR_0371_23_10_31_SOIR.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=JCtaV81KHw2pPTqYlhd4%2F20231211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231211T155313Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9d4ca04a61e7366069d362d3dc9f5b3c4a83fb6d5993d8b9e264cf08b4b1271c"
      // },
      {
        "id": "image_186",
        "name": "image",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "pdf_187",
        "name": "pdf",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "style_188",
        "name": "style",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "2022_11",
        "name": "2022_11",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "2022_8",
        "name": "2022_8",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "2024_3",
        "name": "2024_3",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "2024_1",
        "name": "2024_1",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "2023_2",
        "name": "2023_2",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      },
      {
        "id": "2023_10",
        "name": "2023_10",
        "ext": "",
        "isDir": true,
        "size": 0,
        "modDate": null,
        "thumbnailUrl": ""
      }
    ],
    defaultSelected: [],
    actions: [
      {
        position: "setting",
        action: "CUSTOM_SETTING_ACTION",
        icon: <SettingIcon />,
        label: "Custom setting action",
        selectionRequired: true
      },
      {
        position: "header",
        action: "CUSTOM_HEADER_ACTION",
        icon: <SettingIcon />,
        label: "Only one folder",
        selectionRequired: true,
        selectionType: "one",
        selectionFileType: "folder"
      }
    ],
    sorters: [
      {
        label: "Custom magnificat order",
        action: "CUSTOM_SORTER_MAGNIFICAT",
        position: 1,
        comparisonFn: (a: FileModel, b: FileModel, sort: SoMediaManagerAction.SORT_DIRECTION_ASC | SoMediaManagerAction.SORT_DIRECTION_DESC) => {
          const aYearMonth = [...a.name.matchAll(/(^\d{4})_(0?[1-9]|1[0-2])$/gm)]
          const bYearMonth = [...b.name.matchAll(/(^\d{4})_(0?[1-9]|1[0-2])$/gm)]

          if (aYearMonth?.[0]?.[1] && aYearMonth?.[0]?.[2] && bYearMonth?.[0]?.[1] && bYearMonth?.[0]?.[2]) {
            const yearComparison = sort === SoMediaManagerAction.SORT_DIRECTION_ASC ? Number(aYearMonth[0][1]) - Number(bYearMonth[0][1]) : Number(bYearMonth[0][1]) - Number(aYearMonth[0][1])
            if (yearComparison === 0) return sort === SoMediaManagerAction.SORT_DIRECTION_ASC ? Number(aYearMonth[0][2]) - Number(bYearMonth[0][2]) : Number(bYearMonth[0][2]) - Number(aYearMonth[0][2])
            return yearComparison
          }
          if ((aYearMonth?.[0]?.[1] && aYearMonth?.[0]?.[2] && bYearMonth.length === 0)) {
            return -1
          }
          if ((aYearMonth.length === 0 && bYearMonth?.[0]?.[1] && bYearMonth?.[0]?.[2]) || (!a.modDate && b.modDate)) {
            return 1
          }

          return sort === SoMediaManagerAction.SORT_DIRECTION_ASC ? (dayjs(a.modDate).isBefore(b.modDate) ? 1 : -1) : (dayjs(b.modDate).isBefore(a.modDate) ? 1 : -1)
        }
      }
    ],
    defaultSorter: "CUSTOM_SORTER_MAGNIFICAT",
    defaultSorterDirection: SoMediaManagerAction.SORT_DIRECTION_DESC,
    right: {
      canDelete: true,
      canEdit: true,
      canCreate: true,
      canUpload: true,
      canDownload: true
    },
    confirmButton: false,
    handleAction: (action: string, opt: ActionOpts) => console.log(action, opt)
  }
};