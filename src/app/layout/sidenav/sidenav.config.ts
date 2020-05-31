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
      iconName: "hot-fire",
      hasSimpleDisplay: true,
      route: "/trend"
    },
    {
      name: "Subscriptions",
      iconName: "hot-fire",
      hasSimpleDisplay: true,
      route: "/sub"
    },
]

const accountItens: NavItem[] = [
  {
    name: "Library",
    iconName: "",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "History",
    iconName: "",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Your videos",
    iconName: "",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Watch later",
    iconName: "",
    hasSimpleDisplay: false,
    route: "/"
  },
  {
    name: "Liked videos",
    iconName: "",
    hasSimpleDisplay: false,
    route: "/"
  },
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
    fixedItens: [],
  },
  {
    name: 'site',
    fixedItens: [],
  }
]

export { sections };
