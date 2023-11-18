import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const SecVision = [
  {
    vision: [
      {
        idVision: 5,
        title: "La vision de Upperz community",
        para: "Upperz community mets à la disposition des entreprises une main d’œuvre compétente et qualifiée dans le domaine du numérique. Elle rend accessible aux développeurs, les formations pour leur permettre d’accroitre leurs compétences et rendre professionnelle leur carrière de développeur.",
      },
    ],

    service: [
      {
        idService: 6,
        servtitle: "Nos services",
        contenu: [
          {
            iconService: <SlowMotionVideoOutlinedIcon fontSize="large" />,
            title: "Photos & Vidéos",
            someTexts:
              " mets à la disposition des entreprises une main d’œuvre compétente et qualifiée dans le domaine du numérique.",
          },
          {
            iconService: <DesignServicesOutlinedIcon fontSize="large" />,
            title: "Design",
            someTexts:
              " mets à la disposition des entreprises une main d’œuvre compétente et qualifiée dans le domaine du numérique.",
          },
          {
            iconService: <LocalPrintshopIcon fontSize="large" />,
            title: "Impression Photos",
            someTexts:
              " mets à la disposition des entreprises une main d’œuvre compétente et qualifiée dans le domaine du numérique.",
          },
          {
            iconService: <EmojiPeopleIcon fontSize="large" />,
            title: "Impresion de T-shirt",
            someTexts:
              " mets à la disposition des entreprises une main d’œuvre compétente et qualifiée dans le domaine du numérique.",
          },
        ],
      },
    ],
  },
];
export default SecVision;
