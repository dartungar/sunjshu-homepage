export interface storyData {
  id: number;
  title: string;
  description?: string;
  thumbnailImagePath: string;
  images: imageData[];
}

export interface imageData {
  title: string;
  path: string;
}

export const storiesData: storyData[] = [
  {
    title: "Дарья и Борис",
    id: 1,
    thumbnailImagePath:
      "/images/stories/Дарья и Борис/Дарья_и_Борис_Обложка.jpg",
    description: "",
    images: [
      {
        title: "Дарья_и_Борис_1",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_1.jpg",
      },
      {
        title: "Дарья_и_Борис_10",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_10.jpg",
      },
      {
        title: "Дарья_и_Борис_11",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_11.jpg",
      },
      {
        title: "Дарья_и_Борис_2",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_2.jpg",
      },
      {
        title: "Дарья_и_Борис_3",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_3.jpg",
      },
      {
        title: "Дарья_и_Борис_4",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_4.jpg",
      },
      {
        title: "Дарья_и_Борис_5",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_5.jpg",
      },
      {
        title: "Дарья_и_Борис_6",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_6.jpg",
      },
      {
        title: "Дарья_и_Борис_7",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_7.jpg",
      },
      {
        title: "Дарья_и_Борис_8",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_8.jpg",
      },
      {
        title: "Дарья_и_Борис_9",
        path: "/images/stories/Дарья и Борис/Дарья_и_Борис_9.jpg",
      },
    ],
  },
  {
    title: "Елена",
    id: 2,
    thumbnailImagePath: "/images/stories/Елена/Елена_Обложка.jpg",
    description: "",
    images: [
      { title: "Елена_1", path: "/images/stories/Елена/Елена_1.jpg" },
      { title: "Елена_2", path: "/images/stories/Елена/Елена_2.jpg" },
      { title: "Елена_3", path: "/images/stories/Елена/Елена_3.jpg" },
      { title: "Елена_4", path: "/images/stories/Елена/Елена_4.jpg" },
      { title: "Елена_5", path: "/images/stories/Елена/Елена_5.jpg" },
      { title: "Елена_6", path: "/images/stories/Елена/Елена_6.jpg" },
      { title: "Елена_7", path: "/images/stories/Елена/Елена_7.jpg" },
    ],
  },
  {
    title: "Наталья и Юрий",
    id: 3,
    thumbnailImagePath:
      "/images/stories/Наталья и Юрий/Наталья_и_Юрий_Обложка.jpg",
    description: "",
    images: [
      {
        title: "Наталья_и_Юрий_1",
        path: "/images/stories/Наталья и Юрий/Наталья_и_Юрий_1.jpg",
      },
      {
        title: "Наталья_и_Юрий_2",
        path: "/images/stories/Наталья и Юрий/Наталья_и_Юрий_2.jpg",
      },
      {
        title: "Наталья_и_Юрий_3",
        path: "/images/stories/Наталья и Юрий/Наталья_и_Юрий_3.jpg",
      },
      {
        title: "Наталья_и_Юрий_4",
        path: "/images/stories/Наталья и Юрий/Наталья_и_Юрий_4.jpg",
      },
      {
        title: "Наталья_и_Юрий_5",
        path: "/images/stories/Наталья и Юрий/Наталья_и_Юрий_5.jpg",
      },
      {
        title: "Наталья_и_Юрий_6",
        path: "/images/stories/Наталья и Юрий/Наталья_и_Юрий_6.jpg",
      },
    ],
  },
  {
    title: "Виталий",
    id: 4,
    thumbnailImagePath: "/images/stories/Виталий/Виталий_Обложка.jpg",
    description: "",
    images: [
      { title: "Виталий_1", path: "/images/stories/Виталий/Виталий_1.jpg" },
      { title: "Виталий_2", path: "/images/stories/Виталий/Виталий_2.jpg" },
      { title: "Виталий_3", path: "/images/stories/Виталий/Виталий_3.jpg" },
      { title: "Виталий_4", path: "/images/stories/Виталий/Виталий_4.jpg" },
      { title: "Виталий_5", path: "/images/stories/Виталий/Виталий_5.jpg" },
      { title: "Виталий_6", path: "/images/stories/Виталий/Виталий_6.jpg" },
      { title: "Виталий_7", path: "/images/stories/Виталий/Виталий_7.jpg" },
      { title: "Виталий_8", path: "/images/stories/Виталий/Виталий_8.jpg" },
      { title: "Виталий_9", path: "/images/stories/Виталий/Виталий_9.jpg" },
    ],
  },
  {
    title: "Алиса и Кира",
    id: 5,
    thumbnailImagePath:
      "/images/stories/Алиса и Кира/Алиса_и_Кира_Обложка.jpg",
    description: "",
    images: [
      { title: "1", path: "/images/stories/Алиса и Кира/1.jpg" },
      { title: "2", path: "/images/stories/Алиса и Кира/2.jpg" },
      { title: "3", path: "/images/stories/Алиса и Кира/3.jpg" },
      { title: "4", path: "/images/stories/Алиса и Кира/4.jpg" },
      { title: "5", path: "/images/stories/Алиса и Кира/5.jpg" },
      { title: "6", path: "/images/stories/Алиса и Кира/6.jpg" },
      { title: "7", path: "/images/stories/Алиса и Кира/7.jpg" },
      { title: "8", path: "/images/stories/Алиса и Кира/8.jpg" },
      { title: "9", path: "/images/stories/Алиса и Кира/9.jpg" },
      { title: "10", path: "/images/stories/Алиса и Кира/10.jpg" },
    ],
  },
  {
    title: "Мария и Максим",
    id: 6,
    thumbnailImagePath:
      "/images/stories/Мария и Максим/Мария_и_Максим_Обложка.jpg",
    description: "",
    images: [
      {
        title: "Мария_и_Максим_1",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_1.jpg",
      },
      {
        title: "Мария_и_Максим_10",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_10.jpg",
      },
      {
        title: "Мария_и_Максим_11",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_11.jpg",
      },
      {
        title: "Мария_и_Максим_12",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_12.jpg",
      },
      {
        title: "Мария_и_Максим_13",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_13.jpg",
      },
      {
        title: "Мария_и_Максим_14",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_14.jpg",
      },
      {
        title: "Мария_и_Максим_15",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_15.jpg",
      },
      {
        title: "Мария_и_Максим_2",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_2.jpg",
      },
      {
        title: "Мария_и_Максим_3",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_3.jpg",
      },
      {
        title: "Мария_и_Максим_4",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_4.jpg",
      },
      {
        title: "Мария_и_Максим_5",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_5.jpg",
      },
      {
        title: "Мария_и_Максим_6",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_6.jpg",
      },
      {
        title: "Мария_и_Максим_7",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_7.jpg",
      },
      {
        title: "Мария_и_Максим_8",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_8.jpg",
      },
      {
        title: "Мария_и_Максим_9",
        path: "/images/stories/Мария и Максим/Мария_и_Максим_9.jpg",
      },
    ],
  },

  {
    title: "Оксана",
    id: 7,
    thumbnailImagePath: "/images/stories/Оксана/Оксана_Обложка.jpg",
    description: "",
    images: [
      { title: "Оксана_1", path: "/images/stories/Оксана/Оксана_1.jpg" },
      { title: "Оксана_2", path: "/images/stories/Оксана/Оксана_2.jpg" },
      { title: "Оксана_3", path: "/images/stories/Оксана/Оксана_3.jpg" },
      { title: "Оксана_4", path: "/images/stories/Оксана/Оксана_4.jpg" },
      { title: "Оксана_5", path: "/images/stories/Оксана/Оксана_5.jpg" },
      { title: "Оксана_6", path: "/images/stories/Оксана/Оксана_6.jpg" },
      { title: "Оксана_7", path: "/images/stories/Оксана/Оксана_7.jpg" },
      { title: "Оксана_8", path: "/images/stories/Оксана/Оксана_8.jpg" },
    ],
  },
  {
    title: "Кристина и Яна",
    id: 8,
    thumbnailImagePath:
      "/images/stories/Кристина и Яна/Кристина_и_Яна_Обложка.jpg",
    description: "",
    images: [
      {
        title: "Кристина_и_Яна_1",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_1.jpg",
      },
      {
        title: "Кристина_и_Яна_10",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_10.jpg",
      },
      {
        title: "Кристина_и_Яна_11",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_11.jpg",
      },
      {
        title: "Кристина_и_Яна_12",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_12.jpg",
      },
      {
        title: "Кристина_и_Яна_13",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_13.jpg",
      },
      {
        title: "Кристина_и_Яна_2",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_2.jpg",
      },
      {
        title: "Кристина_и_Яна_3",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_3.jpg",
      },
      {
        title: "Кристина_и_Яна_4",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_4.jpg",
      },
      {
        title: "Кристина_и_Яна_5",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_5.jpg",
      },
      {
        title: "Кристина_и_Яна_6",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_6.jpg",
      },
      {
        title: "Кристина_и_Яна_7",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_7.jpg",
      },
      {
        title: "Кристина_и_Яна_8",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_8.jpg",
      },
      {
        title: "Кристина_и_Яна_9",
        path: "/images/stories/Кристина и Яна/Кристина_и_Яна_9.jpg",
      },
    ],
  },
  {
    title: "Дарья",
    id: 9,
    thumbnailImagePath: "/images/stories/Дарья/Дарья_Обложка.jpg",
    description: "",
    images: [
      { title: "Дарья_1", path: "/images/stories/Дарья/Дарья_1.jpg" },
      { title: "Дарья_2", path: "/images/stories/Дарья/Дарья_2.jpg" },
      { title: "Дарья_3", path: "/images/stories/Дарья/Дарья_3.jpg" },
      { title: "Дарья_4", path: "/images/stories/Дарья/Дарья_4.jpg" },
      { title: "Дарья_5", path: "/images/stories/Дарья/Дарья_5.jpg" },
      { title: "Дарья_6", path: "/images/stories/Дарья/Дарья_6.jpg" },
      { title: "Дарья_7", path: "/images/stories/Дарья/Дарья_7.jpg" },
      { title: "Дарья_8", path: "/images/stories/Дарья/Дарья_8.jpg" },
      { title: "Дарья_9", path: "/images/stories/Дарья/Дарья_9.jpg" },
    ],
  },


  {
    title: "Мария и Андрей",
    id: 10,
    thumbnailImagePath:
      "/images/stories/Мария и Андрей/Мария_и_Андрей_Обложка.jpg",
    description: "",
    images: [
      { title: "1", path: "/images/stories/Мария и Андрей/1.jpg" },
      { title: "10", path: "/images/stories/Мария и Андрей/10.jpg" },
      { title: "2", path: "/images/stories/Мария и Андрей/2.jpg" },
      { title: "3", path: "/images/stories/Мария и Андрей/3.jpg" },
      { title: "4", path: "/images/stories/Мария и Андрей/4.jpg" },
      { title: "5", path: "/images/stories/Мария и Андрей/5.jpg" },
      { title: "6", path: "/images/stories/Мария и Андрей/6.jpg" },
      { title: "7", path: "/images/stories/Мария и Андрей/7.jpg" },
      { title: "8", path: "/images/stories/Мария и Андрей/8.jpg" },
      { title: "9", path: "/images/stories/Мария и Андрей/9.jpg" },
      {
        title: "Мария+Анрей (36)",
        path: "/images/stories/Мария и Андрей/Мария+Анрей (36).jpg",
      },
      {
        title: "Мария+Анрей (50)",
        path: "/images/stories/Мария и Андрей/Мария+Анрей (50).jpg",
      },
      {
        title: "Мария+Анрей (9)",
        path: "/images/stories/Мария и Андрей/Мария+Анрей (9).jpg",
      },
    ],
  },
  {
    title: "Александр",
    id: 11,
    thumbnailImagePath: "/images/stories/Александр/Александр_Обложка.jpg",
    description: "",
    images: [
      {
        title: "Александр_1",
        path: "/images/stories/Александр/Александр_1.jpg",
      },
      {
        title: "Александр_10",
        path: "/images/stories/Александр/Александр_10.jpg",
      },
      {
        title: "Александр_11",
        path: "/images/stories/Александр/Александр_11.jpg",
      },
      {
        title: "Александр_12",
        path: "/images/stories/Александр/Александр_12.jpg",
      },
      {
        title: "Александр_13",
        path: "/images/stories/Александр/Александр_13.jpg",
      },
      {
        title: "Александр_14",
        path: "/images/stories/Александр/Александр_14.jpg",
      },
      {
        title: "Александр_15",
        path: "/images/stories/Александр/Александр_15.jpg",
      },
      {
        title: "Александр_16",
        path: "/images/stories/Александр/Александр_16.jpg",
      },
      {
        title: "Александр_17",
        path: "/images/stories/Александр/Александр_17.jpg",
      },
      {
        title: "Александр_18",
        path: "/images/stories/Александр/Александр_18.jpg",
      },
      {
        title: "Александр_19",
        path: "/images/stories/Александр/Александр_19.jpg",
      },
      {
        title: "Александр_2",
        path: "/images/stories/Александр/Александр_2.jpg",
      },
      {
        title: "Александр_20",
        path: "/images/stories/Александр/Александр_20.jpg",
      },
      {
        title: "Александр_21",
        path: "/images/stories/Александр/Александр_21.jpg",
      },
      {
        title: "Александр_3",
        path: "/images/stories/Александр/Александр_3.jpg",
      },
      {
        title: "Александр_4",
        path: "/images/stories/Александр/Александр_4.jpg",
      },
      {
        title: "Александр_5",
        path: "/images/stories/Александр/Александр_5.jpg",
      },
      {
        title: "Александр_6",
        path: "/images/stories/Александр/Александр_6.jpg",
      },
      {
        title: "Александр_7",
        path: "/images/stories/Александр/Александр_7.jpg",
      },
      {
        title: "Александр_8",
        path: "/images/stories/Александр/Александр_8.jpg",
      },
      {
        title: "Александр_9",
        path: "/images/stories/Александр/Александр_9.jpg",
      },
    ],
  },

  {
    title: "Анастасия",
    id: 12,
    thumbnailImagePath: "/images/stories/Анастасия/Анастасия_Обложка.jpg",
    description: "",
    images: [
      {
        title: "Анастасия_1",
        path: "/images/stories/Анастасия/Анастасия_1.jpg",
      },
      {
        title: "Анастасия_2",
        path: "/images/stories/Анастасия/Анастасия_2.jpg",
      },
      {
        title: "Анастасия_3",
        path: "/images/stories/Анастасия/Анастасия_3.jpg",
      },
      {
        title: "Анастасия_4",
        path: "/images/stories/Анастасия/Анастасия_4.jpg",
      },
      {
        title: "Анастасия_5",
        path: "/images/stories/Анастасия/Анастасия_5.jpg",
      },
      {
        title: "Анастасия_6",
        path: "/images/stories/Анастасия/Анастасия_6.jpg",
      },
      {
        title: "Анастасия_7",
        path: "/images/stories/Анастасия/Анастасия_7.jpg",
      },
    ],
  },



  {
    id: 13,
    title: "Дарья и Борис",
    thumbnailImagePath: "/images/stories/Дарья_и_Борис/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Дарья_и_Борис_1",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_1.jpg",
      },
      {
        title: "Дарья_и_Борис_10",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_10.jpg",
      },
      {
        title: "Дарья_и_Борис_11",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_11.jpg",
      },
      {
        title: "Дарья_и_Борис_12",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_12.jpg",
      },
      {
        title: "Дарья_и_Борис_13",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_13.jpg",
      },
      {
        title: "Дарья_и_Борис_14",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_14.jpg",
      },
      {
        title: "Дарья_и_Борис_15",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_15.jpg",
      },
      {
        title: "Дарья_и_Борис_16",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_16.jpg",
      },
      {
        title: "Дарья_и_Борис_17",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_17.jpg",
      },
      {
        title: "Дарья_и_Борис_18",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_18.jpg",
      },
      {
        title: "Дарья_и_Борис_19",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_19.jpg",
      },
      {
        title: "Дарья_и_Борис_2",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_2.jpg",
      },
      {
        title: "Дарья_и_Борис_3",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_3.jpg",
      },
      {
        title: "Дарья_и_Борис_4",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_4.jpg",
      },
      {
        title: "Дарья_и_Борис_5",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_5.jpg",
      },
      {
        title: "Дарья_и_Борис_6",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_6.jpg",
      },
      {
        title: "Дарья_и_Борис_7",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_7.jpg",
      },
      {
        title: "Дарья_и_Борис_8",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_8.jpg",
      },
      {
        title: "Дарья_и_Борис_9",
        path: "/images/stories/Дарья_и_Борис/Дарья_и_Борис_9.jpg",
      },
    ],
  },
  {
    id: 14,
    title: "Полина",
    thumbnailImagePath: "/images/stories/Полина/Обложка.jpg",
    description: "",
    images: [
      { title: "Полина_1", path: "/images/stories/Полина/Полина_1.jpg" },
      { title: "Полина_10", path: "/images/stories/Полина/Полина_10.jpg" },
      { title: "Полина_11", path: "/images/stories/Полина/Полина_11.jpg" },
      { title: "Полина_12", path: "/images/stories/Полина/Полина_12.jpg" },
      { title: "Полина_13", path: "/images/stories/Полина/Полина_13.jpg" },
      { title: "Полина_14", path: "/images/stories/Полина/Полина_14.jpg" },
      { title: "Полина_15", path: "/images/stories/Полина/Полина_15.jpg" },
      { title: "Полина_16", path: "/images/stories/Полина/Полина_16.jpg" },
      { title: "Полина_17", path: "/images/stories/Полина/Полина_17.jpg" },
      { title: "Полина_18", path: "/images/stories/Полина/Полина_18.jpg" },
      { title: "Полина_19", path: "/images/stories/Полина/Полина_19.jpg" },
      { title: "Полина_2", path: "/images/stories/Полина/Полина_2.jpg" },
      { title: "Полина_20", path: "/images/stories/Полина/Полина_20.jpg" },
      { title: "Полина_21", path: "/images/stories/Полина/Полина_21.jpg" },
      { title: "Полина_22", path: "/images/stories/Полина/Полина_22.jpg" },
      { title: "Полина_23", path: "/images/stories/Полина/Полина_23.jpg" },
      { title: "Полина_24", path: "/images/stories/Полина/Полина_24.jpg" },
      { title: "Полина_25", path: "/images/stories/Полина/Полина_25.jpg" },
      { title: "Полина_26", path: "/images/stories/Полина/Полина_26.jpg" },
      { title: "Полина_27", path: "/images/stories/Полина/Полина_27.jpg" },
      { title: "Полина_28", path: "/images/stories/Полина/Полина_28.jpg" },
      { title: "Полина_29", path: "/images/stories/Полина/Полина_29.jpg" },
      { title: "Полина_3", path: "/images/stories/Полина/Полина_3.jpg" },
      { title: "Полина_30", path: "/images/stories/Полина/Полина_30.jpg" },
      { title: "Полина_4", path: "/images/stories/Полина/Полина_4.jpg" },
      { title: "Полина_5", path: "/images/stories/Полина/Полина_5.jpg" },
      { title: "Полина_6", path: "/images/stories/Полина/Полина_6.jpg" },
      { title: "Полина_7", path: "/images/stories/Полина/Полина_7.jpg" },
      { title: "Полина_8", path: "/images/stories/Полина/Полина_8.jpg" },
      { title: "Полина_9", path: "/images/stories/Полина/Полина_9.jpg" },
    ],
  },
  {
    id: 15,
    title: "Дарья и Роман",
    thumbnailImagePath: "/images/stories/Дарья_и_Роман/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Дарья_и_Роман_1",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_1.jpg",
      },
      {
        title: "Дарья_и_Роман_10",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_10.jpg",
      },
      {
        title: "Дарья_и_Роман_11",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_11.jpg",
      },
      {
        title: "Дарья_и_Роман_12",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_12.jpg",
      },
      {
        title: "Дарья_и_Роман_13",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_13.jpg",
      },
      {
        title: "Дарья_и_Роман_14",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_14.jpg",
      },
      {
        title: "Дарья_и_Роман_15",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_15.jpg",
      },
      {
        title: "Дарья_и_Роман_16",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_16.jpg",
      },
      {
        title: "Дарья_и_Роман_17",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_17.jpg",
      },
      {
        title: "Дарья_и_Роман_18",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_18.jpg",
      },
      {
        title: "Дарья_и_Роман_2",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_2.jpg",
      },
      {
        title: "Дарья_и_Роман_3",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_3.jpg",
      },
      {
        title: "Дарья_и_Роман_4",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_4.jpg",
      },
      {
        title: "Дарья_и_Роман_5",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_5.jpg",
      },
      {
        title: "Дарья_и_Роман_6",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_6.jpg",
      },
      {
        title: "Дарья_и_Роман_7",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_7.jpg",
      },
      {
        title: "Дарья_и_Роман_8",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_8.jpg",
      },
      {
        title: "Дарья_и_Роман_9",
        path: "/images/stories/Дарья_и_Роман/Дарья_и_Роман_9.jpg",
      },
    ],
  },
  {
    id: 16,
    title: "Екатерина",
    thumbnailImagePath: "/images/stories/Екатерина/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Екатерина_1",
        path: "/images/stories/Екатерина/Екатерина_1.jpg",
      },
      {
        title: "Екатерина_10",
        path: "/images/stories/Екатерина/Екатерина_10.jpg",
      },
      {
        title: "Екатерина_11",
        path: "/images/stories/Екатерина/Екатерина_11.jpg",
      },
      {
        title: "Екатерина_12",
        path: "/images/stories/Екатерина/Екатерина_12.jpg",
      },
      {
        title: "Екатерина_13",
        path: "/images/stories/Екатерина/Екатерина_13.jpg",
      },
      {
        title: "Екатерина_14",
        path: "/images/stories/Екатерина/Екатерина_14.jpg",
      },
      {
        title: "Екатерина_15",
        path: "/images/stories/Екатерина/Екатерина_15.jpg",
      },
      {
        title: "Екатерина_16",
        path: "/images/stories/Екатерина/Екатерина_16.jpg",
      },
      {
        title: "Екатерина_17",
        path: "/images/stories/Екатерина/Екатерина_17.jpg",
      },
      {
        title: "Екатерина_2",
        path: "/images/stories/Екатерина/Екатерина_2.jpg",
      },
      {
        title: "Екатерина_3",
        path: "/images/stories/Екатерина/Екатерина_3.jpg",
      },
      {
        title: "Екатерина_4",
        path: "/images/stories/Екатерина/Екатерина_4.jpg",
      },
      {
        title: "Екатерина_5",
        path: "/images/stories/Екатерина/Екатерина_5.jpg",
      },
      {
        title: "Екатерина_6",
        path: "/images/stories/Екатерина/Екатерина_6.jpg",
      },
      {
        title: "Екатерина_7",
        path: "/images/stories/Екатерина/Екатерина_7.jpg",
      },
      {
        title: "Екатерина_8",
        path: "/images/stories/Екатерина/Екатерина_8.jpg",
      },
      {
        title: "Екатерина_9",
        path: "/images/stories/Екатерина/Екатерина_9.jpg",
      },
    ],
  },
  {
    id: 17,
    title: "Александр и Александра",
    thumbnailImagePath: "/images/stories/Александр_и_Александра/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Александр_и_Александра_1",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_1.jpg",
      },
      {
        title: "Александр_и_Александра_10",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_10.jpg",
      },
      {
        title: "Александр_и_Александра_11",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_11.jpg",
      },
      {
        title: "Александр_и_Александра_12",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_12.jpg",
      },
      {
        title: "Александр_и_Александра_13",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_13.jpg",
      },
      {
        title: "Александр_и_Александра_2",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_2.jpg",
      },
      {
        title: "Александр_и_Александра_3",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_3.jpg",
      },
      {
        title: "Александр_и_Александра_4",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_4.jpg",
      },
      {
        title: "Александр_и_Александра_5",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_5.jpg",
      },
      {
        title: "Александр_и_Александра_6",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_6.jpg",
      },
      {
        title: "Александр_и_Александра_7",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_7.jpg",
      },
      {
        title: "Александр_и_Александра_8",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_8.jpg",
      },
      {
        title: "Александр_и_Александра_9",
        path: "/images/stories/Александр_и_Александра/Александр_и_Александра_9.jpg",
      },
    ],
  },
  {
    id: 18,
    title: "Елизавета и Чизу",
    thumbnailImagePath: "/images/stories/Елизавета_и_Чизу/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Елизавета_и_Чизу_1",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_1.jpg",
      },
      {
        title: "Елизавета_и_Чизу_10",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_10.jpg",
      },
      {
        title: "Елизавета_и_Чизу_11",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_11.jpg",
      },
      {
        title: "Елизавета_и_Чизу_12",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_12.jpg",
      },
      {
        title: "Елизавета_и_Чизу_13",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_13.jpg",
      },
      {
        title: "Елизавета_и_Чизу_14",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_14.jpg",
      },
      {
        title: "Елизавета_и_Чизу_15",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_15.jpg",
      },
      {
        title: "Елизавета_и_Чизу_16",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_16.jpg",
      },
      {
        title: "Елизавета_и_Чизу_17",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_17.jpg",
      },
      {
        title: "Елизавета_и_Чизу_18",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_18.jpg",
      },
      {
        title: "Елизавета_и_Чизу_19",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_19.jpg",
      },
      {
        title: "Елизавета_и_Чизу_2",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_2.jpg",
      },
      {
        title: "Елизавета_и_Чизу_3",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_3.jpg",
      },
      {
        title: "Елизавета_и_Чизу_4",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_4.jpg",
      },
      {
        title: "Елизавета_и_Чизу_5",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_5.jpg",
      },
      {
        title: "Елизавета_и_Чизу_6",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_6.jpg",
      },
      {
        title: "Елизавета_и_Чизу_7",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_7.jpg",
      },
      {
        title: "Елизавета_и_Чизу_8",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_8.jpg",
      },
      {
        title: "Елизавета_и_Чизу_9",
        path: "/images/stories/Елизавета_и_Чизу/Елизавета_и_Чизу_9.jpg",
      },
    ],
  },
  {
    id: 19,
    title: "Андрей и Елизавета",
    thumbnailImagePath: "/images/stories/Андрей_и_Елизавета/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Андрей_и_Елизавета_1",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_1.jpg",
      },
      {
        title: "Андрей_и_Елизавета_10",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_10.jpg",
      },
      {
        title: "Андрей_и_Елизавета_11",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_11.jpg",
      },
      {
        title: "Андрей_и_Елизавета_12",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_12.jpg",
      },
      {
        title: "Андрей_и_Елизавета_13",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_13.jpg",
      },
      {
        title: "Андрей_и_Елизавета_14",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_14.jpg",
      },
      {
        title: "Андрей_и_Елизавета_15",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_15.jpg",
      },
      {
        title: "Андрей_и_Елизавета_16",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_16.jpg",
      },
      {
        title: "Андрей_и_Елизавета_2",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_2.jpg",
      },
      {
        title: "Андрей_и_Елизавета_3",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_3.jpg",
      },
      {
        title: "Андрей_и_Елизавета_4",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_4.jpg",
      },
      {
        title: "Андрей_и_Елизавета_5",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_5.jpg",
      },
      {
        title: "Андрей_и_Елизавета_6",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_6.jpg",
      },
      {
        title: "Андрей_и_Елизавета_7",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_7.jpg",
      },
      {
        title: "Андрей_и_Елизавета_8",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_8.jpg",
      },
      {
        title: "Андрей_и_Елизавета_9",
        path: "/images/stories/Андрей_и_Елизавета/Андрей_и_Елизавета_9.jpg",
      },
    ],
  },

  {
    id: 20,
    title: "Станислав",
    thumbnailImagePath: "/images/stories/Станислав/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Станислав_1",
        path: "/images/stories/Станислав/Станислав_1.jpg",
      },
      {
        title: "Станислав_10",
        path: "/images/stories/Станислав/Станислав_10.jpg",
      },
      {
        title: "Станислав_11",
        path: "/images/stories/Станислав/Станислав_11.jpg",
      },
      {
        title: "Станислав_12",
        path: "/images/stories/Станислав/Станислав_12.jpg",
      },
      {
        title: "Станислав_13",
        path: "/images/stories/Станислав/Станислав_13.jpg",
      },
      {
        title: "Станислав_2",
        path: "/images/stories/Станислав/Станислав_2.jpg",
      },
      {
        title: "Станислав_3",
        path: "/images/stories/Станислав/Станислав_3.jpg",
      },
      {
        title: "Станислав_4",
        path: "/images/stories/Станислав/Станислав_4.jpg",
      },
      {
        title: "Станислав_5",
        path: "/images/stories/Станислав/Станислав_5.jpg",
      },
      {
        title: "Станислав_6",
        path: "/images/stories/Станислав/Станислав_6.jpg",
      },
      {
        title: "Станислав_7",
        path: "/images/stories/Станислав/Станислав_7.jpg",
      },
      {
        title: "Станислав_8",
        path: "/images/stories/Станислав/Станислав_8.jpg",
      },
      {
        title: "Станислав_9",
        path: "/images/stories/Станислав/Станислав_9.jpg",
      },
    ],
  },

  {
    id: 21,
    title: "Ксения и Михаил",
    thumbnailImagePath: "/images/stories/Ксения_и_Михаил/Обложка.jpg",
    description: "",
    images: [
      {
        title: "Ксения_и_Михаил_1",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_1.jpg",
      },
      {
        title: "Ксения_и_Михаил_10",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_10.jpg",
      },
      {
        title: "Ксения_и_Михаил_11",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_11.jpg",
      },
      {
        title: "Ксения_и_Михаил_12",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_12.jpg",
      },
      {
        title: "Ксения_и_Михаил_13",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_13.jpg",
      },
      {
        title: "Ксения_и_Михаил_14",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_14.jpg",
      },
      {
        title: "Ксения_и_Михаил_15",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_15.jpg",
      },
      {
        title: "Ксения_и_Михаил_16",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_16.jpg",
      },
      {
        title: "Ксения_и_Михаил_17",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_17.jpg",
      },
      {
        title: "Ксения_и_Михаил_18",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_18.jpg",
      },
      {
        title: "Ксения_и_Михаил_2",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_2.jpg",
      },
      {
        title: "Ксения_и_Михаил_3",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_3.jpg",
      },
      {
        title: "Ксения_и_Михаил_4",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_4.jpg",
      },
      {
        title: "Ксения_и_Михаил_5",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_5.jpg",
      },
      {
        title: "Ксения_и_Михаил_6",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_6.jpg",
      },
      {
        title: "Ксения_и_Михаил_7",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_7.jpg",
      },
      {
        title: "Ксения_и_Михаил_8",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_8.jpg",
      },
      {
        title: "Ксения_и_Михаил_9",
        path: "/images/stories/Ксения_и_Михаил/Ксения_и_Михаил_9.jpg",
      },
    ],
  },
];
