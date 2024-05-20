export const cardsubscribe = [
  {
    id: 1,
    packageType: "BASIC",
    description:
      "Perfect for individuals and small institutions who want to explore the core features of our Eschool platform",
    price: "19",
    yearlyprice: "320",
    yearlyannual: "per year",
    annualPrice: "Per Month",
    benefit: [
      {
        text: "Access to Student Information Management",
        badge: null,
        icons: true,
      },
      { text: "1,000 student records per month" },
      {
        text: "No API Credits required",
        cancle: true,
        text2: "yes No API Credits required",
      },
      { text: "10 classes monitoring quota" },
      { text: "Monitoring interval of 60 minutes" },
      { text: "20% discount on premium support" },
      { text: "Parent-Teacher Communication", badge: "Coming Soon" },
      { text: "Customizable Gradebook", badge: "Coming Soon" },
      { text: "Resource Sharing Platform", badge: "Coming Soon" },
      {
        text: "Customization Options",
        cancle: true,
        text2: "yes Customization Options",
      },
    ],
  },
  {
    id: 2,
    packageType: "PREMIUM",
    description:
      "Perfect for individuals and small institutions who want to explore the core features of our Eschool platform",
    price: "99",
    yearlyprice: "400",
    yearlyannual: "per year",
    annualPrice: "Per Month",
    benefit: [
      { text: "Access to Student Information Management" },
      { text: "1,000 student records per month" },
      { text: "Unlimited API Credits " },
      { text: "20 classes monitoring quota" },
      { text: "Monitoring interval of 60 minutes" },
      { text: "20% discount on premium support" },
      { text: "Parent-Teacher Communication", badge: "Coming Soon" },
      { text: "Customizable Gradebook", badge: "Coming Soon" },
      { text: "Resource Sharing Platform", badge: "Coming Soon" },
      { text: "Customization Options", cancle: false },
    ],
  },
  {
    id: 3,
    packageType: "STANDARD",
    description:
      "Perfect for individuals and small institutions who want to explore the core features of our Eschool platform",
    price: "49",
    yearlyprice: "800",
    yearlyannual: "per year",
    annualPrice: "Per Month",
    benefit: [
      { text: "Access to Student Information Management" },
      { text: "1,000 student records per month" },
      { text: "Unlimited API Credits", cancle: false },
      { text: "10 classes monitoring quota" },
      { text: "Monitoring interval of 60 minutes" },
      { text: "20% discount on premium support" },
      { text: "Parent-Teacher Communication", badge: "Coming Soon" },
      { text: "Customizable Gradebook", badge: "Coming Soon" },
      { text: "Resource Sharing Platform", badge: "Coming Soon" },
      { text: "Customization Options", cancle: true },
    ],
  },
];

// index === 2 &&
//                                 ismonthlyOnLeft === true
//                                   ? benefit.text2
//                                   : benefit.text   }
