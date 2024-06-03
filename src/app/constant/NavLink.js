

export const DropLinks = [
    {
        dropTitle: 'ECO Friendly Profile',
        id: "/eco-friendly-profile",
    },
    {
        dropTitle: 'Marketing',
        id: "/marketing",
    },
    {
        dropTitle: 'Carbon Offset',
        id: "/carbon-offsets",
    },
]


export const DropLinksTree = [
    {
        dropTitle: 'Mozambique',
        id: "/mozambique",
    },
    {
        dropTitle: 'Madagascar',
        id: "/madagascar",
    },
    {
        dropTitle: 'Kenya',
        id: "/kenya",
    },
    {
        dropTitle: 'Honduras',
        id: "/honduras",
    },
    {
        dropTitle: 'Ethiopia',
        id: "/ethiopia",
    },
]

const aboutDropdown = [
    {
        dropTitle: 'FAQ',
        id: "/faq",
    },

]

const uniqueProject = [
    {
        dropTitle: 'Flight Offset Luggage Tag',
        id: "/flight",
    },
    {
        dropTitle: 'Coffee Shop Loyalty Card',
        id: "/coffee",
    },
]

export const navLinks = [
    {
        id: "/",
        dropdown: false,
        title: "Home"
    },
    {
        id: "/for-Business",
        dropdown: false,
        title: "For Business",
    },
    {
        id: "/carbon-offsets",
        dropdown: false,
        title: "Carbon Offsets",
    },
    {
        id: "/tree-planting",
        dropdown: true,
        title: "Tree Planting",
        dropdownItems: DropLinksTree
    },
    {
        id: "/flight",
        dropdown: true,
        title: "Our Unique Projects",
        dropdownItems: uniqueProject
    },
    {
        id: "/about",
        dropdown: true,
        title: "About Us",
        dropdownItems: aboutDropdown
    },
]