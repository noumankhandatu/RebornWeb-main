

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

export const navLinks = [
    {
        id: "/",
        dropdown: false,
        title: "Home"
    },
    {
        id: "/contact",
        dropdown: false,
        title: "Contact",
    },
    {
        id: "/for-Business",
        dropdown: false,
        title: "For Business",
    },
    {
        id: "/tree-planting",
        dropdown: true,
        title: "Tree Planting",
        dropdownItems: DropLinksTree // Use DropLinksTree array for Tree Planting dropdown
    },
    {
        id: "/carbon-offsets",
        dropdown: false,
        title: "Carbon Offsets",
    },
    {
        id: "/about",
        dropdown: false,
        title: "About Us"
    },
]