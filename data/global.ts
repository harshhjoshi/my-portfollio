type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Designs",
    path: "/designs",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Blog",
          link: "/blog",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Designs",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
         {
          name: "Resume",
          link: "https://github.com/harshhjoshi",
          icon: "/static/icons/dribbble-f.svg",
          leavesWebsite: true,
        },
        {
          name: "GitHub",
          link: "https://github.com/harshhjoshi",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/harsh-joshi-%F0%9F%93%8D-957a401a6/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        // {
        //   name: "Dribbble",
        //   link: "https://dribbble.com/braydentw",
        //   icon: "/static/icons/dribbble-f.svg",
        //   leavesWebsite: true,
        // },
        // {
        //   name: "IndieHackers",
        //   link: "https://indiehackers.com/braydentw",
        //   icon: "/static/icons/indiehackers-f.svg",
        //   leavesWebsite: true,
        // },
        {
          name: "Email",
          link: "mailto:1harshh.info@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "harshjoshi",
    paypal: "harshjoshi",
    message: "I appreciate your support very much! 💙 ",
  },
};
