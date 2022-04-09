export default [
  {
    id: 1,
    title: "菜单1",
  },
  {
    id: 2,
    title: "菜单2",
    children: [
      {
        id: 21,
        title: "菜单2-1",
      },
      {
        id: 22,
        title: "菜单2-2",
        children: [
          {
            id: 221,
            title: "菜单2-2-1",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "菜单3",
  },
  {
    id: 4,
    title: "菜单4",
  },
  {
    id: 5,
    title: "菜单5",
    children: [
      {
        id: 51,
        title: "菜单5-1",
      },
    ],
  },
];
