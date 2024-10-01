export interface Article {
    sys: {
      id: string;
    };
    fields: {
      title: string;
      slug: string;
      content: string; // Atau `string` jika menggunakan Rich Text dari Contentful
      image?: {
        fields: {
          file: {
            url: string;
          };
        };
      };
    };
  }
  