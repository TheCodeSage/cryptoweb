import { CreatureEnum, SkillEnum } from "./enums";
import { DashboardCardProps, IMarketPlaceCardData } from "./interfaces";

export const getDashboardCardData = () => {
  const dashboardData: DashboardCardProps[] = [
    {
      id: 1,
      title: "New Feature",
      subtitle: "Battle Arena",
      description:
        "This leopard monkey was born in the mystic jungle of Zukowray," +
        "the mother is an impy of a leopard and the father is a man of a monkey." +
        "Watch out for this one...",
      likes: 26,
      alignment: true,
    },
    {
      id: 2,
      title: "New Creature!",
      subtitle: "Leopard Monkey",
      description:
        "One day in the cold forest of Zukowray, a monkey made it with a leopard and created an amazing creature. He is Monkard Manmanman",
      likes: 16,
      img: "https://i.pinimg.com/originals/b1/c3/a2/b1c3a269cd3785782bd0c04947c5286c.jpg",
      alignment: false,
    },
    {
      id: 3,
      title: "New Creature Again!",
      subtitle: "Giant MF",
      description:
        "He's big, he's strong... and most of all, he is hereeeee to stay.",
      likes: 23,
      img: "https://loginportal.funnyjunk.com/large/pictures/d3/70/d37086_5411200.jpg",
      alignment: true,
    },
    {
      id: 4,
      title: "Some Stuff",
      subtitle: "Yay!",
      description: "Getting so swole it hurts to look in the mirror.",
      likes: 13,
      alignment: false,
    },
    {
      id: 5,
      title: "Grand Opening!",
      subtitle: "Welcome :)",
      description: "First 5 purchases are hald off while supplies last.",
      likes: 123,
      alignment: true,
    },
    {
      id: 6,
      title: "Alpha Release",
      subtitle: "6/6/2021",
      description: "First 100 purchases are half off while supplies last.",
      likes: 123,
      alignment: false,
    },
    {
      id: 7,
      title: "Coming Soon, Crypto NFTs",
      subtitle: "Stay tuned",
      description: "work in progress...",
      likes: 123,
      alignment: true,
    },
  ];

  return dashboardData;
};

export const getMarketplaceData = () => {
  const data: IMarketPlaceCardData[] = [
    {
      name: CreatureEnum.Dragon,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M9B9jjUf7-EpXagtNicTZgHaFK%26pid%3DApi&f=1",
      price: 100,
      tier: 1,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.Dragon,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdiratia%2Fimages%2Fd%2Fd3%2FDrogon-by-monika-zagrobelna.png%2Frevision%2Flatest%3Fcb%3D20190521134544&f=1&nofb=1",
      price: 90,
      tier: 2,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.Wolf,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F10%2F702204-fantasy-original-art-artistic-artwork-wolf-wolves.jpg&f=1&nofb=1",
      price: 80,
      tier: 3,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.MantisShrimp,
      img: "https://t00.deviantart.net/v3nGhnrPUy_Qr3y8LEG9T5kZnpc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/6871/th/pre/f/2011/303/5/a/peacock_mantis_shrimp_by_blackjackconcpiracy-d4ejsis.jpg",
      price: 70,
      tier: 4,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.Dragon,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fdiratia%2Fimages%2Fd%2Fd3%2FDrogon-by-monika-zagrobelna.png%2Frevision%2Flatest%3Fcb%3D20190521134544&f=1&nofb=1",
      price: 90,
      tier: 5,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.Wolf,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F10%2F702204-fantasy-original-art-artistic-artwork-wolf-wolves.jpg&f=1&nofb=1",
      price: 80,
      tier: 3,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.MantisShrimp,
      img: "https://t00.deviantart.net/v3nGhnrPUy_Qr3y8LEG9T5kZnpc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/6871/th/pre/f/2011/303/5/a/peacock_mantis_shrimp_by_blackjackconcpiracy-d4ejsis.jpg",
      price: 70,
      tier: 1,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.MantisShrimp,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8pFOcB9EPVEX2xz7fFlcBgHaFP%26pid%3DApi&f=1",
      price: 70,
      tier: 2,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },

    {
      name: CreatureEnum.MantisShrimp,
      img: "https://t00.deviantart.net/v3nGhnrPUy_Qr3y8LEG9T5kZnpc=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/6871/th/pre/f/2011/303/5/a/peacock_mantis_shrimp_by_blackjackconcpiracy-d4ejsis.jpg",
      price: 70,
      tier: 4,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
    {
      name: CreatureEnum.MantisShrimp,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.8pFOcB9EPVEX2xz7fFlcBgHaFP%26pid%3DApi&f=1",
      price: 70,
      tier: 2,
      attributes: {
        attackFloor: 3,
        attackCeiling: 5,
        defense: 3,
        speed: 3,
        skill: SkillEnum.pimpSmack,
      },
    },
  ];
  return data;
};
