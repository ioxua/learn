export type NavbarOption = {
  label: string;
  to?: string;
  options?: NavbarOption[]
};

// type SecondLevelNavbarOptions =
//   | NavbarOptionData
//   | {
//       label: string;
//       suboptions: NavbarOptionData[];
//     };

// export type NavbarOption =
//   | NavbarOptionData
//   | {
//       label: string;
//       suboptions: (NavbarOptionData | SecondLevelNavbarOptions)[];
//     };
