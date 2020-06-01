import { SectionSubscriptionService } from './section-subscription.service';
import { NavSection } from './nav-section/nav-section.model';
import { NavItem } from "./nav-item/nav-item.model";

const mainItens: NavItem[] = [
    {
      name: "Home",
      iconName: "home",
      hasSimpleDisplay: true,
      route: "/home"
    },
    {
      name: "Trending",
      iconName: "fire",
      hasSimpleDisplay: true,
      route: "/trend"
    },
    {
      name: "Subscriptions",
      iconName: "subscription",
      hasSimpleDisplay: true,
      route: "/sub"
    },
]

const accountItens: NavItem[] = [
  {
    name: "Library",
    iconName: "library",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "History",
    iconName: "history",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Your videos",
    iconName: "your-videos",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Watch later",
    iconName: "clock",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Liked videos",
    iconName: "like",
    hasSimpleDisplay: false,
    route: "/"
  },
]

const moreItens: NavItem[] = [
  {
    name: "YouTube Premium",
    iconName: "yt-icon",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "YouTube Movies",
    iconName: "movie",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Gaming",
    iconName: "gaming",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Live",
    iconName: "live",
    hasSimpleDisplay: false,
    route: "/"
  }
]

const siteItens: NavItem[] = [
  {
    name: "Settings",
    iconName: "settings",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Report history",
    iconName: "report",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Help",
    iconName: "help",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Send feedback",
    iconName: "feedback",
    hasSimpleDisplay: false,
    route: "/"
  }
]

const sections: NavSection[] = [
  {
    name: 'main',
    fixedItens: mainItens
  },
  {
    name: 'account',
    fixedItens: accountItens,
    qtdInitialDisplay: 0
  },
  {
    name: 'subscriptions',
    title: 'SUBSCRIPTIONS',
    fixedItens: [],
    qtdInitialDisplay: 7,
    sectionService: SectionSubscriptionService
  },
  {
    name: 'more',
    title: 'MORE FROM MYTUBE',
    fixedItens: moreItens,
  },
  {
    name: 'site',
    fixedItens: siteItens,
  }
]

export { sections };
